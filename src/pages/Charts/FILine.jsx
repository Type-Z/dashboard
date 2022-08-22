import React from 'react';

import { FIlineCustomSeries, FILinePrimaryXAxis, FILinePrimaryYAxis, FIstackedCustomSeries, FIstackedPrimaryXAxis, FIstackedPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader, LineChart, Stacked } from '../../components';

const FILine = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="FI Line Chart" title="FI Data" />
    <div className="w-full">
      <LineChart lineCustomSeries={FIlineCustomSeries} LinePrimaryXAxis={FILinePrimaryXAxis} LinePrimaryYAxis={FILinePrimaryYAxis} />
    </div>
    <ChartsHeader category="# FI Panels Weekly" title="FI Data" />
    <div className="w-full flex justify-center">
      <Stacked width="800" stackedPrimaryXAxis={FIstackedPrimaryXAxis} stackedPrimaryYAxis={FIstackedPrimaryYAxis} stackedCustomSeries={FIstackedCustomSeries} />
    </div>
  </div>
);

export default FILine;
