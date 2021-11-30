import React from 'react'
import { getDate, convertToCelsium } from '../../../utils'
import './tableInfoDay.css'

function TableInfoDay({ dayData, tempInCelsium, dt, weatherProfile }) {

    const [profile, bg, temp, info] = (() => {
        let profile, bg, temp, info

        switch (weatherProfile) {
            case 'Clouds': profile = 'cloud'
                break
            case 'Clear': profile = ''
                break
            case 'Snow': profile = 'snow'
                break
            case 'Rain': profile = 'rain'
                break
        }

        if (dt > dayData.sunset) {
            bg = 'bg-night'
            temp = 'temp-night'
            info = 'info-night'
        } else {
            bg = 'bg-day'
            temp = 'temp-day'
            info = 'info-day'
        }

        return [profile, bg, temp, info]
    })()

    return (
        <div className={`container-table-info ${profile} ${bg}`}>
            <div className="container-temp">
                <div style={{ display: "flex" }}>
                    {dt < dayData.sunset ?
                        <div className="bg-img-solar"></div> :
                        <div className="bg-img-moon"></div>}
                    <div className={`temp ${temp}`}>
                        <div>{!tempInCelsium ? convertToCelsium(dayData.temp) + '℃' : Math.round(dayData.temp) + 'K'}</div>
                    </div>
                </div>
            </div>
            <div className={`container-info ${info}`}>
                <div className="container-item">
                    <div className="img-info icon-pressure"></div>
                    <div className="info">{dayData.pressure} hPa</div>
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