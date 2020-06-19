import React from 'react';
import "./App.css";
import { MDBDataTable } from 'mdbreact';

function Table(props) {

  let data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
    ],
    rows: []
  };

  props.value.forEach(email => {
    let newEmail = {
        id: email.id,
        from: email.sender,
        subject: email.subject
    }
    data.rows.push(newEmail)
})

  


  return (
    <MDBDataTable className="table"
      striped
      bordered
      small
      data={data}
    />
  );
}

export default Table;