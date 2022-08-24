### Functions for apis in main dashboard page.
import pandas as pd
import datetime
import data_prefix

now_6hours = datetime.datetime.now() - datetime.timedelta(hours=6)
dt_yesterday = now_6hours - datetime.timedelta(days=1)
month = dt_yesterday.strftime("%B")
####################################
# month = 'June'
# Edit File
path = data_prefix.prefix + 'Production Report '+ month +'.xlsx'
sheet_month = 'Daily Data'
sheet_week_month = 'Weekly-Monthly Data'
df_month = pd.read_excel(path, sheet_name=sheet_month)
df_week_month = pd.read_excel(path, sheet_name=sheet_week_month)

def FILine():
    # draw FI Line chart data
    df = df_month.dropna(axis='columns')
    df = df.drop(columns=['Day of Week '])
    res = {}
    total = []
    for i in df.columns:
        dic = {}
        dic['x'] = df[i][0].replace(hour=4)
        dic['y'] = df[i][15]
        total.append(dic)
    res['FItotal'] = total
    return res

def FIStack():
    res = {}
    for prod in ['produced', 'belowGoal']:
        perWeek = []
        for i in ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5']:
            dic = {}
            dic['x'] = i
            if prod == 'produced':
                dic['y'] = df_week_month.iloc[4][i]
            else:
                dic['y'] = abs(df_week_month.iloc[5][i])
            perWeek.append(dic)
        res[prod] = perWeek
    return res