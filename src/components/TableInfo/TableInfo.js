import React, { useState } from 'react'
import './tableInfo.css'
import Toggle from '../ui/Toggle'
import TableInfoDay from './TableInfoDay/TableInfoDay'
import TableInfoWeek from './TableInfoWeek/TableInfoWeek'

function TableInfo({ data }) {
    const [checked, setChecked] = useState(false)

    return (
        <div className="container-table">
            <div className="cityName">
                <div className="city">{data.list ? data.city.name : data.name}</div>
                <div className="container-toggle-weat">
                    <Toggle
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        rightFied="K"
                        leftField="℃"
                    />
                </div>
            </div>
            {data.list ?
                <TableInfoWeek
                    tempInCelsium={checked}
                    weekData={data.list.slice(0, 7)}
                /> :
                <TableInfoDay
                    tempInCelsium={checked}
                    dayData={{ ...data.main, ...data.sys }}
                    dt={data.dt}
                    weatherProfile={data.weather[0].main}
                />
            }
        </div >
    )
}

export default TableInfo