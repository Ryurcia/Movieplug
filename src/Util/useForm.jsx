import { useState } from 'react';


export const useForm = (callback) => {
    const [inputValues, setInputValues] = useState({
        email : "",
        password:"",
        confirmedPassword: ""
    })

    const [inputErrors] = useState({
        email: "Invalid Email Address / Already In Use",
        password: "Password Too Weak",
        noMatchPassword: "Password Does not Match"
    })

    // Handlers
    const handleChange = (e) => {
        const {name,value} = e.target

        setInputValues({
            ...inputValues,
            [name]: value
        })
    }

    // Each Form will have unique submit functions
    const handleSubmit = () => {
        callback();
    }

    return {
        inputValues,
        inputErrors,
        handleChange,
        handleSubmit
    }
}