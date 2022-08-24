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
export const autolayup1Grid = [
  { field: 'Autolayup',
    headerText: 'Autolayup',
    width: '100',
    textAlign: 'Center',
  },
  { field: 'Total',
    headerText: 'Total',
    width: '100',
    textAlign: 'Center',
  },
  { field: 'NG',
    headerText: 'NG',
    width: '100',
    textAlign: 'Center' },

  { field: 'Top1',
    headerText: 'Micro-Crack-NG',
    width: '100',
    textAlign: 'Center' },

  { field: 'Top2',
    headerText: '(String) Cold Soldering',
    width: '100',
    textAlign: 'Center' },

  { field: 'Top3',
    headerText: 'Black row',
    width: '100',
    textAlign: 'Center' },
];
export const autolayup2Grid = [
  { field: 'Autolayup',
    headerText: 'Autolayup',
    width: '100',
    textAlign: 'Center',
  },
  { field: 'Rework',
    headerText: 'Rework %',
    width: '100',
    textAlign: 'Center',
  },
  { field: 'Top1',
    headerText: 'Micro-Crack-NG %',
    width: '100',
    textAlign: 'Center' },

  { field: 'Top2',
    headerText: '(String) Cold Soldering %',
    width: '100',
    textAlign: 'Center' },

  { field: 'Top3',
    headerText: 'Black row %',
    width: '100',
    textAlign: 'Center' },
];
export const autolayup3Grid = [
  { field: 'Rework',
    headerText: 'Autolayup',
    width: '100',
    textAlign: 'Center',
  },
  { field: 'Total',
    headerText: 'Total',
    width: '100',
    textAlign: 'Center',
  },
  { field: 'NG',
    headerText: 'NG',
    width: '100',
    textAlign: 'Center' },
  { field: 'ReworkRate',
    headerText: 'Rework %',
    width: '100',
    textAlign: 'Center' },
];
export const autolayup4Grid = [
  { field: 'Autolayup',
    headerText: 'Autolayup',
    width: '100',
    textAlign: 'Center',
  },
  { field: 'Rework',
    headerText: 'Rework %',
    width: '100',
    textAlign: 'Center',
  },
  { field: 'Defect',
    headerText: '#1 Defect',
    width: '100',
    textAlign: 'Center' },
  { field: 'DefectRate',
    headerText: '#1 Defects %',
    width: '100',
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
    amount: '55',
    title: 'AL01 in last 2 hours',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '57',
    title: 'AL02 in last 2 hours',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '65',
    title: 'AL03 in last 2 hours',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '59',
    title: 'AL04 in last 2 hours',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const avgPanelTime = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '2.08',
    title: 'AL01',
    iconBg: '#FB9678',
    pcColor: 'red-600',
  },
  {
    icon: <FiStar />,
    amount: '2.59',
    title: 'AL02',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'red-600',
  },
  {
    icon: <BsChatLeft />,
    amount: '2.18',
    title: 'AL03',
    iconBg: '#00C292',
    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '2.08',
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
    DEFECT_REASONS: 'testYW10 - Inclusion EVA Mass',
    LAMINATION_TIME: 'test2022-06-12 05:42:17',
    LAMINATION_RESOURCE: 'testUS-1C-01CJ-A-CY03-SC',
    LAMINATION_OPERATOR: 'testCYUS03',
  },
  {
    CONTAINERNAME: 'test632XC1220609160007439875',
    DEFECT_REASONS: 'testYW10 - Inclusion EVA Mass',
    LAMINATION_TIME: 'test2022-06-12 05:42:17',
    LAMINATION_RESOURCE: 'testUS-1C-01CJ-A-CY03-SC',
    LAMINATION_OPERATOR: 'testCYUS03',
  },
  {
    CONTAINERNAME: 'test632XC1220609160007439875',
    DEFECT_REASONS: 'testYW10 - Inclusion EVA Mass',
    LAMINATION_TIME: 'test2022-06-12 05:42:17',
    LAMINATION_RESOURCE: 'testUS-1C-01CJ-A-CY03-SC',
    LAMINATION_OPERATOR: 'testCYUS03',
  },
  {
    CONTAINERNAME: 'test632XC1220609160007439875',
    DEFECT_REASONS: 'testYW10 - Inclusion EVA Mass',
    LAMINATION_TIME: 'test2022-06-12 05:42:17',
    LAMINATION_RESOURCE: 'testUS-1C-01CJ-A-CY03-SC',
    LAMINATION_OPERATOR: 'testCYUS03',
  },

];

