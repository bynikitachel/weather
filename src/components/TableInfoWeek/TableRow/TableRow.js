import { Component } from 'react'

function TableRow({ weekDate, weekTemp }) {
    console.log(weekDate);
    const weekDays = ['Sunday ', 'Monday', 'Tuesday', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ']
    const yearMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let date = new Date(weekDate * 1000);
    let dayNum = date.getDay()
    let monthNum = date.getMonth()
    let dateNum = date.getDate()

    return (
        <tr>
            <td>{dateNum + ' ' + yearMonths[monthNum]}</td>
            <td>{weekDays[dayNum]}</td>
            <td>{weekTemp}</td>
            <td>4</td>
        </tr>

    )
}

export default TableRow