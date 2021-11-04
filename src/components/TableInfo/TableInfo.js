import React, { useState } from 'react'
import './tableInfo.css'
import Toggle2 from '../ui/Toggle2'
import TableInfoDay from './TableInfoDay/TableInfoDay'
import TableInfoWeek from './TableInfoWeek/TableInfoWeek'

function TableInfo({ data }) {
    const [checked, setChecked] = useState(false)

    return (
        <div className="container-table">
            <div className="cityName">{data.list ? data.city.name : data.name}
                <div className="container-toggle-weat">
                    <Toggle2
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        rightFied="K"
                        leftField="℃"
                    />
                </div>
            </div>
            {data.list ?
                <TableInfoWeek tempInCelsium={checked} weekData={data.list.slice(0, 7)} /> :
                <TableInfoDay tempInCelsium={checked} dayData={{ ...data.main, ...data.sys }} />}
        </div >
    )
}

export default TableInfo