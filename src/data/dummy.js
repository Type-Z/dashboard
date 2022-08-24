import React from 'react';
import { AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiBarChart, FiStar } from 'react-icons/fi';
import { BsKanban, BsBoxSeam, BsChatLeft } from 'react-icons/bs';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';

export const EditorData = () => (
  <div>
    <p>EditorData</p>
  </div>
);

export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};
export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'd',
  intervalType: 'Days',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}',
  rangePadding: 'None',
  minimum: 100,
  maximum: 2800,
  interval: 200,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const FRLinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'd',
  intervalType: 'Days',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const FRLinePrimaryYAxis = {
  labelFormat: '{value}',
  rangePadding: 'None',
  minimum: 100,
  maximum: 2800,
  interval: 200,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const FILinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'd',
  intervalType: 'Days',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const FILinePrimaryYAxis = {
  labelFormat: '{value}',
  rangePadding: 'None',
  minimum: 1000,
  maximum: 2800,
  interval: 200,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const laminationGrid = [
  { field: 'CONTAINERNAME',
    headerText: 'Container Name',
    width: '150',
    textAlign: 'Center' },
  { field: 'DEFECT_REASONS',
    headerText: 'Defect Reasons',
    width: '130',
    format: 'yMd',
    textAlign: 'Center' },
  { field: 'LAMINATION_TIME',
    headerText: 'Lamination Time',
    width: '100',
    format: 'C2',
    textAlign: 'Center' },
  { field: 'LAMINATION_RESOURCE',
    headerText: 'Lamination Resource',
    width: '100',
    format: 'yMd',
    textAlign: 'Center' },
  { field: 'LAMINATION_OPERATOR',
    headerText: 'Lamination Operator',
    width: '150',
    textAlign: 'Center' },

];

export const reorderGrid = [
  { field: 'MaterialNo',
    headerText: 'Material No.',
    width: '100',
    textAlign: 'Center',
  },
  { field: 'Description_PartNumber_Manufacture',
    headerText: 'Description_PartNumber_Manufacture',
    width: '200',
    textAlign: 'Center',
  },
  { field: 'InventoryStatus',
    headerText: 'Inventory Status',
    width: '100',
    textAlign: 'Center' },

  { field: 'QtyinReorder',
    headerText: 'Qty in Reorder',
    width: '100',
    textAlign: 'Center' },
];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'MainDashboard',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Tables',
    links: [
      {
        name: 'Autolayup',
        icon: <BsKanban />,
      },
      {
        name: 'Reorder',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'Lamination',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'AutolayupOutput',
        icon: <AiOutlineStock />,
      },
      {
        name: 'FramingOutput',
        icon: <AiOutlineAreaChart />,
      },
      {
        name: 'FIOutput',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'DailyAL',
        icon: <RiStockLine />,
      },
    ],
  },
];

