### Functions for apis in main dashboard page.
import pandas as pd
import datetime
import data_prefix

now_6hours = datetime.datetime.now() - datetime.timedelta(hours=6)
dt_yesterday = now_6hours - datetime.timedelta(days=1)
month = dt_yesterday.strftime("%B")
####################################
month = 'June'
# Edit File
path = data_prefix.prefix+'Production Report '+ month +'.xlsx'
################# month delete
sheet_month = month+ ' Daily Data'
sheet_week_month = month+' Weekly-Monthly Data'
df_month = pd.read_excel(path, sheet_name=sheet_month)
df_week_month = pd.read_excel(path, sheet_name=sheet_week_month)


def ALLine():
    # 4 hour shift to Eastern Time so it shows right date on line chart
    df = df_month.dropna(axis='columns')
    df = df.drop(columns=['Day of Week '])
    row = 1
    res = {}
    for AL in ['AL01', 'AL02', 'AL03', 'AL04']:
        # Add each autolayup data
        perAL = []
        row += 1
        for i in df.columns:
            dic = {}
            dic['x'] = df[i][0].replace(hour=4)
            dic['y'] = df[i][row]
            perAL.append(dic)
        res[AL] = perAL
    # Add total autolayup data
    total = []
    for i in df.columns:
        dic = {}
        dic['x'] = df[i][0].replace(hour=4)
        dic['y'] = df[i][11]
        total.append(dic)
    res['ALtotal'] = total
    return res

def ALStack():
    res = {}
    for prod in ['produced', 'belowGoal']:
        perWeek = []
        for i in ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5']:
            dic = {}
            dic['x'] = i
            if prod == 'produced':
                dic['y'] = df_week_month.iloc[0][i]
            else:
                dic['y'] = abs(df_week_month.iloc[1][i])
            perWeek.append(dic)
        res[prod] = perWeek
    return res