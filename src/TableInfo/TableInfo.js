import React from 'react'
import './tableInfo.css'

function TableInfo(props) {
    let temp = props.checked ? Math.round(props.responseObj.main.temp - 273) + '℃' : Math.round(props.responseObj.main.temp) + 'K';

    return (
        <div className="container-table">
            <div className="cityName">
                {props.responseObj.name}
                <div className="switcher">
                    <div className="container-unit green"><div>K</div></div>
                    <label class="switch">
                        <input type="checkbox" checked={props.checked} onChange={props.onChange}></input>
                        <span class="slider round"></span>
                    </label>
                    <div className="container-unit blue"><div>℃</div></div>
                </div>
            </div>
            <div className="container-temp">
                <div className="container-temp-flex">
                    <div className="bg-img-solar"></div>
                    {/* <div className="bg-img-rain"></div> */}
                    <div className="temp">
                        <div>{temp}</div>
                    </div>
                </div>

            </div>
            <div className={'container-info'}>
                <div className="container-item">
                    <div className="img-info icon-pressure"><img href="../img/pressure.png" width="45px" height="45px"></img></div>
                    <div>{props.responseObj.main.pressure}</div>
                </div>
                <div className="container-item">
                    <div className="img-info icon-humidity"></div>
                    <div>{props.responseObj.main.humidity}%</div>
                </div>
                <div className="container-item">
                    <div className="img-info icon-sunrise"></div>
                    <div>{props.responseObj.sys.sunrise}</div>
                </div>
                <div className="container-item">
                    <div className="img-info icon-sunset"></div>
                    <div>{props.responseObj.sys.sunset}</div>
                </div>
            </div>
        </div >
    )
}

export default TableInfo