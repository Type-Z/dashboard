import { React, useState, useEffect } from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import axios from 'axios';

import { Stacked, Pie } from '../components';
import { AL2hourData, avgPanelTime, ALdailystackedPrimaryXAxis, ALdailystackedPrimaryYAxis, ALdailystackedCustomSeries } from '../data/dummy';

const MainDashboard = () => {
  const [weekAL, setWeekAL] = useState(null);
  const [ALPercent, setALPercent] = useState(null);

  const getWeekALProduction = async () => {
    axios({
      method: 'GET',
      url: '/totalProduction',
    })
      .then((response) => {
        const res = response.data;
        setWeekAL(({
          weekly: res.weeklyProduction }));
      }).catch((error) => {
        if (error.response) {
          // console.log(error.response);
        }
      });
  };

  const getLastTwoHours = async () => {
    axios({
      method: 'GET',
      url: '/lastTwoHour',
    })
      .then((response) => {
        const res = response.data;
        AL2hourData[0].amount = res.AL01;
        AL2hourData[1].amount = res.AL02;
        AL2hourData[2].amount = res.AL03;
        AL2hourData[3].amount = res.AL04;
      }).catch((error) => {
        if (error.response) {
          // console.log(error.response);
        }
      });
  };

  const getAvgPanelTime = async () => {
    axios({
      method: 'GET',
      url: '/avgPanelTime',
    })
      .then((response) => {
        const res = response.data;
        avgPanelTime[0].amount = res.AL01;
        avgPanelTime[1].amount = res.AL02;
        avgPanelTime[2].amount = res.AL03;
        avgPanelTime[3].amount = res.AL04;
      }).catch((error) => {
        if (error.response) {
          // console.log(error.response);
        }
      });
  };

  const getALPercent = async () => {
    axios({
      method: 'GET',
      url: '/ALpercent',
    })
      .then((response) => {
        const res = response.data;
        setALPercent((res.results));
      }).catch((error) => {
        if (error.response) {
          // console.log(error.response);
        }
      });
  };

  useEffect(() => {
    getLastTwoHours();
    getWeekALProduction();
    getAvgPanelTime();
    getALPercent();
  }, []);

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            {/* <p>To get your profile details: </p>
            {profileData
            && (
            <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
            )}
            {profile1Data
            && (
            <div>
              <p>Profile name: {profile1Data.profile_name}</p>
              <p>About me: {profile1Data.about_me}</p>
            </div>
            )} */}
            {/* {weekAL
            && (
            <div>
              <p>Profile name: {weekAL.weekly}</p>
            </div>
            )} */}
            <div>
              <p className="font-bold text-gray-400">Weekly Autolayup Production</p>
              {weekAL
              && (
              <p className="text-2xl">{weekAL.weekly}</p>
              )}
            </div>
            {/* <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button> */}
          </div>
          {/* <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div> */}
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {AL2hourData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-black-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>

      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">

          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Avg Time per Panel Today(Min.)</p>
          </div>
          <div className="mt-10 ">
            {avgPanelTime.map((item) => (
              <div key={item.title} className="flex justify-between mt-4 w-full">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl hover:drop-shadow-xl text-white rounded-full p-3"
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                  </div>
                </div>

                <p className={`text-${item.pcColor}`}>{item.amount} min</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl"> </p>

          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">

            <div className=" border-r-1 border-color m-4 pr-10">
              {/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-8 m-3 flex justify-center items-center gap-10"> */}
              <div>
                {/* <p className="text-2xl font-semibold ">15,323</p> */}
                <p className="text-black-500">Weekly Production % by AL</p>
              </div>

              <div className="w-50">
                <Pie id="pie-chart" data={ALPercent} legendVisiblity={false} height="250px" />
                <p className="flex text-pink-400 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Autolayup 1</span>
                </p>
                <p className="flex text-green-400 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Autolayup 2</span>
                </p>
                <p className="flex text-blue-400 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Autolayup 3</span>
                </p>
                <p className="flex text-black-400 hover:drop-shadow-xl">
                  <span>
                    <GoPrimitiveDot />
                  </span>
                  <span>Autolayup 4</span>
                </p>
              </div>
              {/* </div> */}

            </div>
            <div>
              <Stacked width="300" stackedPrimaryXAxis={ALdailystackedPrimaryXAxis} stackedPrimaryYAxis={ALdailystackedPrimaryYAxis} stackedCustomSeries={ALdailystackedCustomSeries} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
