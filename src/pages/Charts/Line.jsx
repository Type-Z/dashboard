import React from 'react';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis, stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader, LineChart, Stacked } from '../../components';

const Line = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Autolayup Line Chart" title="Autolayup Data" />
    <div className="w-full">
      <LineChart lineCustomSeries={lineCustomSeries} LinePrimaryXAxis={LinePrimaryXAxis} LinePrimaryYAxis={LinePrimaryYAxis} />
    </div>
    <ChartsHeader category="# Autolayup Panels Weekly" title="Autolayup Data" />
    <div className="w-full flex justify-center">
      <Stacked width="800" stackedPrimaryXAxis={stackedPrimaryXAxis} stackedPrimaryYAxis={stackedPrimaryYAxis} stackedCustomSeries={stackedCustomSeries} />
    </div>
  </div>
);

export default Line;
