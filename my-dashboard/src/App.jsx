import { useState } from 'react'
import './App.css'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TransactionsTable from './components/transactionsTable'
import SideBar from './components/sideBar'
import BarChartWeekday from './components/barChartWeekday'


function App() {

  return (
    <div className="app">
      <Grid container spacing={25}
        direction="row"
        justifyContent="space-evenly"
        alignItems="flex-start" >
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={9}>
          <item><BarChartWeekday/></item>
          <h3>Recent Transactions</h3>
          <TransactionsTable />
        </Grid>

      </Grid>
    </div>
  )
}

export default App
