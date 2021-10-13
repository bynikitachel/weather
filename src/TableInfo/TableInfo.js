import React from 'react'
import './tableInfo.css'

function TableInfo({ responseObj }) {
    // let [responseObj, setResponseObj] = useState({})
    return (
        <div className="container-table">
            <div>
                {/* {JSON.stringify(responseObj)} */}
                {responseObj.name}
            </div>
        </div>
    )
}

export default TableInfo