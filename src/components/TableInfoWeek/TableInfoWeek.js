import React, { useState } from 'react'
import './tableInfoWeek.css'
import Toggle2 from '../ui/Toggle2'
import TableRow from './TableRow/TableRow'


function TableInfoWeek({ name, weekData }) {
    console.log(weekData);
    const [checked, setChecked] = useState(false)
    let temper = []
    weekData && weekData.map((e, i, k) => (
        temper.push(!checked ? Math.round(weekData[i].temp.average - 273) + '℃' : Math.round(weekData[i].temp.average) + 'K')
        // console.log('qwer', weekData[i].temp.average)
    ))
    console.log('arr', temper);
    return (
        <div className="container-table">
            <div className="cityName">
                {name}
                <div className="container-toggle-weat">
                    <Toggle2 checked={checked} onChange={() => setChecked(!checked)} rightFied="K" leftField="℃" />
                </div>
            </div>
            <table>
                <tr className="tableHead">
                    <th>Date</th>
                    <th>Day</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                {weekData && weekData.map((e, i, k) => (
                    <TableRow
                        key={i + '123'}
                        weekDate={weekData[i].dt}
                        weekTemp={temper[i]}
                        weekPessure={weekData[i].pressure}
                        weekhumidity={weekData[i].humidity}
                    />
                ))}
            </table>

            {/* <div className="container-temp">
                <div className="container-temp-flex">
                    <div className="bg-img-solar"></div>
                    <div className="temp">
                        <div>{temper}</div>
                    </div>
                </div>

            </div> */}
            {/* <div className={'container-info'}>
                <div className="container-item">
                    <div className="img-info icon-pressure"></div>
                    <div className="info">{pressure} чего-то</div>
                </div>
                <div className="container-item">
                    <div className="img-info icon-humidity"></div>
                    <div className="info">{humidity}%</div>
                </div>
                <div className="container-item">
                    <div className="img-info icon-sunrise"></div>
                    <div className="info">{sunrise}</div>
                </div>
                <div className="container-item">
                    <div className="img-info icon-sunset"></div>
                    <div className="info">{sunset}</div>
                </div>
            </div> */}
        </div >
    )
}

export default TableInfoWeek