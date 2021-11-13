import React from 'react'
import { getDate, convertToCelsium } from '../../../utils'
import './tableInfoDay.css'

function TableInfoDay({ dayData, tempInCelsium }) {

    return (
        <div className="container-table-info">
            <div className="container-temp">
                <div className="container-temp-flex">
                    <div className="bg-img-solar"></div>
                    {/* <div className="bg-img-rain"></div> */}
                    <div className="temp">
                        <div>{!tempInCelsium ? convertToCelsium(dayData.temp) + '℃' : Math.round(dayData.temp) + 'K'}</div>
                    </div>
                </div>
            </div>
            <div className={'container-info'}>
                <div className="container-item">
                    <div className="img-info icon-pressure"></div>
                    <div className="info">{dayData.pressure}</div>
                </div>
                <div className="container-item">
                    <div className="img-info icon-humidity"></div>
                    <div className="info">{dayData.humidity}%</div>
                </div>
                <div className="container-item">
                    <div className="img-info icon-sunrise"></div>
                    <div className="info">{getDate(dayData.sunrise)}</div>
                </div>
                <div className="container-item">
                    <div className="img-info icon-sunset"></div>
                    <div className="info">{getDate(dayData.sunset)}</div>
                </div>
            </div>
        </div >
    )
}

export default TableInfoDay