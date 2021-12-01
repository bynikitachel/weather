import React, { useState, useEffect } from 'react'
import Search from '../Search/Search'
import InputCity from '../Search/InputCity/InputCity'
import SearchCity from '../Search/SearchCity/SearchCity'
import TableInfo from '../TableInfo/TableInfo'
import Toggle from '../ui/Toggle'
import ErrorWindow from '../ErrorWindow/ErrorWindow'
import { useNavigate, useParams } from "react-router-dom"
// import Autocomplete from '../Search/InputCity/Autocomplete/Autocomplete'


function Weather() {
    let navigate = useNavigate();

    const { name } = useParams();

    const [data, setData] = useState({
        value: '',
        responseObj: null,
        checkedWeat: false,
        error: false
    })

    const [cities, setСities] = useState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: "",
        responseObjCities: null,
        cities: []
    })

    useEffect(() => {
        if (!name) {
            return
        }
        getTableInfo(name)
    }, [name])


    const handleChange = (event) => {
        setData({ ...data, value: event.target.value })
        if (event.code === "Enter") {
            event.preventDefault()
            event.stopPropagation()
            getTableInfo(data.value)
        }

        // const { suggestions } = setСities();
        // console.log('suggestions-----', suggestions)
        // const userInput = event.currentTarget.value;

        // const filteredSuggestions = suggestions.filter(
        //     suggestion =>
        //         suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        // );

        // this.setState({
        //     activeSuggestion: 0,
        //     filteredSuggestions,
        //     showSuggestions: true,
        //     userInput: event.currentTarget.value
        // });
    }

    const getAutocomlete = () => {
        fetch("https://raw.githubusercontent.com/aZolo77/citiesBase/master/cities.json")
            .then(response => {
                if (response.ok) {
                    response.json().then((res) => setСities({ ...cities, cities: res }))
                    console.log(data.error)
                } else {
                    throw new Error('Something went wrong')
                }
            })
            .catch(() => {
                console.log('errrr')
            })

    }

    useEffect(() => {
        getAutocomlete()
    }, [cities.cities.length])

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
            <div style={{ height: "30px" }}></div>
        </div>
    )
}

export default (Weather)