import React from 'react'
import './tableInfoWeek.css'
import TableRow from './TableRow/TableRow'
import { convertToCelsium } from '../../../utils'


function TableInfoWeek({ weekData, tempInCelsium }) {
    return (
        <div className="container-table-info">
            <table>
                <tr className="tableHead">
                    <th>Date</th>
                    <th>Day</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                {weekData && weekData.map((e, i) => (
                    <TableRow
                        key={i + '123'}
                        weekDate={weekData[i].dt}
                        weekTemp={!tempInCelsium ? convertToCelsium(weekData[i].temp.average) + '℃' : Math.round(weekData[i].temp.average) + 'K'}
                        weekPessure={weekData[i].pressure}
                        weekhumidity={weekData[i].humidity}
                    />
                ))}
            </table>
        </div >
    )
}

export default TableInfoWeek