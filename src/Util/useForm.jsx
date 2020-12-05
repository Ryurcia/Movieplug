import { useState } from 'react';


export const useForm = (callback) => {
    const [inputValues, setInputValues] = useState({
        email : "",
        password:""
    })

    const [inputErrors] = useState({
        email: "Invalid Email Address / Already In Use",
        password: "Password Too Weak",
        emailSignIn: "Email does not exist",
        passwordSignIn: "Incorrect Password"
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