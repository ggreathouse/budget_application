import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    }
  ];
  const rows = [
    { id: 1, firstName: 'Jon' },
    { id: 2, firstName: 'Cersei'},
    { id: 3, firstName: 'Jaime'},
    { id: 4, firstName: 'Arya'},
    { id: 5, firstName: 'Daenerys'},
    { id: 6, firstName: null},
    { id: 7, firstName: 'Ferrara'},
    { id: 8, firstName: 'Rossini' },
    { id: 9, firstName: 'Harvey' },
    { id: 10, firstName: 'Jon' },
    { id: 11, firstName: 'Cersei'},
    { id: 12, firstName: 'Jaime'},
    { id: 13, firstName: 'Arya'},
    { id: 14, firstName: 'Daenerys'},
    { id: 15, firstName: null},
  ];

export const EachBudget= () => {
    return (
        <div style={{ height: 300, width: '100%', marginTop: 100 }}>
        <h2>Budget</h2>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
      />
    </div>
    )
}