export const AL2hourData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '50',
    title: 'AL01 in last 2 hours',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '50',
    title: 'AL02 in last 2 hours',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '50',
    title: 'AL03 in last 2 hours',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '50',
    title: 'AL04 in last 2 hours',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const avgPanelTime = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '2.00',
    title: 'AL01',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <FiStar />,
    amount: '2.00',
    title: 'AL02',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-600',
  },
  {
    icon: <BsChatLeft />,
    amount: '2.00',
    title: 'AL03',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '2.00',
    title: 'AL04',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const laminationData = [
  {
    CONTAINERNAME: 'test632XC1220609160007439875',
    DEFECT_REASONS: 'test',
    LAMINATION_TIME: 'test2022-06-12 05:42:17',
    LAMINATION_RESOURCE: 'testUS-1C-01CJ-A-CY03-SC',
    LAMINATION_OPERATOR: 'testCYUS03',
  },
  {
    CONTAINERNAME: 'test632XC1220609160007439875',
    DEFECT_REASONS: 'test',
    LAMINATION_TIME: 'test2022-06-12 05:42:17',
    LAMINATION_RESOURCE: 'testUS-1C-01CJ-A-CY03-SC',
    LAMINATION_OPERATOR: 'testCYUS03',
  },
  {
    CONTAINERNAME: 'test632XC1220609160007439875',
    DEFECT_REASONS: 'test',
    LAMINATION_TIME: 'test2022-06-12 05:42:17',
    LAMINATION_RESOURCE: 'testUS-1C-01CJ-A-CY03-SC',
    LAMINATION_OPERATOR: 'testCYUS03',
  },
  {
    CONTAINERNAME: 'test632XC1220609160007439875',
    DEFECT_REASONS: 'test',
    LAMINATION_TIME: 'test2022-06-12 05:42:17',
    LAMINATION_RESOURCE: 'testUS-1C-01CJ-A-CY03-SC',
    LAMINATION_OPERATOR: 'testCYUS03',
  },

];

export const reorderData = [
  {
    MaterialNo: 41001062,
    Description_PartNumber_Manufacture: 'testdata',
    InventoryStatus: 'Reorder',
    QtyinReorder: -4.0625,
  },
  {
    MaterialNo: 41001062,
    Description_PartNumber_Manufacture: 'testdata',
    InventoryStatus: 'Reorder',
    QtyinReorder: -4.0625,
  },
  {
    MaterialNo: 41001062,
    Description_PartNumber_Manufacture: 'testdata',
    InventoryStatus: 'Reorder',
    QtyinReorder: -4.0625,
  },
];

export const lineChartData = [
  [
    { x: new Date(2022, 6, 1), y: 600 },
    { x: new Date(2022, 6, 2), y: 600 },
    { x: new Date(2022, 6, 3), y: 600 },
    { x: new Date(2022, 6, 4), y: 600 },
    { x: new Date(2022, 6, 5), y: 600 },
    { x: new Date(2022, 6, 6), y: 600 },
    { x: new Date(2022, 6, 7), y: 600 },
    { x: new Date(2022, 6, 8), y: 600 },
    { x: new Date(2022, 6, 9), y: 600 },
  ],
  [
    { x: new Date(2022, 6, 1), y: 600 },
    { x: new Date(2022, 6, 2), y: 600 },
    { x: new Date(2022, 6, 3), y: 600 },
    { x: new Date(2022, 6, 4), y: 600 },
    { x: new Date(2022, 6, 5), y: 600 },
    { x: new Date(2022, 6, 6), y: 600 },
    { x: new Date(2022, 6, 7), y: 600 },
    { x: new Date(2022, 6, 8), y: 600 },
    { x: new Date(2022, 6, 9), y: 600 },
  ],
  [
    { x: new Date(2022, 6, 1), y: 600 },
    { x: new Date(2022, 6, 2), y: 600 },
    { x: new Date(2022, 6, 3), y: 600 },
    { x: new Date(2022, 6, 4), y: 600 },
    { x: new Date(2022, 6, 5), y: 600 },
    { x: new Date(2022, 6, 6), y: 600 },
    { x: new Date(2022, 6, 7), y: 600 },
    { x: new Date(2022, 6, 8), y: 600 },
    { x: new Date(2022, 6, 9), y: 600 },
  ],
  [
    { x: new Date(2022, 6, 1), y: 600 },
    { x: new Date(2022, 6, 2), y: 600 },
    { x: new Date(2022, 6, 3), y: 600 },
    { x: new Date(2022, 6, 4), y: 600 },
    { x: new Date(2022, 6, 5), y: 600 },
    { x: new Date(2022, 6, 6), y: 600 },
    { x: new Date(2022, 6, 7), y: 600 },
    { x: new Date(2022, 6, 8), y: 600 },
    { x: new Date(2022, 6, 9), y: 600 },
  ],
  [
    { x: new Date(2022, 6, 1), y: 600 },
    { x: new Date(2022, 6, 2), y: 600 },
    { x: new Date(2022, 6, 3), y: 600 },
    { x: new Date(2022, 6, 4), y: 600 },
    { x: new Date(2022, 6, 5), y: 600 },
    { x: new Date(2022, 6, 6), y: 600 },
    { x: new Date(2022, 6, 7), y: 600 },
    { x: new Date(2022, 6, 8), y: 600 },
    { x: new Date(2022, 6, 9), y: 600 },
  ],
];

export const FRlineChartData = [
  [
    { x: new Date(2022, 6, 1), y: 600 },
    { x: new Date(2022, 6, 2), y: 600 },
    { x: new Date(2022, 6, 3), y: 600 },
    { x: new Date(2022, 6, 4), y: 600 },
    { x: new Date(2022, 6, 5), y: 600 },
    { x: new Date(2022, 6, 6), y: 600 },
    { x: new Date(2022, 6, 7), y: 600 },
    { x: new Date(2022, 6, 8), y: 600 },
    { x: new Date(2022, 6, 9), y: 600 },
  ],
  [
    { x: new Date(2022, 6, 1), y: 600 },
    { x: new Date(2022, 6, 2), y: 600 },
    { x: new Date(2022, 6, 3), y: 600 },
    { x: new Date(2022, 6, 4), y: 600 },
    { x: new Date(2022, 6, 5), y: 600 },
    { x: new Date(2022, 6, 6), y: 600 },
    { x: new Date(2022, 6, 7), y: 600 },
    { x: new Date(2022, 6, 8), y: 600 },
    { x: new Date(2022, 6, 9), y: 600 },
  ],
  [
    { x: new Date(2022, 6, 1), y: 600 },
    { x: new Date(2022, 6, 2), y: 600 },
    { x: new Date(2022, 6, 3), y: 600 },
    { x: new Date(2022, 6, 4), y: 600 },
    { x: new Date(2022, 6, 5), y: 600 },
    { x: new Date(2022, 6, 6), y: 600 },
    { x: new Date(2022, 6, 7), y: 600 },
    { x: new Date(2022, 6, 8), y: 600 },
    { x: new Date(2022, 6, 9), y: 600 },
  ],
  [
    { x: new Date(2022, 6, 1), y: 600 },
    { x: new Date(2022, 6, 2), y: 600 },
    { x: new Date(2022, 6, 3), y: 600 },
    { x: new Date(2022, 6, 4), y: 600 },
    { x: new Date(2022, 6, 5), y: 600 },
    { x: new Date(2022, 6, 6), y: 600 },
    { x: new Date(2022, 6, 7), y: 600 },
    { x: new Date(2022, 6, 8), y: 600 },
    { x: new Date(2022, 6, 9), y: 600 },
  ],
];

export const FIlineChartData = [
  [
    { x: new Date(2022, 6, 1), y: 600 },
    { x: new Date(2022, 6, 2), y: 600 },
    { x: new Date(2022, 6, 3), y: 600 },
    { x: new Date(2022, 6, 4), y: 600 },
    { x: new Date(2022, 6, 5), y: 600 },
    { x: new Date(2022, 6, 6), y: 600 },
    { x: new Date(2022, 6, 7), y: 600 },
    { x: new Date(2022, 6, 8), y: 600 },
    { x: new Date(2022, 6, 9), y: 600 },
  ],
];

export const lineCustomSeries = [
  { dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Autolayup1',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Autolayup2',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Autolayup3',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[3],
    xName: 'x',
    yName: 'y',
    name: 'Autolayup4',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[4],
    xName: 'x',
    yName: 'y',
    name: 'Total Autolayup Output',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

];

export const FRlineCustomSeries = [
  { dataSource: FRlineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'FR01 Output',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: FRlineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'FR02 Output',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: FRlineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'FR03 Output',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: FRlineChartData[3],
    xName: 'x',
    yName: 'y',
    name: 'Total FR Output',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },
];

export const FIlineCustomSeries = [
  { dataSource: FIlineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Total FI Output',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },
];

export const pieChartData = [
  { x: 'Labour', y: 18, text: '18%' },
  { x: 'Legal', y: 8, text: '8%' },
  { x: 'Production', y: 15, text: '15%' },
  { x: 'License', y: 11, text: '11%' },
  { x: 'Facilities', y: 18, text: '18%' },
  { x: 'Taxes', y: 14, text: '14%' },
  { x: 'Insurance', y: 16, text: '16%' },
];

export const ALpieChartData = [
  { x: 'DayShift', y: 1167, text: '54%' },
  { x: 'NightShift', y: 1075, text: '46%' },
];

export const ecomPieChartData = [
  { x: 'AL01', y: 18, text: '35%' },
  { x: 'AL02', y: 18, text: '15%' },
  { x: 'AL03', y: 18, text: '25%' },
  { x: 'AL04', y: 18, text: '25%' },
];

export const stackedChartData = [
  [
    { x: 'Week1', y: 10000 },
    { x: 'Week2', y: 10000 },
    { x: 'Week3', y: 10000 },
    { x: 'Week4', y: 10000 },
    { x: 'Week5', y: 10000 },
  ],
  [
    { x: 'Week1', y: 10000 },
    { x: 'Week2', y: 10000 },
    { x: 'Week3', y: 10000 },
    { x: 'Week4', y: 10000 },
    { x: 'Week5', y: 10000 },
  ],
];

export const FRstackedChartData = [
  [
    { x: 'Week1', y: 10000 },
    { x: 'Week2', y: 10000 },
    { x: 'Week3', y: 10000 },
    { x: 'Week4', y: 10000 },
    { x: 'Week5', y: 10000 },
  ],
  [
    { x: 'Week1', y: 10000 },
    { x: 'Week2', y: 10000 },
    { x: 'Week3', y: 10000 },
    { x: 'Week4', y: 10000 },
    { x: 'Week5', y: 10000 },
  ],
];

export const FIstackedChartData = [
  [
    { x: 'Week1', y: 10000 },
    { x: 'Week2', y: 10000 },
    { x: 'Week3', y: 10000 },
    { x: 'Week4', y: 10000 },
    { x: 'Week5', y: 10000 },
  ],
  [
    { x: 'Week1', y: 10000 },
    { x: 'Week2', y: 10000 },
    { x: 'Week3', y: 10000 },
    { x: 'Week4', y: 10000 },
    { x: 'Week5', y: 10000 },
  ],
];

export const ALDailystackedChartData = [
  [
    { x: 'AL01', y: 300 },
    { x: 'AL02', y: 3000 },
    { x: 'AL03', y: 300 },
    { x: 'AL04', y: 300 },
  ],
  [
    { x: 'AL01', y: 300 },
    { x: 'AL02', y: 300 },
    { x: 'AL03', y: 300 },
    { x: 'AL04', y: 300 },
  ],
];

export const stackedCustomSeries = [

  { dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: '# AL Panels Produced',
    type: 'StackingColumn',
    background: 'blue',

  },

  { dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: '# Panels Below Goal',
    type: 'StackingColumn',
    background: 'red',

  },

];

export const FRstackedCustomSeries = [

  { dataSource: FRstackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: '# FR Panels Produced',
    type: 'StackingColumn',
    background: 'blue',

  },

  { dataSource: FRstackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: '# Panels Below Goal',
    type: 'StackingColumn',
    background: 'red',

  },

];

export const FIstackedCustomSeries = [

  { dataSource: FIstackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: '# FI Panels Produced',
    type: 'StackingColumn',
    background: 'blue',

  },

  { dataSource: FIstackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: '# Panels Below Goal',
    type: 'StackingColumn',
    background: 'red',

  },

];

export const ALdailystackedCustomSeries = [

  { dataSource: ALDailystackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: '# AL Panels Produced Day Shift',
    type: 'StackingColumn',
    background: 'blue',

  },

  { dataSource: ALDailystackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: '# AL Panels Produced Night Shift',
    type: 'StackingColumn',
    background: 'red',

  },

];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 20000,
  interval: 2000,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const FRstackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const FRstackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 20000,
  interval: 2000,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const FIstackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const FIstackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 20000,
  interval: 2000,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const ALdailystackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const ALdailystackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 0,
  maximum: 1000,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};
