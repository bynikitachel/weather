import React from 'react'
import './tableInfoWeek.css'
import TableRow from './TableRow/TableRow'
import { convertToCelsium } from '../../../utils'


function TableInfoWeek({ weekData, view }) {
    return (
        <div className="container-table-info">
            {!view ?
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
                            weekTemp={convertToCelsium(weekData[i].temp.average) + '℃'}
                            weekPessure={weekData[i].pressure}
                            weekhumidity={weekData[i].humidity}
                        />
                    ))}
                </table> : <div>я пидорас</div>
            }

        </div >
    )
}

export default TableInfoWeek