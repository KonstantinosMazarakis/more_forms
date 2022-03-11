import React, { useState } from 'react';

const Forms = props => {
    let [firstName,setfirstName] = useState("")
    let [lastName,setlastName] = useState("")
    let [email,setemail] = useState("")
    let [password,setpassword] = useState("")
    let [confirmPassword,setconfirmPassword] = useState("")



    return (
        <>
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First Name: </label>
                <input type="text" className="form-group" onChange={(e)=>setfirstName(e.target.value)}/>
                {
                    firstName.length < 2 && firstName.length > 0?<p>must be at least 2 characters</p>:null
                }
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name: </label>
                <input type="text"  onChange={(e)=>setlastName(e.target.value)}/>
                {
                    lastName.length < 2 && lastName.length > 0?<p>must be at least 2 characters</p>:null
                }

            </div>
            <div className="form-group">
                <label htmlFor="email">Email: </label> 
                <input type="email" onChange={(e)=>setemail(e.target.value)}/>
                {
                email.length < 5 && email.length > 0?<p>must be at least 5 characters</p>:null
                }

            </div>
            <div className="form-group">
                <label htmlFor="password" >Password: </label>
                <input type="password" onChange={(e)=>setpassword(e.target.value)}/>
                {
                password.length < 8 && password.length > 0?<p>must be at least 8 characters</p>:null
                }

            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword" >Confirm Password: </label>
                <input type="password" onChange={(e)=>setconfirmPassword(e.target.value)}/>
                {
                    password != confirmPassword  && confirmPassword!= "" ?<p>password has to be the same</p>:null
                }
            </div>
        </form>
        </>
    )
}
export default Forms