export const autolayup1Data = [
  {
    Autolayup: 'Autolayup1',
    Total: 669,
    NG: 176,
    Top1: 93,
    Top2: 43,
    Top3: 10,
  },
  {
    Autolayup: 'Autolayup2',
    Total: 578,
    NG: 192,
    Top1: 98,
    Top2: 39,
    Top3: 22,
  },
  {
    Autolayup: 'Autolayup3',
    Total: 478,
    NG: 283,
    Top1: 66,
    Top2: 23,
    Top3: 10,
  },
  {
    Autolayup: 'Autolayup4',
    Total: 892,
    NG: 131,
    Top1: 110,
    Top2: 53,
    Top3: 12,
  },
];

export const autolayup2Data = [
  {
    Autolayup: 'Autolayup1',
    Rework: '66%',
    Top1: '93%',
    Top2: '43%',
    Top3: '10%',
  },
  {
    Autolayup: 'Autolayup2',
    Rework: '79%',
    Top1: '67%',
    Top2: '33%',
    Top3: '11%',
  },
  {
    Autolayup: 'Autolayup3',
    Rework: '63%',
    Top1: '45%',
    Top2: '90%',
    Top3: '16%',
  },
  {
    Autolayup: 'Autolayup4',
    Rework: '82%',
    Top1: '93%',
    Top2: '43%',
    Top3: '10%',
  },
];

export const autolayup3Data = [
  {
    Rework: 'First Time Rework',
    Total: '2526',
    NG: '717',
    ReworkRate: '0.283848',
  },
];

