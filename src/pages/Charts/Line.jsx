import React, { useEffect } from 'react';
import axios from 'axios';

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis, stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader, LineChart, Stacked } from '../../components';

const Line = () => {
  const getALLine = async () => {
    axios({
      method: 'GET',
      url: '/ALLine',
    })
      .then((response) => {
        const res = response.data;
        lineCustomSeries[0].dataSource = res.AL01;
        lineCustomSeries[1].dataSource = res.AL02;
        lineCustomSeries[2].dataSource = res.AL03;
        lineCustomSeries[3].dataSource = res.AL04;
        lineCustomSeries[4].dataSource = res.ALtotal;
      }).catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };
  const getALstack = async () => {
    axios({
      method: 'GET',
      url: '/ALstack',
    })
      .then((response) => {
        const res = response.data;
        stackedCustomSeries[0].dataSource = res.produced;
        stackedCustomSeries[1].dataSource = res.belowGoal;
      }).catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };
  useEffect(() => {
    getALLine();
    getALstack();
  }, []);
  return (
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
};

export default Line;
