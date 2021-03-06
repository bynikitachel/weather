import React from 'react'

const weekDays = ['Sunday ', 'Monday', 'Tuesday', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ']
const yearMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function TableRow({ weekDate, weekTemp, weekPessure, weekhumidity }) {
    console.log(weekDate);
    let date = new Date(weekDate * 1000);
    let dayNum = date.getDay()
    let monthNum = date.getMonth()
    let dateNum = date.getDate()

    return (
        <tr>
            <td>{yearMonths[monthNum] + ', ' + dateNum}</td>
            <td>{weekDays[dayNum]}</td>
            <td>{weekTemp}</td>
            <td>{Math.round(weekPessure)} hPa</td>
            <td>{Math.round(weekhumidity)}%</td>
        </tr>

    )
}

export default TableRow