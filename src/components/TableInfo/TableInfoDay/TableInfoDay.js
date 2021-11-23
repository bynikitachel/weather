import React from 'react'
import { getDate, convertToCelsium } from '../../../utils'
import './tableInfoDay.css'

function TableInfoDay({ dayData, tempInCelsium, dt, weatherProfile }) {

    const setProfile = () => {
        let profile
        let bg
        let temp
        let info

        if (weatherProfile === 'Clouds') {
            profile = 'cloud'
        } else if (weatherProfile === 'Clear') {
            profile = ''
        } else if (weatherProfile === 'Snow') {
            profile = 'snow'
        } else if (weatherProfile === 'Rain') {
            profile = 'rain'
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
    }

    return (
        <div className={`container-table-info ${setProfile()[0]} ${setProfile()[1]}`}>
            <div className="container-temp">
                <div style={{ display: "flex" }}>
                    {dt < dayData.sunset ?
                        <div className="bg-img-solar"></div> :
                        <div className="bg-img-moon"></div>}
                    <div className={`temp ${setProfile()[2]}`}>
                        <div>{!tempInCelsium ? convertToCelsium(dayData.temp) + '℃' : Math.round(dayData.temp) + 'K'}</div>
                    </div>
                </div>
            </div>
            <div className={`container-info ${setProfile()[3]}`}>
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