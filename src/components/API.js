import React from 'react'

const baseUrl = 'http://localhost:3000/'
const booksUrl = baseUrl + 'books'
const signInUrl = baseUrl + 'signin'
const validateUrl = baseUrl + 'validate'
const signUpUrl = baseUrl + 'signup'


    const get = (url) => 
        fetch(url)
        .then(resp => resp.json())
    
    const post = (url, data) => 
        fetch(url, {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        }).then(resp => resp.json())


    const signUp = (username, password, passwordConfirmation) => post(signUpUrl, {user: {username, password, password_confirmation: passwordConfirmation}})

    const getBooks = () => get(booksUrl)

    const signIn = (username, password) => post(signInUrl, { username, password })

    const validate  = () =>
        fetch(validateUrl, {
            headers: {
            Authorization: localStorage.token
            }
        }).then(resp => resp.json())


export default { getBooks, signIn, validate, signUp}