import React, { useState, useEffect } from 'react'
import Search from '../Search/Search'
import InputCity from '../Search/InputCity/InputCity'
import SearchCity from '../Search/SearchCity/SearchCity'
import TableInfo from '../TableInfo/TableInfo'
import Toggle from '../ui/Toggle'
import ErrorWindow from '../ErrorWindow/ErrorWindow'
import { useNavigate, useParams } from "react-router-dom"


function Weather() {
    let navigate = useNavigate();
    let params = useParams();


    const { name } = useParams();
    console.log(name)



    const [data, setData] = useState({
        value: '',
        responseObj: null,
        checkedWeat: false,
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
        fetch(`https://community-open-weather-map.p.rapidapi.com/${data.checkedWeat ? 'climate/month' : 'weather'}?q=${city}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "4e894cd36amsh98aee08d4799ad6p110de9jsn32448b93205d"
            }
        })

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
                Toggle={<Toggle checked={data.checkedWeat} onChange={changeWeat} leftField="day" rightFied="week" />}
                SearchCity={<SearchCity onClick={() => getTableInfo(data.value)} />}
            />
            {data.error ?
                <ErrorWindow /> :
                data.responseObj &&
                <TableInfo data={data.responseObj} />
            }
        </div>
    )
}

export default (Weather)