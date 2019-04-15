import React, { useState, useEffect } from 'react';
import './App.css';
import querystring from 'query-string'
import Form from './Form/Form';
import SearchResults from './SearchResults/SearchResults'

const AUTH_API = process.env.REACT_APP_AUTH_API_URI

const App = (props) => {

  const [token, setToken] = useState(null)
  const [searchResult, setSearchResult] = useState('')


  useEffect(() => {
    console.log(props)
    const storedToken = sessionStorage.getItem("token")
    if (storedToken) {
      setToken(storedToken)
      return
    }

    const value = querystring.parse(props.location.search)
    const code = value.code

    if (code) {
      fetch(`${AUTH_API}${code}`)
        .then(res => res.json())
        .then((res) => {
          sessionStorage.setItem("token", res.token)
          setToken(res.token);
          props.history.push('/')
        });
    }
  })

  const onSubmit = (res) => {
    setSearchResult(res)
  }

  const onFormChange = (res) => {
    setSearchResult(res)
  }
  return (
    <div className='container my-3'>
    {token ?
    <div>
      <Form onSubmit={onSubmit} onFormChange={onFormChange} />
      <SearchResults searchResult={searchResult} />
      </div>

    :

    <p>Login</p>
    }
    </div>
  )
}


export default App;