export const autolayup4Data = [
  {
    Autolayup: 'Autolayup1',
    Rework: '26.31%',
    Defect: 'Micro-Crack-NG',
    DefectRate: '52.84%',
  },
  {
    Autolayup: 'Autolayup2',
    Rework: '26.31%',
    Defect: 'Micro-Crack-NG',
    DefectRate: '52.84%',
  },
  {
    Autolayup: 'Autolayup3',
    Rework: '26.31%',
    Defect: 'Micro-Crack-NG',
    DefectRate: '52.84%',
  },
  {
    Autolayup: 'Autolayup4',
    Rework: '26.31%',
    Defect: 'Micro-Crack-NG',
    DefectRate: '52.84%',
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
    { x: new Date(2022, 6, 1), y: 633 },
    { x: new Date(2022, 6, 2), y: 597 },
    { x: new Date(2022, 6, 3), y: 487 },
    { x: new Date(2022, 6, 4), y: 548 },
    { x: new Date(2022, 6, 5), y: 569 },
    { x: new Date(2022, 6, 6), y: 620 },
    { x: new Date(2022, 6, 7), y: 566 },
    { x: new Date(2022, 6, 8), y: 326 },
    { x: new Date(2022, 6, 9), y: 439 },
    { x: new Date(2022, 6, 10), y: 601 },
    { x: new Date(2022, 6, 11), y: 566 },
    { x: new Date(2022, 6, 12), y: 609 },
    { x: new Date(2022, 6, 13), y: 565 },
    { x: new Date(2022, 6, 14), y: 615 },
    { x: new Date(2022, 6, 15), y: 507 },
    { x: new Date(2022, 6, 16), y: 582 },
    { x: new Date(2022, 6, 17), y: 580 },
    { x: new Date(2022, 6, 18), y: 633 },
    { x: new Date(2022, 6, 19), y: 585 },
    { x: new Date(2022, 6, 20), y: 513 },
    { x: new Date(2022, 6, 21), y: 674 },
    { x: new Date(2022, 6, 22), y: 438 },
    { x: new Date(2022, 6, 23), y: 625 },
    { x: new Date(2022, 6, 24), y: 498 },
    { x: new Date(2022, 6, 25), y: 637 },
  ],
  [
    { x: new Date(2022, 6, 1), y: 626 },
    { x: new Date(2022, 6, 2), y: 647 },
    { x: new Date(2022, 6, 3), y: 688 },
    { x: new Date(2022, 6, 4), y: 672 },
    { x: new Date(2022, 6, 5), y: 543 },
    { x: new Date(2022, 6, 6), y: 572 },
    { x: new Date(2022, 6, 7), y: 635 },
    { x: new Date(2022, 6, 8), y: 601 },
    { x: new Date(2022, 6, 9), y: 640 },
    { x: new Date(2022, 6, 10), y: 624 },
    { x: new Date(2022, 6, 11), y: 687 },
    { x: new Date(2022, 6, 12), y: 647 },
    { x: new Date(2022, 6, 13), y: 633 },
    { x: new Date(2022, 6, 14), y: 707 },
    { x: new Date(2022, 6, 15), y: 718 },
    { x: new Date(2022, 6, 16), y: 565 },
    { x: new Date(2022, 6, 17), y: 552 },
    { x: new Date(2022, 6, 18), y: 690 },
    { x: new Date(2022, 6, 19), y: 589 },
    { x: new Date(2022, 6, 20), y: 612 },
    { x: new Date(2022, 6, 21), y: 702 },
    { x: new Date(2022, 6, 22), y: 428 },
    { x: new Date(2022, 6, 23), y: 562 },
    { x: new Date(2022, 6, 24), y: 588 },
    { x: new Date(2022, 6, 25), y: 703 },
  ],
  [
    { x: new Date(2022, 6, 1), y: 589 },
    { x: new Date(2022, 6, 2), y: 655 },
    { x: new Date(2022, 6, 3), y: 651 },
    { x: new Date(2022, 6, 4), y: 654 },
    { x: new Date(2022, 6, 5), y: 468 },
    { x: new Date(2022, 6, 6), y: 600 },
    { x: new Date(2022, 6, 7), y: 643 },
    { x: new Date(2022, 6, 8), y: 627 },
    { x: new Date(2022, 6, 9), y: 526 },
    { x: new Date(2022, 6, 10), y: 658 },
    { x: new Date(2022, 6, 11), y: 543 },
    { x: new Date(2022, 6, 12), y: 588 },
    { x: new Date(2022, 6, 13), y: 562 },
    { x: new Date(2022, 6, 14), y: 610 },
    { x: new Date(2022, 6, 15), y: 610 },
    { x: new Date(2022, 6, 16), y: 440 },
    { x: new Date(2022, 6, 17), y: 605 },
    { x: new Date(2022, 6, 18), y: 577 },
    { x: new Date(2022, 6, 19), y: 596 },
    { x: new Date(2022, 6, 20), y: 639 },
    { x: new Date(2022, 6, 21), y: 566 },
    { x: new Date(2022, 6, 22), y: 548 },
    { x: new Date(2022, 6, 23), y: 344 },
    { x: new Date(2022, 6, 24), y: 527 },
    { x: new Date(2022, 6, 25), y: 633 },
  ],
  [
    { x: new Date(2022, 6, 1), y: 541 },
    { x: new Date(2022, 6, 2), y: 659 },
    { x: new Date(2022, 6, 3), y: 678 },
    { x: new Date(2022, 6, 4), y: 650 },
    { x: new Date(2022, 6, 5), y: 498 },
    { x: new Date(2022, 6, 6), y: 587 },
    { x: new Date(2022, 6, 7), y: 679 },
    { x: new Date(2022, 6, 8), y: 516 },
    { x: new Date(2022, 6, 9), y: 549 },
    { x: new Date(2022, 6, 10), y: 613 },
    { x: new Date(2022, 6, 11), y: 647 },
    { x: new Date(2022, 6, 12), y: 520 },
    { x: new Date(2022, 6, 13), y: 551 },
    { x: new Date(2022, 6, 14), y: 610 },
    { x: new Date(2022, 6, 15), y: 588 },
    { x: new Date(2022, 6, 16), y: 457 },
    { x: new Date(2022, 6, 17), y: 613 },
    { x: new Date(2022, 6, 18), y: 493 },
    { x: new Date(2022, 6, 19), y: 474 },
    { x: new Date(2022, 6, 20), y: 632 },
    { x: new Date(2022, 6, 21), y: 566 },
    { x: new Date(2022, 6, 22), y: 373 },
    { x: new Date(2022, 6, 23), y: 526 },
    { x: new Date(2022, 6, 24), y: 595 },
    { x: new Date(2022, 6, 25), y: 603 },
  ],
  [
    { x: new Date(2022, 6, 1), y: 2389 },
    { x: new Date(2022, 6, 2), y: 2558 },
    { x: new Date(2022, 6, 3), y: 2504 },
    { x: new Date(2022, 6, 4), y: 2524 },
    { x: new Date(2022, 6, 5), y: 2078 },
    { x: new Date(2022, 6, 6), y: 2379 },
    { x: new Date(2022, 6, 7), y: 2523 },
    { x: new Date(2022, 6, 8), y: 2070 },
    { x: new Date(2022, 6, 9), y: 2154 },
    { x: new Date(2022, 6, 10), y: 2496 },
    { x: new Date(2022, 6, 11), y: 2443 },
    { x: new Date(2022, 6, 12), y: 2364 },
    { x: new Date(2022, 6, 13), y: 2311 },
    { x: new Date(2022, 6, 14), y: 2542 },
    { x: new Date(2022, 6, 15), y: 2423 },
    { x: new Date(2022, 6, 16), y: 2044 },
    { x: new Date(2022, 6, 17), y: 2350 },
    { x: new Date(2022, 6, 18), y: 2393 },
    { x: new Date(2022, 6, 19), y: 2244 },
    { x: new Date(2022, 6, 20), y: 2396 },
    { x: new Date(2022, 6, 21), y: 2508 },
    { x: new Date(2022, 6, 22), y: 1787 },
    { x: new Date(2022, 6, 23), y: 2057 },
    { x: new Date(2022, 6, 24), y: 2208 },
    { x: new Date(2022, 6, 25), y: 2576 },
  ],
];

