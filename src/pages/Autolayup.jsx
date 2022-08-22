import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { autolayup1Data, autolayup1Grid, autolayup2Data, autolayup2Grid, autolayup3Data, autolayup3Grid, autolayup4Data, autolayup4Grid } from '../data/dummy';
import { Header } from '../components';

const Autolayup = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Autolayup" />
      <div className="m-2 md:m-2 mt-2 p-2 md:p-2 bg-white rounded-3xl">
        <p className="flex items-center gap-2 text-gray-600">
          Total counts, NG counts and top 3 defects for each autolayup at 07/29/2022, 11:58:58 for last 1530 hours
        </p>
      </div>
      <GridComponent
        dataSource={autolayup1Data}
        width="auto"
        allowSorting
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {autolayup1Grid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search]} />

      </GridComponent>
      <div className="m-2 md:m-2 mt-2 p-2 md:p-2 bg-white rounded-3xl">
        <p className="flex items-center gap-2 text-gray-600">
          Top 3 defect percentage in each Autolayup at 07/29/2022, 11:58:58 for last 1530 hours
        </p>
      </div>
      <GridComponent
        dataSource={autolayup2Data}
        width="auto"
        allowSorting
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {autolayup2Grid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search]} />
      </GridComponent>
      <div className="m-2 md:m-2 mt-2 p-2 md:p-2 bg-white rounded-3xl">
        <p className="flex items-center gap-2 text-gray-600">
          Rework rate for all autolayups at 07/29/2022, 11:58:58 for last 1530 hours
        </p>
      </div>
      <GridComponent
        dataSource={autolayup3Data}
        width="auto"
        allowSorting
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {autolayup3Grid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search]} />
      </GridComponent>
      <div className="m-2 md:m-2 mt-2 p-2 md:p-2 bg-white rounded-3xl">
        <p className="flex items-center gap-2 text-gray-600">
          Autolayup1, Autolayup2, Autolayup3, Autolayup4 rework are above 20%. #1 defects are Micro-Crack-NG, (String) Cold Soldering, Micro-Crack-NG, (String) Cold Soldering respectively at 07/29/2022, 11:58:58 for last 1530 hours
        </p>
      </div>
      <GridComponent
        dataSource={autolayup4Data}
        width="auto"
        allowSorting
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {autolayup4Grid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search]} />
      </GridComponent>
    </div>
  );
};
export default Autolayup;
