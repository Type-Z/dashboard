### Functions for apis in main dashboard page.
import pandas as pd
import datetime
import data_prefix
# import xlwings

# function to get the last 2 hour time frame
def get_time():
    now = datetime.datetime.now()
    # now = datetime.datetime(2022, 7, 1, 22, 0)
    #now = datetime.datetime(2022, 6, 22, 9, 30)### test data
    start = now - datetime.timedelta(hours = 2)
    hour = start.hour
    timeframe_start_hour = hour - (hour%2)
    timeframe_start = start.replace(hour=timeframe_start_hour,minute=0,second=0,microsecond=0)

    shift_day = timeframe_start - datetime.timedelta(hours = 6)
    month = shift_day.strftime("%B")
    
    ## Decide which sheet to edit. 
    ## For example, JUNE 26 6am ~ JUNE 27 6am is count as JUNE 26, 26 is in the fourth week, so save in June Week 4
    week_number = (shift_day.day-1)//7+1
    worksheet_day = str((shift_day.day-1)%7+1)

    file_path = month + ' Week ' + str(week_number) +'.xlsx'
    return file_path, worksheet_day, shift_day


file_path, worksheet_day, shift_day = get_time()
file_path = data_prefix.prefix + file_path

AL_week_file = pd.read_excel(file_path, sheet_name='Summary Page')
AL_day_file = pd.read_excel(file_path, sheet_name=worksheet_day)


# get weekly production
def total_weekly_production():
    num = AL_week_file.iloc[10][9]
    res = { "weeklyProduction": num }
    return res
  
def last_two_hours():
    row = shift_day.hour//2*5+2
    AL01 = AL_day_file.iloc[row][1]
    AL02 = AL_day_file.iloc[row][2]
    AL03 = AL_day_file.iloc[row][3]
    AL04 = AL_day_file.iloc[row][4]
    res = { 
      "AL01": str(AL01),
      "AL02": str(AL02),
      "AL03": str(AL03),
      "AL04": str(AL04),
    }
    return res

def avg_panel_time():
    AL01 = AL_day_file.iloc[19][8]
    AL02 = AL_day_file.iloc[21][8]
    AL03 = AL_day_file.iloc[23][8]
    AL04 = AL_day_file.iloc[25][8]
    li = [AL01, AL02, AL03, AL04]
    for i in range(len(li)):
        if str(li[i]) != 'nan':
            li[i] = "{:.2f}".format(li[i])
        else:
            li[i] = 'nan'

    # print(type(AL01))
    res = { 
      "AL01": li[0],
      "AL02": li[1],
      "AL03": li[2],
      "AL04": li[3],
    }
    return res

def AL_percent():
    AL01 = int(AL_week_file.iloc[16][8])
    AL02 = int(AL_week_file.iloc[17][8])
    AL03 = int(AL_week_file.iloc[18][8])
    AL04 = int(AL_week_file.iloc[19][8])
    sum_ = AL01+AL02+AL03+AL04
    res = { 'results': [
      { 'x': 'AL01', 'y': AL01, 'text': str(AL01*100//sum_)+'%' },
      { 'x': 'AL02', 'y': AL02, 'text': str(AL02*100//sum_)+'%' },
      { 'x': 'AL03', 'y': AL03, 'text': str(AL03*100//sum_)+'%' },
      { 'x': 'AL04', 'y': AL04, 'text': str(AL04*100//sum_)+'%' },
  # { x: 'AL03', y: 18, text: '25%' },
  # { x: 'AL04', y: 18, text: '25%' },
    ]}
    return res