export const FRlineChartData = [
  [
    { x: new Date(2022, 6, 1), y: 727 },
    { x: new Date(2022, 6, 2), y: 917 },
    { x: new Date(2022, 6, 3), y: 818 },
    { x: new Date(2022, 6, 4), y: 739 },
    { x: new Date(2022, 6, 5), y: 720 },
    { x: new Date(2022, 6, 6), y: 581 },
    { x: new Date(2022, 6, 7), y: 812 },
    { x: new Date(2022, 6, 8), y: 788 },
    { x: new Date(2022, 6, 9), y: 676 },
    { x: new Date(2022, 6, 10), y: 837 },
    { x: new Date(2022, 6, 11), y: 839 },
    { x: new Date(2022, 6, 12), y: 904 },
    { x: new Date(2022, 6, 13), y: 626 },
    { x: new Date(2022, 6, 14), y: 834 },
    { x: new Date(2022, 6, 15), y: 964 },
    { x: new Date(2022, 6, 16), y: 688 },
    { x: new Date(2022, 6, 17), y: 725 },
    { x: new Date(2022, 6, 18), y: 897 },
    { x: new Date(2022, 6, 19), y: 498 },
    { x: new Date(2022, 6, 20), y: 899 },
    { x: new Date(2022, 6, 21), y: 786 },
    { x: new Date(2022, 6, 22), y: 534 },
    { x: new Date(2022, 6, 23), y: 666 },
    { x: new Date(2022, 6, 24), y: 796 },
    { x: new Date(2022, 6, 25), y: 832 },
  ],
  [
    { x: new Date(2022, 6, 1), y: 698 },
    { x: new Date(2022, 6, 2), y: 874 },
    { x: new Date(2022, 6, 3), y: 798 },
    { x: new Date(2022, 6, 4), y: 972 },
    { x: new Date(2022, 6, 5), y: 736 },
    { x: new Date(2022, 6, 6), y: 756 },
    { x: new Date(2022, 6, 7), y: 902 },
    { x: new Date(2022, 6, 8), y: 634 },
    { x: new Date(2022, 6, 9), y: 690 },
    { x: new Date(2022, 6, 10), y: 846 },
    { x: new Date(2022, 6, 11), y: 859 },
    { x: new Date(2022, 6, 12), y: 759 },
    { x: new Date(2022, 6, 13), y: 888 },
    { x: new Date(2022, 6, 14), y: 854 },
    { x: new Date(2022, 6, 15), y: 730 },
    { x: new Date(2022, 6, 16), y: 705 },
    { x: new Date(2022, 6, 17), y: 670 },
    { x: new Date(2022, 6, 18), y: 794 },
    { x: new Date(2022, 6, 19), y: 732 },
    { x: new Date(2022, 6, 20), y: 828 },
    { x: new Date(2022, 6, 21), y: 779 },
    { x: new Date(2022, 6, 22), y: 531 },
    { x: new Date(2022, 6, 23), y: 588 },
    { x: new Date(2022, 6, 24), y: 709 },
    { x: new Date(2022, 6, 25), y: 762 },
  ],
  [
    { x: new Date(2022, 6, 1), y: 735 },
    { x: new Date(2022, 6, 2), y: 832 },
    { x: new Date(2022, 6, 3), y: 832 },
    { x: new Date(2022, 6, 4), y: 861 },
    { x: new Date(2022, 6, 5), y: 742 },
    { x: new Date(2022, 6, 6), y: 934 },
    { x: new Date(2022, 6, 7), y: 804 },
    { x: new Date(2022, 6, 8), y: 766 },
    { x: new Date(2022, 6, 9), y: 694 },
    { x: new Date(2022, 6, 10), y: 683 },
    { x: new Date(2022, 6, 11), y: 764 },
    { x: new Date(2022, 6, 12), y: 765 },
    { x: new Date(2022, 6, 13), y: 727 },
    { x: new Date(2022, 6, 14), y: 841 },
    { x: new Date(2022, 6, 15), y: 827 },
    { x: new Date(2022, 6, 16), y: 769 },
    { x: new Date(2022, 6, 17), y: 796 },
    { x: new Date(2022, 6, 18), y: 839 },
    { x: new Date(2022, 6, 19), y: 868 },
    { x: new Date(2022, 6, 20), y: 754 },
    { x: new Date(2022, 6, 21), y: 926 },
    { x: new Date(2022, 6, 22), y: 876 },
    { x: new Date(2022, 6, 23), y: 754 },
    { x: new Date(2022, 6, 24), y: 647 },
    { x: new Date(2022, 6, 25), y: 872 },
  ],
  [
    { x: new Date(2022, 6, 1), y: 2160 },
    { x: new Date(2022, 6, 2), y: 2623 },
    { x: new Date(2022, 6, 3), y: 2448 },
    { x: new Date(2022, 6, 4), y: 2572 },
    { x: new Date(2022, 6, 5), y: 2198 },
    { x: new Date(2022, 6, 6), y: 2271 },
    { x: new Date(2022, 6, 7), y: 2518 },
    { x: new Date(2022, 6, 8), y: 2188 },
    { x: new Date(2022, 6, 9), y: 2060 },
    { x: new Date(2022, 6, 10), y: 2366 },
    { x: new Date(2022, 6, 11), y: 2462 },
    { x: new Date(2022, 6, 12), y: 2428 },
    { x: new Date(2022, 6, 13), y: 2241 },
    { x: new Date(2022, 6, 14), y: 2529 },
    { x: new Date(2022, 6, 15), y: 2521 },
    { x: new Date(2022, 6, 16), y: 2162 },
    { x: new Date(2022, 6, 17), y: 2191 },
    { x: new Date(2022, 6, 18), y: 2530 },
    { x: new Date(2022, 6, 19), y: 2098 },
    { x: new Date(2022, 6, 20), y: 2481 },
    { x: new Date(2022, 6, 21), y: 2491 },
    { x: new Date(2022, 6, 22), y: 1941 },
    { x: new Date(2022, 6, 23), y: 2008 },
    { x: new Date(2022, 6, 24), y: 2152 },
    { x: new Date(2022, 6, 25), y: 2466 },
  ],
];

