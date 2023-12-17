import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

function ForgotPass() {
    const navigate = useNavigate();
    const [email,setEmail]=useState("")
    const [error,setError]=useState("")

    const resetPassword = () =>{
        if(!email){
            setError(true)
            return
        }
        setError(false)
        navigate('/');
    }
    return (
        <div style={{ width: "100vw", height: "100vh", background: "#0072D4", display: "flex", justifyContent: "center", alignItems: "center" }}>

            <div style={{ width: "40%", height: "40%", background: "#fff", }}>

                <div className='row' >
                    <span style={{ margin: "20px" }} >Please Provide Your Registered Email ID to Reset Password </span>
                </div>
                <div className='row'>
                    <input
                        placeholder='Enter your mail'
                        className='inputBox'
                        style={{ width: "90%", marginLeft: "25px" }}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    ></input>
                     {error ? <p style={{ color: "red", fontSize: 10 }}> Please enter email</p> : null}
                </div>
                <div className='row' style={{marginTop:"4%",marginLeft:"4%"}}>
                    <div className='col'>
                        <button className='btn-none' style={{background:"#124FFD",color:"white"}}
                        onClick={()=>{resetPassword() }}
                        >Reset Password</button>
                    </div>
                    <div className='col'>
                        <button className='btn-none' style={{background:"#124FFD",color:"white"}}
                         onClick={()=>{ navigate('/');}}
                        >Login/signUp</button>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default ForgotPass
