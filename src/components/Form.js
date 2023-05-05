import React, {useState} from 'react'

const Form = (props) => { // make a useState for each piece of form data
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState("")
    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState("")
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length > 0 && e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters!")
        } else {
            setFirstNameError("")
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length > 0 && e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters!")
        } else {
            setLastNameError("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length > 0 && e.target.value.length < 5) {
            setEmailError("Email must be at least 3 characters!")
        } else {
            setEmailError("")
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length > 0 && e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!")
        } else {
            setPasswordError("")
        }
        if(e.target.value !== confirmPassword && confirmPassword.length > 0) {
            setConfirmPasswordError("Confirm password does not match!")
        } else {
            setConfirmPasswordError("")
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if(e.target.value !== password && e.target.value.length > 0) {
            setConfirmPasswordError("Confirm password does not match!")
        } else {
            setConfirmPasswordError("")
        }
    }
    const createUser = (e) => {
        e.preventDefault() // prevent default behavior of resetting the page

        const newUser = {firstName, lastName, email, password} // make an object out of newUser data
        console.log(`Welcome, ${newUser.firstName}`)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return (
        <div className='row justify-content-center'>
            <div className='col-4'>

                <form className='form m-4' onSubmit={ createUser }>
                    <div className='mb-4'>
                        <label className='form-label'>First Name:</label>
                        <input className='form-control' type="text" onChange={ (e) => handleFirstName(e)} value={ firstName }/>
                        {
                            firstNameError ?
                            <p className='text-danger'>{ firstNameError }</p> :
                            ''
                        }
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>Last Name:</label>
                        <input className='form-control' type="text" onChange={ (e) => handleLastName(e) } value={ lastName }/>
                        {
                            lastNameError ?
                            <p className='text-danger'>{ lastNameError }</p> :
                            ''
                        }
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>Email:</label>
                        <input className='form-control' type="text" onChange={ (e) => handleEmail(e) } value={ email }/>
                        {
                            emailError ?
                            <p className="text-danger">{ emailError }</p> :
                            ''
                        }
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>Password:</label>
                        <input className='form-control' type="password" onChange={ (e) => handlePassword(e) } value={ password }/>
                        {
                            passwordError ?
                            <p className="text-danger">{ passwordError }</p> :
                            ''
                        }
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>Confirm Password:</label>
                        <input className='form-control' type="password" onChange={ (e) => handleConfirmPassword(e) } value={ confirmPassword }/>
                        {
                            confirmPasswordError ?
                            <p className="text-danger">{ confirmPasswordError }</p> :
                            ''
                        }
                    </div>
                    {
                        firstNameError || lastNameError || emailError || passwordError || confirmPasswordError ?
                        <input type="submit" value="Create User" disabled/> :
                        <input type="submit" value="Create User" />
                    }
                </form>
                <hr></hr>
                <table className='table table-light caption-top'>
                    <caption>Your Form Data:</caption>
                    <tbody>
                    <tr>
                        <td className="col-3">First Name:</td>
                        <td>{ firstName }</td>
                    </tr>
                    <tr>
                        <td className="col-3">Last Name:</td>
                        <td> { lastName } </td>
                    </tr>
                    <tr>
                        <td className="col-3">Email:</td>
                        <td>{ email }</td>
                    </tr>
                    <tr>
                        <td className="col-3">Password:</td>
                        <td>{ password }</td>
                    </tr>
                    <tr>
                        <td className="col-2">Confirm Password:</td>
                        <td>{ confirmPassword }</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Form