export const FIlineChartData = [
  [
    { x: new Date(2022, 6, 1), y: 2054 },
    { x: new Date(2022, 6, 2), y: 2472 },
    { x: new Date(2022, 6, 3), y: 2646 },
    { x: new Date(2022, 6, 4), y: 2527 },
    { x: new Date(2022, 6, 5), y: 2243 },
    { x: new Date(2022, 6, 6), y: 2083 },
    { x: new Date(2022, 6, 7), y: 2532 },
    { x: new Date(2022, 6, 8), y: 2308 },
    { x: new Date(2022, 6, 9), y: 1994 },
    { x: new Date(2022, 6, 10), y: 2404 },
    { x: new Date(2022, 6, 11), y: 2492 },
    { x: new Date(2022, 6, 12), y: 2384 },
    { x: new Date(2022, 6, 13), y: 2246 },
    { x: new Date(2022, 6, 14), y: 2554 },
    { x: new Date(2022, 6, 15), y: 2501 },
    { x: new Date(2022, 6, 16), y: 2248 },
    { x: new Date(2022, 6, 17), y: 2349 },
    { x: new Date(2022, 6, 18), y: 2527 },
    { x: new Date(2022, 6, 19), y: 2061 },
    { x: new Date(2022, 6, 20), y: 2493 },
    { x: new Date(2022, 6, 21), y: 2412 },
    { x: new Date(2022, 6, 22), y: 2017 },
    { x: new Date(2022, 6, 23), y: 2015 },
    { x: new Date(2022, 6, 24), y: 2130 },
    { x: new Date(2022, 6, 25), y: 2479 },
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
    { x: 'Week1', y: 9975 },
    { x: 'Week2', y: 16143 },
    { x: 'Week3', y: 16427 },
    { x: 'Week4', y: 15776 },
    { x: 'Week5', y: 0 },
  ],
  [
    { x: 'Week1', y: 8925 },
    { x: 'Week2', y: 2757 },
    { x: 'Week3', y: 2473 },
    { x: 'Week4', y: 3124 },
    { x: 'Week5', y: 18900 },
  ],
];

