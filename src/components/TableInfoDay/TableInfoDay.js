import React, { useState } from 'react'
// import './tableInfoDay.css'
import Toggle2 from '../ui/Toggle2'

function TableInfoDay({ dayData }) {
    const [checked, setChecked] = useState(false)
    // let temper = !checked ? Math.round(temp - 273) + '℃' : Math.round(temp) + 'K';
    return (
        <div className="container-table">
            {/* <div className="cityName">
                {name}
                <div className="container-toggle-weat">
                    <Toggle2 checked={checked} onChange={() => setChecked(!checked)} rightFied="K" leftField="℃" />
                </div>
            </div> */}
            <div className="container-temp">
                <div className="container-temp-flex">
                    <div className="bg-img-solar"></div>
                    {/* <div className="bg-img-rain"></div> */}
                    <div className="temp">
                        <div>{dayData[0].temp}</div>
                    </div>
                </div>

            </div>
            <div className={'container-info'}>
                <div className="container-item">
                    <div className="img-info icon-pressure"></div>
                    <div className="info">{dayData[0].pressure}</div>
                </div>
                <div className="container-item">
                    <div className="img-info icon-humidity"></div>
                    <div className="info">{dayData[0].humidity}</div>
                </div>
                <div className="container-item">
                    <div className="img-info icon-sunrise"></div>
                    <div className="info">{dayData[2].sunrise}</div>
                </div>
                <div className="container-item">
                    <div className="img-info icon-sunset"></div>
                    <div className="info">{dayData[2].sunset}</div>
                </div>
            </div>
        </div >
    )
}

export default TableInfoDay