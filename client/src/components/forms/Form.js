import React, { Component } from "react"

const LoginFormConfig = {
    email: {
        type: email,
        placeholder: "E-mail",
        required: true,
        validation: {
            isEmail: true,
            notEmpty: true,
        }
    },

    password: {
        type: password,
        placeholder: "Password",
        required: true,
        validation: {
            isEmail: true,
            notEmpty: true,
        }
    }
}