export const FRstackedChartData = [
  [
    { x: 'Week1', y: 9975 },
    { x: 'Week2', y: 16143 },
    { x: 'Week3', y: 16427 },
    { x: 'Week4', y: 15776 },
    { x: 'Week5', y: 0 },
  ],
  [
    { x: 'Week1', y: 8925 },
    { x: 'Week2', y: 2757 },
    { x: 'Week3', y: 2473 },
    { x: 'Week4', y: 3124 },
    { x: 'Week5', y: 18900 },
  ],
];

export const FIstackedChartData = [
  [
    { x: 'Week1', y: 9975 },
    { x: 'Week2', y: 16143 },
    { x: 'Week3', y: 16427 },
    { x: 'Week4', y: 15776 },
    { x: 'Week5', y: 0 },
  ],
  [
    { x: 'Week1', y: 8925 },
    { x: 'Week2', y: 2757 },
    { x: 'Week3', y: 2473 },
    { x: 'Week4', y: 3124 },
    { x: 'Week5', y: 18900 },
  ],
];

export const ALDailystackedChartData = [
  [
    { x: 'AL01', y: 305 },
    { x: 'AL02', y: 240 },
    { x: 'AL03', y: 317 },
    { x: 'AL04', y: 305 },
  ],
  [
    { x: 'AL01', y: 402 },
    { x: 'AL02', y: 329 },
    { x: 'AL03', y: 344 },
    { x: 'AL04', y: 0 },
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
