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
        // suggestions: ['1111', '1222', '3333', '44444', '2221']
        suggestions: []
    })

    useEffect(() => {
        if (!name) {
            return
        }
        getTableInfo(name)
    }, [name])


    const handleChange = (event) => {
        setData({ ...data, value: event.target.value })

        //autocomplete
        const { suggestions } = cities;
        console.log('suggestions-----', Object.values(suggestions))

        const userInput = event.currentTarget.value;
        console.log('userInput------', userInput);

        const filteredSuggestions = Object.values(suggestions).filter(
            suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) === 0 // не понятно
        )
        console.log('index----', filteredSuggestions.indexOf(userInput.toLowerCase()));
        console.log('filteredSuggestions-----', filteredSuggestions);

        setСities({
            ...cities,
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: event.currentTarget.value
        })
    }

    const onKeyDown = (event) => {
        const { activeSuggestion, filteredSuggestions } = cities

        if (event.code === "Enter") {
            event.preventDefault()
            event.stopPropagation()

            //autocomplete
            setСities({
                ...cities,
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            })
            //
            getTableInfo(data.value)

        } else if (event.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            setСities({ ...cities, activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow
        else if (event.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            setСities({ ...cities, activeSuggestion: activeSuggestion + 1 });
        }
    }

    //autocomplete
    const enterSuggestion = (event) => {
        setСities({
            ...cities,
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: event.currentTarget.innerText
        })
    }

    const getAutocomlete = () => {
        fetch("https://raw.githubusercontent.com/aZolo77/citiesBase/master/cities.json")
            .then(response => {
                if (response.ok) {
                    response.json().then((res) => setСities({ ...cities, suggestions: res.city }))
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
    }, [cities.suggestions.length])

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
                InputCity={<InputCity value={data.value} onChange={handleChange} onKeyDown={onKeyDown} cities={cities} enterSuggestion={enterSuggestion} />}
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