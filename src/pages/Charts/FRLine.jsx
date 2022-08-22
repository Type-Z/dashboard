import React from 'react';

import { FRlineCustomSeries, FRLinePrimaryXAxis, FRLinePrimaryYAxis, FRstackedCustomSeries, FRstackedPrimaryXAxis, FRstackedPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader, LineChart, Stacked } from '../../components';

const FRLine = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Framing Line Chart" title="FR Data" />
    <div className="w-full">
      <LineChart lineCustomSeries={FRlineCustomSeries} LinePrimaryXAxis={FRLinePrimaryXAxis} LinePrimaryYAxis={FRLinePrimaryYAxis} />
    </div>
    <ChartsHeader category="# Framer Panels Weekly" title="FR Data" />
    <div className="w-full flex justify-center">
      <Stacked width="800" stackedPrimaryXAxis={FRstackedPrimaryXAxis} stackedPrimaryYAxis={FRstackedPrimaryYAxis} stackedCustomSeries={FRstackedCustomSeries} />
    </div>
  </div>
);

export default FRLine;
