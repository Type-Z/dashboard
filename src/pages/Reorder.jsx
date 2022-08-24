import React, { useState, useEffect } from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';
import axios from 'axios';

import { reorderData, reorderGrid } from '../data/dummy';
import { Header } from '../components';

const Reorder = () => {
  const toolbarOptions = ['Search'];
  const [reorder, setReorder] = useState(reorderData);

  const editing = { allowDeleting: true, allowEditing: true };
  const getData = async () => {
    axios({
      method: 'GET',
      url: '/reorder',
    })
      .then((response) => {
        const res = response.data;
        setReorder((res.result));
      }).catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
  };
  useEffect(() => {
    // call api or anything
    getData();
  }, []);
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Reorder Data Yesterday" />
      <GridComponent
        dataSource={reorder}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {reorderGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page]} />

      </GridComponent>
    </div>
  );
};
export default Reorder;
