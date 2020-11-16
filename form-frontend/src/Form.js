import React, { useState } from 'react'
import './Form.css'
import axios from 'axios'

function Form() {
    const [email, setEmail] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState("")
    const [picture, setPicture] = useState()
    function onSubmit(event) {
        event.preventDefault()

        const register = {
            firstname: firstname,
            lastname: lastname,
            phone: phone,
            email: email,
            picture: picture
        }

        axios.post("https://form151.herokuapp.com/login", register)
            .then(response => console.log(response.data))


        console.log(firstname);
        console.log(lastname);
        console.log(phone);
        console.log(email);

        setFirstname("")
        setLastname("")
        setPhone("")
        setEmail("")
        setPicture("")

    }
    return (
        <div className="banner-fadeBottom">
            <div className="login">

                <div className="login__container">
                    <h1>Form</h1>
                    <form encType="multipart/form-data" >

                        <h5>First Name</h5>
                        <input value={firstname} onChange={event => setFirstname(event.target.value)} type="text" required></input>
                        <h5>Last  Name</h5>
                        <input value={lastname} onChange={event => setLastname(event.target.value)} type="text" required></input>
                        <h5>E-mail</h5>
                        <input value={email} onChange={event => setEmail(event.target.value)} type="email" required></input>
                        <h5>Mobile number</h5>
                        <input value={phone} pattern="[0-9]{10}" placeholder="1234567890" onChange={event => setPhone(event.target.value)} type="tel"></input>
                        <input value={picture} onChange={event => setPicture(event.target.value)} type="file" required></input>
                        <button type="submit" onClick={onSubmit} className=" login__sign">Submit</button>
                    </form>


                </div>

            </div>
        </div>
    )
}

export default Form


