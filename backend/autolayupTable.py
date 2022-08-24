import pandas as pd
import datetime as dt
from datetime import datetime

## read_file: Concatenate two files and select useful columns
def read_file(file0, file1, autolayup, time_in_hours):
    df1 = pd.read_excel(file0)
    df2 = pd.read_excel(file1)

    # select data from last n hours
    
    df2['TXNDATE'] = pd.to_datetime(df2['TXNDATE'])
    df2 = df2[df2['TXNDATE']>=(dt.datetime.now()-dt.timedelta(hours = time_in_hours))]

    # Save useful columns
    df1 = df1[['CONTAINERNAME','JKOELRESULT','DEFECTREASONNAME']]

    df2 = df2[['CONTAINERNAME','LONGINUSER']]

    # Inner join two dataframes
    # pd.concat([df1.set_index('CONTAINERNAME'),df2.set_index('CONTAINERNAME')], axis=1, join='inner')
    # df = df1.merge(df2, left_on='CONTAINERNAME', right_on='CONTAINERNAME', how = 'left')
    df = df1.merge(df2, left_on='CONTAINERNAME', right_on='CONTAINERNAME')

    # Skip Stringer02
    df = df[df.LONGINUSER != 'Stringer02']

    # Add autolayup column
    df['autolayup'] = df.apply(lambda row: autolayup[row.LONGINUSER], axis=1)

    # Combine 'String Cold soldering' and 'Cold soldering-NG' to '(String) Cold Soldering'
    df.loc[df['DEFECTREASONNAME'] == 'Cold soldering-NG','DEFECTREASONNAME'] = '(String) Cold Soldering'
    df.loc[df['DEFECTREASONNAME'] == 'String Cold soldering','DEFECTREASONNAME'] = '(String) Cold Soldering'

    # Drop "Rework Rework"
    df = df.drop_duplicates(subset=['CONTAINERNAME','JKOELRESULT','DEFECTREASONNAME'])
    return df


## Calculate rework percentage for each Autolayup
def rework(df, autolayup):
    
    res = df.groupby(['JKOELRESULT','autolayup']).size()
    df_auto = pd.DataFrame(columns=['autolayup', 'rework %'])
    for i in autolayup.values():
        percentage = "{:.2%}".format(res['NG'][i]/(res['NG'][i]+res['OK'][i]))
        df_auto = df_auto.append({'autolayup': i, 'rework %':percentage}, ignore_index=True) 
        
    return df_auto


## Calculate top 3 defects in each Autolayup and the % for the defects of all rework in this layup
def top_defect(autolayup, df_auto, df):
    # defect_name is the dataframe of NG counts for each autolayup and defect
    defect_name = df.groupby( ['autolayup','DEFECTREASONNAME'] ).size().to_frame(name = 'NG').reset_index()
    
    defect_sum = defect_name.groupby(['autolayup']).sum().reset_index()

    # DataFrame({'count' : df.groupby( ['autolayup','DEFECTREASONNAME'] ).size()}).reset_index()
    defect_total = df.groupby( ['autolayup'] ).size().to_frame(name = 'Total').reset_index()
    defect = df.groupby( ['DEFECTREASONNAME'] ).size().to_frame(name = 'count').nlargest(3,'count').reset_index()    

    # defect_sum is the dataframe of total counts, NG counts, and top 3 defect counts
    defect_sum = defect_total.join(defect_sum, lsuffix='', rsuffix='r').drop(columns=['autolayupr'])#.nlargest(3,'NG')    
    df_NG = df.groupby( ['autolayup'] ).size().to_frame(name = 'Total').reset_index()
    
    # for the top 3 defects, select by the defect name and autolayup name to get the according defect counts from defect_name
    for i in defect['DEFECTREASONNAME']:
        defect_sum[i] = defect_sum.apply(lambda row: int(defect_name.query("autolayup == '"+row['autolayup']+"' and DEFECTREASONNAME == '"+i+"'")['NG']) if not defect_name.query("autolayup == '"+row['autolayup']+"' and DEFECTREASONNAME == '"+i+"'")['NG'].empty else 0, axis=1)
    
    # deep copy and save defect_sum as defect_perc as the Top 3 defect percentage table
    defect_perc = defect_sum.copy(deep=True)
    
    # calculate percentage from the copy of original defect_sum table
    for i in defect['DEFECTREASONNAME']:
        defect_perc[i+'%'] = defect_perc.apply(lambda row: 0 if row['Total'] == 0 else "{:.2%}".format(row[i]/row['Total']), axis=1)
        defect_perc = defect_perc.drop(columns=[i])
    
    # join defect_perc and df_auto. df_auto contains the rework % for each autolayup
    defect_perc = df_auto.join(defect_perc, lsuffix='', rsuffix='r')
    defect_perc = defect_perc.drop(columns=['autolayupr','Total','NG'])#.set_index('autolayup')
    
    # Calculate overall statistics for all the autolayups
    overall = {'autolayup': 'Overall', 'rework %':"{:.2%}".format(defect_sum['NG'].sum()/defect_sum['Total'].sum())}
    for i in defect['DEFECTREASONNAME']:
        overall[i+'%'] = "{:.2%}".format(defect_sum[i].sum() / defect_sum['Total'].sum())  

    defect_perc = defect_perc.append(overall, ignore_index=True)#.set_index('autolayup')
    
    # first time rework table
    data = {'': ['First time rework'],
        'Total': [defect_sum['Total'].sum()],
       'NG':[defect_sum['NG'].sum()],
       'Rework rate':defect_sum['NG'].sum() / defect_sum['Total'].sum()}

    first_time_rework = pd.DataFrame(data).set_index('')

    # Calculate defect 1
    defect = df.groupby( ['autolayup','DEFECTREASONNAME'] ).size().to_frame(name = 'count').reset_index()

    defect_group = defect.groupby(['autolayup']).sum()

    defect_1 = defect.sort_values(['autolayup','count'],ascending=False).groupby('autolayup').head(1).set_index('autolayup')
    # Defect is the dataframe for the top 5 defects in each autolayup

    df_defect = pd.DataFrame(columns=['autolayup', 'DEFECTREASONNAME', 'rework %'])

    # Calculate the top 1 defect % for each layup
    for i in autolayup.values():
        defect_i = defect_1.loc[i]
        count = defect_group.loc[i].iloc[0]
        percentage = defect_i['count'] / count
        df_defect = df_defect.append({'autolayup': i, 'DEFECTREASONNAME': defect_i['DEFECTREASONNAME'], 'rework %': percentage}, ignore_index=True)

    defect_1 = df_defect.sort_values(['autolayup','rework %'],ascending=False).groupby('autolayup').head(1).set_index('autolayup')
    
    # Capitalize dataframe column names
    defect_sum.rename(columns = {'autolayup':'Autolayup'}, inplace = True)
    defect_sum = defect_sum.set_index('Autolayup')
    defect_perc.rename(columns = {'autolayup':'Autolayup', 'rework %':'Rework %'}, inplace = True)
    defect_perc = defect_perc.set_index('Autolayup')
    
    # Defect_1 is the dataframe for the top 1 defects in each autolayup
    return defect_sum, defect_perc, first_time_rework, defect_1

