import pandas as pd
import datetime as dt
import data_prefix

lamination_defect = ['BB05 - Backsheet Concave Pit',
'BB13 - Backsheet Dent',
'BB14 - Backsheet EVA Residue',
'YW10 - Inclusion EVA Mass',
'QP01 - Big Bubble in Window Area',
'QP02 - Small Bubble in Window Area',
'QP03 - Bubble in Cell Area',
'QP04 - Bubble in Barcode Area',
'QT14 - EVA not melted',
'QT15 - EVA Cavity']


# For camstar format
def camstar(df1):
    df1.columns = df1.columns.str.replace(' ','_')
    df1.columns = df1.columns.str.upper()
    # convert format
    
    df1['LAMINATION_TIME'] = pd.to_datetime(df1['LAMINATION_TIME'])
    # convert str to datetime type
    

    df = df1[df1['LAMINATION_TIME']>=(dt.datetime.now()-dt.timedelta(hours = 12))]# time interval
    # select data from last 12 hours
    
    df.dropna(subset=['DEFECT_REASONS'], how='all', inplace=True)
    # drop all the non-defect data
    
    data1 = df.loc[df1['DEFECT_REASONS'].isin(lamination_defect)]
    # Extract all data with lamination defect  
    
    data1 = data1[['CONTAINERNAME', 'DEFECT_REASONS','LAMINATION_TIME','LAMINATION_RESOURCE','LAMINATION_OPERATOR']]
    # Extract the columns needed, customize according to needs
    data1 = data1.set_index('CONTAINERNAME')

    return data1

def network_drive(df2):
    
    df2['LAMINATION_TIME'] = pd.to_datetime(df2['LAMINATION_TIME'])
    # convert str to datetime type
    
    #################### edit time here
    df = df2[df2['LAMINATION_TIME']>=(dt.datetime.now()-dt.timedelta(hours = 12))]# time interval
    # select data from last 12 hours
    
    df.dropna(subset=['DEFECT_REASONS'], how='all', inplace=True)
    # drop all the non-defect data
    
    data2 = df.loc[df2['DEFECT_REASONS'].isin(lamination_defect)]
    # Extract all data with lamination defect  
    
    data2 = data2[['CONTAINERNAME', 'DEFECT_REASONS','LAMINATION_TIME','LAMINATION_RESOURCE','LAMINATION_OPERATOR']]
    # Extract the columns needed, customize according to needs
    data2 = data2.set_index('CONTAINERNAME')
    return data2


# data input
# file input
df = pd.read_excel(data_prefix.prefix + 'FIReport.xls')
res = pd.DataFrame()
if 'Defect Reasons' in list(df.columns):
    res = camstar(df)
elif 'DEFECT_REASONS' in list(df.columns):
    res = network_drive(df)

def read_lamination():
    lamination_list = []
    for i in res.iterrows():
        dic = {}
        dic['CONTAINERNAME'] = i[0]
        dic['DEFECT_REASONS'] = i[1][0]
        dic['LAMINATION_TIME'] = str(i[1][1])
        dic['LAMINATION_RESOURCE'] = i[1][2]
        dic['LAMINATION_OPERATOR'] = i[1][3]
        lamination_list.append(dic)
    lamination_res = {'result':lamination_list}
    return lamination_res
