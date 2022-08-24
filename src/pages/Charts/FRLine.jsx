import React, { useEffect } from 'react';
import axios from 'axios';

import { FRlineCustomSeries, FRLinePrimaryXAxis, FRLinePrimaryYAxis, FRstackedCustomSeries, FRstackedPrimaryXAxis, FRstackedPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader, LineChart, Stacked } from '../../components';

const FRLine = () => {
  const getFRLine = async () => {
    axios({
      method: 'GET',
      url: '/FRLine',
    })
      .then((response) => {
        const res = response.data;
        FRlineCustomSeries[0].dataSource = res.FR01;
        FRlineCustomSeries[1].dataSource = res.FR02;
        FRlineCustomSeries[2].dataSource = res.FR03;
        FRlineCustomSeries[3].dataSource = res.FRtotal;
      }).catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };
  const getFRstack = async () => {
    axios({
      method: 'GET',
      url: '/FRstack',
    })
      .then((response) => {
        const res = response.data;
        FRstackedCustomSeries[0].dataSource = res.produced;
        FRstackedCustomSeries[1].dataSource = res.belowGoal;
      }).catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };
  useEffect(() => {
    getFRLine();
    getFRstack();
  }, []);
  return (
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
};
export default FRLine;
