import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel, GridValueGetterParams } from '@mui/x-data-grid';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@mui/material'
import { serverCalls } from '../../api'
import { useGetData } from '../../custom-hooks';
import { BudgetForm } from '../../components/BudgetForm'


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 45 },
    {
      field: 'month',
      headerName: 'Month',
      width: 100,
    },
    {
      field: 'income',
      headerName: 'Income',
      type: 'number',
      width: 90,
    },
    {
      field: 'rent',
      headerName: 'Rent/Mortgage',
      type: 'number',
      width: 110,
    },
    {
      field: 'utilities',
      headerName: 'Utilities',
      type: 'number',
      width: 90,
    },
    {
      field: 'internet',
      headerName: 'Internet',
      type: 'number',
      width: 80,
    },
    {
      field: 'insurance',
      headerName: 'Insurance',
      type: 'number',
      width: 90,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      type: 'number',
      width: 70,
    },
    {
      field: 'misc_bills',
      headerName: 'Misc Bills',
      type: 'number',
      width: 90,
    },
    {
      field: 'groceries',
      headerName: 'Groceries',
      type: 'number',
      width: 90,
    },
    {
      field: 'dine_out',
      headerName: 'Dine Out',
      type: 'number',
      width: 90,
    },
    {
      field: 'transportation',
      headerName: 'Transportation',
      type: 'number',
      width: 110,
    },
    {
      field: 'loans',
      headerName: 'Loans/Debts',
      type: 'number',
      width: 90,
    },
    {
      field: 'subscriptions',
      headerName: 'Subscriptions',
      type: 'number',
      width: 110,
    },
    {
      field: 'savings',
      headerName: 'Savings',
      type: 'number',
      width: 90,
    },
    {
      field: 'clothing',
      headerName: 'Clothing',
      type: 'number',
      width: 90,
    },
    {
      field: 'entertainment',
      headerName: 'Entertainment',
      type: 'number',
      width: 110,
    },
    {
      field: 'other',
      headerName: 'Other',
      type: 'number',
      width: 90,
    },
  ];
  interface gridData{
      data:{
          id?:string;
      }
  }
  

export const DataTable= () => {

    let {budgetData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] =useState<GridSelectionModel>([])
    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    let deleteData = async () =>{
        await serverCalls.delete(`${gridData[0]}`)
        getData();
    }

    console.log(gridData)

    return (
    <div style={{ height: 300, width: '100%' }}>
        <h2>Budgets In Inventory</h2>
      <DataGrid
        rows={budgetData}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[4]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={newSelectModel => setData(newSelectModel)}
        {...budgetData}
      />
      <Button onClick={handleOpen} color='primary'>Update</Button>
      <Button onClick={deleteData} color='warning'>Delete</Button>
      {/* Dialog Popup */}
      <Dialog open={open} onClose={handleClose} aria-labelby='form-dialog-title'>
          <DialogContent>
              <DialogContentText>Updating Budget: {gridData[0]}</DialogContentText>
              <BudgetForm id={`${gridData[0]}`} />
          </DialogContent>
          <DialogActions>
              <Button onClick={handleClose}>Cancel</Button> 
          </DialogActions>
      </Dialog>
    </div>
    ); 
}