import React, { useEffect } from 'react';
import axios from 'axios';

import { FIlineCustomSeries, FILinePrimaryXAxis, FILinePrimaryYAxis, FIstackedCustomSeries, FIstackedPrimaryXAxis, FIstackedPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader, LineChart, Stacked } from '../../components';

const FILine = () => {
  // const [FRdata, setFRdata] = useState(null);
  const getFILine = async () => {
    axios({
      method: 'GET',
      url: '/FILine',
    })
      .then((response) => {
        const res = response.data;
        FIlineCustomSeries[0].dataSource = res.FItotal;
      }).catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };
  const getFIstack = async () => {
    axios({
      method: 'GET',
      url: '/FIstack',
    })
      .then((response) => {
        const res = response.data;
        FIstackedCustomSeries[0].dataSource = res.produced;
        FIstackedCustomSeries[1].dataSource = res.belowGoal;
        // setFRdata((res.results));
        // FRlineCustomSeries
      }).catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };
  useEffect(() => {
    getFILine();
    getFIstack();
  }, []);
  return (
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
};

export default FILine;
