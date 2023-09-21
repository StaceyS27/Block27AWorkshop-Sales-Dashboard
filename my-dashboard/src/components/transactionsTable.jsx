import React from "react";
import { mockTransactions } from "../mockData";
import Box from '@mui/material/Box'

export default function TransactionsTable() {
    return (
        mockTransactions.map((transaction) => {
         return (
            
                <table style = {{maxHeight: 200, maxWidth: 450, overflow:"auto", padding: "10px"}} >
                    <tr>
                <td>Name:{transaction.user}</td>
                
                <td>Date: {transaction.date}</td>
                <td>Cost: {transaction.cost}</td>
                </tr>
               </table>
           
            
            )
            })

    )
}