## Select Autolayup rework % > 0.2 and the #1 defect is for that autolayup (and the #1 defects %).
def autolayup_defect(defect_1, df_auto):
    df_auto['rework'] = df_auto.apply(lambda row: float(row['rework %'].strip('%'))/100, axis=1)
    df_auto = df_auto.drop(columns = ['rework %'])
    
    df_auto = df_auto[df_auto['rework'] > 0.2]

    res = pd.DataFrame(columns=['Autolayup', 'Rework %','#1 Defect', '#1 Defects %'])

    for index, row in df_auto.iterrows():
        autolayup = row['autolayup']
        defect_row = defect_1.loc[autolayup]
        defect_name = defect_row['DEFECTREASONNAME']
        defect_perc = defect_row['rework %']
        res = res.append({'Autolayup': autolayup, 'Rework %': "{:.2%}".format(row['rework']), '#1 Defect': defect_name,'#1 Defects %': "{:.2%}".format(defect_perc)}, ignore_index=True)

    res = res.set_index('Autolayup')
    # res is the Autolayup rework % > 0.2 and the #1 defect. To be sent as a notification.
    return res

def send(res, s, time_in_hours):
    
    if s == '>0.2' and res.empty:
        res = 'No autolayup rework>20%'
        text = 'Autolayup rework % > 0.2 and the #1 defect is for that autolayup at '
    elif s == '>0.2':
        text = str(res.index.to_list()).strip('[]') + ' rework are above 20%. #1 defects are ' +str(res['#1 Defect'].to_list()).strip('[]') +' respectively at '
        res = res.to_markdown()
    elif s == 'defect_perc':
        res = res.to_markdown()
        text = 'Top 3 defect percentage in each Autolayup at '
    elif s == 'sum':
        res = res.to_markdown()
        text = 'Total counts, NG counts and top 3 defects for each autolayup at '
    elif s == 'first time rework':
        res = res.to_markdown()
        text = 'Rework rate for all autolayups at '

    desc = '\n\n'+ text + datetime.now().strftime("%m/%d/%Y, %H:%M:%S")+' for last '+str(time_in_hours) + " hours\n\n"
    return desc, res


time_in_hours = 1530 ## Select data in the last 2 hours

file0 = 'jkoELtestFirstresultQuery.xls'
file1 = 'StringerInputQuery.xls'

# Autolayup dict
autolayup = {'Stringer01':'Autolayup1','Stringer03':'Autolayup2', 'Stringer05':'Autolayup3','Stringer08':'Autolayup4'}

df = read_file(file0, file1,autolayup, time_in_hours)
df_auto = rework(df, autolayup)
defect_sum, defect_perc, first_time_rework, defect_1 = top_defect(autolayup, df_auto, df)
res = autolayup_defect(defect_1, df_auto)

## Change send to comments if you don't need to send the accoding table
## Send count for NG and top 3 defects for each autolayup
desc, res = send(defect_sum, 'sum', time_in_hours)
## Send top 5 defects in each Autolayup
send(defect_perc, 'defect_perc', time_in_hours)
## Send first time rework table (rework rate for all autolayups)
send(first_time_rework, 'first time rework', time_in_hours)    
## Send Autolayup rework % > 0.2 and the #1 defect is for that autolayup (and the #1 defects %).
send(res, '>0.2', time_in_hours)