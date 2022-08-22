import React from 'react';

import { ALpieChartData, ALdailystackedCustomSeries, ALdailystackedPrimaryXAxis, ALdailystackedPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart, Stacked } from '../../components';

const DailyAL = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Daily Autolayup" title="" />
    <div className="mt-10 flex gap-10 flex-wrap justify-center">
      <div className=" border-r-1 border-color m-4 pr-10">
        <p className="flex justify-center font-bold">Daily Production Per Shift</p>
        <PieChart id="chart-pie-AL" data={ALpieChartData} legendVisiblity height="full" />
      </div>
      <div>
        <p className="flex justify-center font-bold">Daily Production Per AL</p>
        <Stacked width="600" stackedPrimaryXAxis={ALdailystackedPrimaryXAxis} stackedPrimaryYAxis={ALdailystackedPrimaryYAxis} stackedCustomSeries={ALdailystackedCustomSeries} />
      </div>
    </div>
  </div>
);
export default DailyAL;
