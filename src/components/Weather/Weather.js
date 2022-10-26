import React, { useState, useEffect } from 'react'
import Search from '../Search/Search'
import InputCity from '../Search/InputCity/InputCity'
import SearchCity from '../Search/SearchCity/SearchCity'
import TableInfo from '../TableInfo/TableInfo'
import ErrorWindow from '../ErrorWindow/ErrorWindow'
import { useNavigate, useParams } from "react-router-dom"


function Weather() {
    let navigate = useNavigate();

    const { name } = useParams();

    const [data, setData] = useState({
        value: '',
        responseObj: null,
        checkedWeather: false,
        error: false
    })


    useEffect(() => {
        if (!name) {
            return
        }
        getTableInfo(name)
    }, [name])


    const handleChange = (event) => {
        setData({ ...data, value: event.target.value })
    }


    const changeWeat = () => {
        setData({ ...data, checkedWeat: !data.checkedWeat })
    }

    const getTableInfo = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f6b0640ae7c87d4a0e1b67c607b45f56`)
            .then(response => {
                if (response.ok) {
                    response.json().then((res) => setData({ ...data, responseObj: res, error: false }))
                    console.log(response)
                    console.log(data.error)
                } else {
                    throw new Error('Something went wrong')
                }
            })
            .catch(() => {
                console.log('errrr')
                setData({ ...data, error: true })
            })

        if (!name && data.value) {
            navigate('/check-the-weather/' + data.value)
        }
    }

    return (
        <div>
            <Search
                InputCity={<InputCity value={data.value} onChange={handleChange} />}
                SearchCity={<SearchCity onClick={() => getTableInfo(data.value)} />}
            />
            {data.error ?
                <ErrorWindow /> :
                data.responseObj &&
                <TableInfo data={data.responseObj} />
            }
            <div style={{ height: "30px" }}></div>
        </div>
    )
}

export default Weather
