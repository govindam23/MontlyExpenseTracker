import React from "react";
import Chart from "./Chart/Chart";

function ExpensesChart(props){
    const ChartDataPoints =[
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'mar',value:0},
        {label:'Apr',value:0},
        {label:'may',value:0},
        {label:'jun',value:0},
        {label:'jul',value:0},
        {label:'aug',value:0},
        {label:'Sep',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0},

    ];
    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        ChartDataPoints[expenseMonth].value += expense.amount;

    }
    return <Chart dataPoints ={ChartDataPoints}></Chart>


}
export default ExpensesChart