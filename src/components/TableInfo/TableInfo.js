import React, { useState } from 'react'
import './tableInfo.css'
import Toggle2 from '../ui/Toggle2'
import TableInfoDay from '../TableInfoDay/TableInfoDay'

function TableInfo({ data }) {
    const [checked, setChecked] = useState(false)
    // let temper = !checked ? Math.round(temp - 273) + '℃' : Math.round(temp) + 'K';
    return (
        <div className="container-table">
            <div className="cityName">{data[1]}
                <div className="container-toggle-weat">
                    <Toggle2 checked={checked} onChange={() => setChecked(!checked)} rightFied="K" leftField="℃" />
                </div>
            </div>
            <TableInfoDay
                dayData={data}
            />
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

export default TableInfo