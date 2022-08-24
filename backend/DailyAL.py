### Functions for apis in main dashboard page.
import pandas as pd
import datetime
import data_prefix

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

    # Edit File
    file_path = month + ' Week ' + str(week_number) +'.xlsx'
    return file_path, worksheet_day, shift_day
# Edit File
file_path, worksheet_day, shift_day = get_time()
file_path = data_prefix.prefix + file_path

AL_day_file = pd.read_excel(file_path, sheet_name=worksheet_day)

def DailyALPie():
    # 4 hour shift to Eastern Time so it shows right date on line chart
    total_day = AL_day_file.iloc[15][6]
    total_night = AL_day_file.iloc[15][7]
    sum_ = total_day + total_night
    res = {
        'day': total_day,
        'dayPercent': str(total_day*100//sum_)+'%',
        'night': total_night,
        'nightPercent': str(total_night*100//sum_)+'%',
    }
    return res

def AL_Day_Stack():
    res = { 
        'day': [
            { 'x': 'AL01', 'y': AL_day_file.iloc[27][6] },
            { 'x': 'AL02', 'y': AL_day_file.iloc[29][6] },
            { 'x': 'AL03', 'y': AL_day_file.iloc[31][6] },
            { 'x': 'AL04', 'y': AL_day_file.iloc[33][6] },
        ],
        'night': [
            { 'x': 'AL01', 'y': AL_day_file.iloc[27][7] },
            { 'x': 'AL02', 'y': AL_day_file.iloc[29][7] },
            { 'x': 'AL03', 'y': AL_day_file.iloc[31][7] },
            { 'x': 'AL04', 'y': AL_day_file.iloc[33][7] },
        ]
    }
    return res