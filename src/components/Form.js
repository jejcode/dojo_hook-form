import React, {useState} from 'react'

const Form = (props) => { // make a useState for each piece of form data
    const [firstName, SetFirstName] = useState("")
    const [lastName, SetLastName] = useState("")
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")
    const [confirmPassword, SetConfirmPassword] = useState("")

    const createUser = (e) => {
        e.preventDefault() // prevent default behavior of resetting the page

        const newUser = {firstName, lastName, email, password} // make an object out of newUser data
        console.log(`Welcome, ${newUser}`)
        SetFirstName("")
        SetLastName("")
        SetEmail("")
        SetPassword("")
        SetConfirmPassword("")
    }
    return (
        <div className='row justify-content-center'>
            <div className='col-4'>

                <form className='form m-4' onSubmit={ createUser }>
                    <div className='mb-4'>
                        <label className='form-label'>First Name:</label>
                        <input className='form-control' type="text" onChange={ (e) => SetFirstName(e.target.value)} value={ firstName }/>
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>Last Name:</label>
                        <input className='form-control' type="text" onChange={ (e) => SetLastName(e.target.value) } value={ lastName }/>
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>Email:</label>
                        <input className='form-control' type="text" onChange={ (e) => SetEmail(e.target.value) } value={ email }/>
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>Password:</label>
                        <input className='form-control' type="password" onChange={ (e) => SetPassword(e.target.value) } value={ password }/>
                    </div>
                    <div className='mb-4'>
                        <label className='form-label'>Confirm Password:</label>
                        <input className='form-control' type="password" onChange={ (e) => SetConfirmPassword(e.target.value) } value={ confirmPassword }/>
                    </div>
                </form>

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