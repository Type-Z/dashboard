from flask import Flask
import mainDashboard
import FRoutput
import ALoutput
import FIoutput
import DailyAL
import lamination
import reorder

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! rrrn and javascript"
    }

    return response_body


@api.route('/test')
def my_test():
    response_body = {
        "name": "hh",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body

@api.route('/totalProduction')
def total_production():
    res = mainDashboard.total_weekly_production()
    return res

@api.route('/lastTwoHour')
def last_two_hour():
    res = mainDashboard.last_two_hours()
    return res

@api.route('/avgPanelTime')
def avg_panel_time():
    res = mainDashboard.avg_panel_time()
    return res

@api.route('/ALpercent')
def AL_weekly_percent():
    res = mainDashboard.AL_percent()
    return res

@api.route('/ALLine')
def AL_Line():
    res = ALoutput.ALLine()
    return res

@api.route('/ALstack')
def AL_stack():
    res = ALoutput.ALStack()
    return res

@api.route('/FRLine')
def FR_Line():
    res = FRoutput.FRLine()
    return res

@api.route('/FRstack')
def FR_stack():
    res = FRoutput.FRStack()
    return res

@api.route('/FILine')
def FI_Line():
    res = FIoutput.FILine()
    return res

@api.route('/FIstack')
def FI_stack():
    res = FIoutput.FIStack()
    return res

@api.route('/ALDailyPie')
def AL_Daily_Pie():
    res = DailyAL.DailyALPie()
    print(res)
    return res

@api.route('/ALDailyStack')
def AL_Daily_Stack():
    res = DailyAL.AL_Day_Stack()
    return res

@api.route('/lamination')
def lamination_data():
    res = lamination.read_lamination()
    return res

@api.route('/reorder')
def reorder_data():
    res = reorder.read_reorder()
    print(res)
    return res