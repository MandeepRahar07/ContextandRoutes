import React from 'react'

export default function Login() {
    
    return (
        <div>
            <form className = "auth_form"  >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>  
                          
        </div>
    )
}