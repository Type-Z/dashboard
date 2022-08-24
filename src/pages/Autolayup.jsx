import React from 'react';

import reworkPic from '../data/rework.jpg';
import { Header } from '../components';

const Autolayup = () => {
  const toolbarOptions = ['Search'];

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Autolayup" />
      <div className="m-2 md:m-2 mt-2 p-2 md:p-2 bg-white rounded-3xl">
        <p className="flex items-center gap-2 text-gray-600">
          Rework data from last two hours
        </p>
        <div className="m-2 md:m-2 mt-2 p-2 md:p-2 bg-white rounded-3xl">
          <img src={reworkPic} width="800" />
        </div>
      </div>
    </div>
  );
};
export default Autolayup;
