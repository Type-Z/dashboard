import pandas as pd
import data_prefix

# Edit File
data = pd.read_excel(data_prefix.prefix + 'reorder.xlsx')
data = data.set_index('Material No.').fillna(0)

def read_reorder():
    reorder_list = []
    for i in data.iterrows():
        dic = {}
        dic['MaterialNo'] = i[0]
        dic['Description_PartNumber_Manufacture'] = i[1][0]
        dic['InventoryStatus'] = i[1][1]
        dic['QtyinReorder'] = i[1][2]
        reorder_list.append(dic)
    reorder_res = {'result':reorder_list}
    return reorder_res
    