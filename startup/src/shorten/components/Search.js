import React, { useState } from 'react'
import { TextField, Button, LinearProgress } from '@material-ui/core'
import shrtcode from '../api/shrtcode'
import './Search.css'



const HTTP_URL_VALIDATOR_REGEX = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

const Search = () => {
    const [link, setLink] = useState('')
    const [short, setShort] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const validateURL = (string) => {
        return string.match(HTTP_URL_VALIDATOR_REGEX)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateURL(link)){
            getLink();
            setLink('')
            setIsLoading(!isLoading)
        }else {
            setShort('잘못된 URL 입니다. 다시 입력해 주세요 ! ')
        }
    }

    const getLink = async () => {
        await shrtcode
        .get(`shorten?url=${link}`)
        .then((response) => {
            console.log(response.data.result.short_link)
            setShort(response.data.result.short_link)
            setIsLoading(false)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    return (
        <div>
      
            <form onSubmit = {(e) => handleSubmit(e)}  style = {{display: 'flex', flexDirection: 'column'}}>
                <TextField
                style = {{marginBottom: '20px'}}
                label="Url 줄이기"
                variant="outlined"
                value={link}
                onChange= {(e) => {setLink(e.target.value)}}
                />
            {!isLoading && (
                 <Button onClick = {(e) => handleSubmit(e)} variant = "contained" 
                 style= {{marginBottom: '20px'}}
                 color="primary"
                 >
                 Submit
             </Button>
            )}

            {isLoading && <LinearProgress/>}
            </form>
            {short && (
                <div className = 'shortLink_wrap'>
                <div className = 'shortLink'> 줄여진 링크: {short} </div> 
                </div>
            )}
        </div>
    )
}

export default Search
