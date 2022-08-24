import React, { useState, useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import axios from 'axios';

import { laminationData, laminationGrid } from '../data/dummy';
import { Header } from '../components';

const Lamination = () => {
  const [lamination, setLamination] = useState(laminationData);

  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: true, allowEditing: true };

  const getLamination = async () => {
    axios({
      method: 'GET',
      url: '/lamination',
    })
      .then((response) => {
        const res = response.data;
        setLamination((res.result));
      }).catch((error) => {
        if (error.response) {
          // console.log(error.response);
        }
      });
  };

  useEffect(() => {
    getLamination();
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Lamination" />
      <GridComponent
        dataSource={lamination}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {laminationGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Lamination;
