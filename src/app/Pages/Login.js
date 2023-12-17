import React, { useEffect } from 'react'
import './loginstyle.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const [login, setLogin] = useState(true)
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState("")
    const [states, setStates] = useState([])
    const [state, setState] = useState("")
    const [cities, setCities] = useState([])
    const [city, setCity] = useState("")
    const [loginData, setLoginData] = useState({
        email: '',
        password: "",
    })
    const [signUpData, setSignUpData] = useState({
        type: "",
        first_name: "",
        last_name: "",
        email: '',
        address: "",
        pincode: "",
        isdCode: "",
        mobile: "",
        fax: "",
        phone: "",
        password: "",
        confirm_password: ""
    })
    const [loginDataError, setLoginDataError] = useState({
        email: false,
        password: false,
    })
    const [signUpDataError, setSignUpDataError] = useState({
        type: false,
        first_name: false,
        last_name: false,
        email: false,
        address: false,
        country: false,
        state: false,
        city: false,
        pincode: false,
        isdCode: false,
        mobile: false,
        fax: false,
        phone: false,
        password: false,
        confirm_password: false
    })
    useEffect(() => {
        getAllCountry()
    }, [])
    useEffect(() => {
        if (country) {
            getAllStates()
        }
        if (country && state) {
            getAllCities()
        }
    }, [country, state])

    const getAllCountry = async () => {
        var headers = new Headers();


        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        await fetch("https://countriesnow.space/api/v0.1/countries/codes", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log("result", result.data)
                setCountries(result.data)
            })
            .catch(error => console.log('error', error));
    }

    const getAllStates = async () => {
        let postData = {
            "country": country
        }
        await fetch('https://countriesnow.space/api/v0.1/countries/states', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        }).then(response => response.json()).then(result => {
            setStates(result.data.states)
        })

    }

    const getAllCities = async () => {
        let postData = {
            "country": country,
            "state": state
        }
        await fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        }).then(response => response.json()).then(result => {
            setCities(result.data)
        })

    }

    const loginHandleChange = (key, value) => {
        setLoginData({ ...loginData, [key]: value });
    }

    const signHandleChange = (key, value) => {
        setSignUpData({ ...signUpData, [key]: value });
    }

    const handleLoginSubmit = () => {

        if (!loginData.email) {
            setLoginDataError(prevState => ({
                ...prevState,
                email: true
            }));
            return
        }
        setLoginDataError(prevState => ({
            ...prevState,
            email: false
        }));


       
        if (!loginData.password) {
            setLoginDataError(prevState => ({
                ...prevState,
                password: true
            }));
            return
        }
        setLoginDataError(prevState => ({
            ...prevState,
            password: false
        }));
        navigate('/home');
        console.log("loginData", loginData)
    }

    const handleSignSubmit = () => {

        if (!signUpData.first_name) {
            setSignUpDataError(prevState => ({
                ...prevState,
                first_name: true
            }));
            return
        }
        setSignUpDataError(prevState => ({
            ...prevState,
            first_name: false
        }));

        if (!signUpData.email) {
            setSignUpDataError(prevState => ({
                ...prevState,
                email: true
            }));

            return
        }
        setSignUpDataError(prevState => ({
            ...prevState,
            email: false
        }));

        if (!signUpData.address) {
            setSignUpDataError(prevState => ({
                ...prevState,
                address: true
            }));
            return
        }
        setSignUpDataError(prevState => ({
            ...prevState,
            address: false
        }));

        if (!country) {
            setSignUpDataError(prevState => ({
                ...prevState,
                country: true
            }));
            return
        }
        setSignUpDataError(prevState => ({
            ...prevState,
            country: false
        }));
        if (!state) {
            setSignUpDataError(prevState => ({
                ...prevState,
                state: true
            }));
          
            return
        }
        setSignUpDataError(prevState => ({
            ...prevState,
            state: false
        }));
        if (!city) {
            setSignUpDataError(prevState => ({
                ...prevState,
                city: true
            }));
            return
        }
        setSignUpDataError(prevState => ({
            ...prevState,
            city: false
        }));
       
        if (!signUpData.pincode) {
            setSignUpDataError(prevState => ({
                ...prevState,
                pincode: true
            }));
             
            return
        }
        setSignUpDataError(prevState => ({
            ...prevState,
            pincode: false
        }));

        if (!signUpData.isdCode) {
            setSignUpDataError(prevState => ({
                ...prevState,
                isdCode: true 
            }));
            
            return
        }
        setSignUpDataError(prevState => ({
            ...prevState,
            isdCode: false
        }));

        if (!signUpData.mobile) {
            setSignUpDataError(prevState => ({
                ...prevState,
                mobile: true 
            }));
            return
        }
        setSignUpDataError(prevState => ({
            ...prevState,
            mobile: false
        }));



        if (!signUpData.password) {
            setSignUpDataError(prevState => ({
                ...prevState,
                password: true
            }))
            return
        }
        setSignUpDataError(prevState => ({
            ...prevState,
            password: false
        }))

        if (!signUpData.confirm_password) {
            setSignUpDataError(prevState => ({
                ...prevState,
                confirm_password: true
            }))
            return
        }
        setSignUpDataError(prevState => ({
            ...prevState,
            confirm_password: false
        }))
        setLogin(true)

    }

    return (
        <div className='container'>
            <div style={{ width: "50%", marginBottom: "5%" }}>
                <div className='row' style={{ border: "1px solid #E9ECEE", borderRadius: '30px', marginTop: "5%" }}>
                    <div className={login ? "col login" : "col signup"} >
                        <button className={login ? "btn-none white" : "btn-none black"} onClick={() => { setLogin(true) }}>
                            LOGIN
                        </button>

                    </div>
                    <div className={login ? "col signup" : "col login"}>
                        <button className={login ? "btn-none black" : "btn-none white"} onClick={() => { setLogin(false) }}>
                            SIGNUP
                        </button>

                    </div>

                </div>
                {login ? (
                    <div>
                        <div className='row' style={{ marginTop: "2%", marginBottom: "1%" }}>
                            <span style={{
                                position: "relative",
                                right: "12px"
                            }} >Email</span>
                        </div>
                        <div className='row'>
                            <input
                                placeholder='Enter your mail'
                                className='inputBoxRadius'
                                onChange={(e) => { loginHandleChange("email", e.target.value) }}
                            ></input>
                            {loginDataError.email ? <p style={{ color: "red", fontSize: 10 }}> Please enter email</p> : null}

                        </div>
                        <div className='row' style={{ marginTop: "2%", marginBottom: "1%" }}>
                            <span style={{
                                position: "relative",
                                right: "12px"
                            }} >Password</span>
                        </div>
                        <div className='row'>
                            <input
                                placeholder='Password'
                                className='inputBoxRadius'
                                type='password'
                                onChange={(e) => { loginHandleChange("password", e.target.value) }}
                            ></input>
                            {loginDataError.password ? <p style={{ color: "red", fontSize: 10 }}> Please enter password</p> : null}
                        </div>
                        <div className='row' style={{ marginTop: "2%", marginBottom: "1%" }}>
                            <div style={{
                                display: "flex",
                                justifyContent: "end"
                            }}>
                                <button className='btn-none' style={{ color: "blue" }}
                                    onClick={() => { navigate('/forgotPass'); }}
                                >
                                    Forgot Password
                                </button>
                            </div>
                        </div>
                        <div className='row' style={{ marginTop: "2%" }}>
                            <button style={{ border: "1px solid rgb(0, 241, 204)", borderRadius: '30px', background: "rgb(0, 241, 204)", color: "white" }}
                                onClick={() => { handleLoginSubmit() }}
                            >LOG ME IN</button>
                        </div>
                    </div>
                ) :
                    (
                        <div>
                            <div>
                                <div className='row' style={{ marginTop: "2%", marginBottom: "1%" }}>
                                    <span style={{
                                        position: "relative",
                                        right: "12px"
                                    }} >Individual/Enterprise/Government</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <input type='radio' style={{ marginRight: "5px" }}
                                        value="individual"
                                        onChange={(e) => { signHandleChange("type", e.target.value) }}

                                        checked={signUpData.type === "individual"}
                                    ></input><span>Individual</span>
                                </div>
                                <div className='col'>
                                    <input type='radio' style={{ marginRight: "5px" }} value="enterprise"
                                        onChange={(e) => { signHandleChange("type", e.target.value) }}
                                        checked={signUpData.type === "enterprise"}
                                    ></input><span>Enterprise</span>
                                </div>
                                <div className='col'>
                                    <input type='radio' style={{ marginRight: "5px" }} value="government"
                                        onChange={(e) => { signHandleChange("type", e.target.value) }}
                                        checked={signUpData.type === "government"}
                                    ></input><span>Government</span>
                                </div>
                            </div>
                            <div className='row' style={{ marginTop: "2%" }}>
                                <div className='col'>
                                    <div className='row'>
                                        <span style={{
                                            position: "relative",
                                            right: "12px"
                                        }} >First Name</span>
                                    </div>
                                    <div className='row' style={{ marginTop: "2%" }}>
                                        <input placeholder='First Name' style={{ width: "95%" }} className='inputBox'
                                            onChange={(e) => { signHandleChange("first_name", e.target.value) }}
                                        ></input>
                                        {signUpDataError.first_name ? <p style={{ color: "red", fontSize: 10 }}> Please enter First Name</p> : null}
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='row'>
                                        <span style={{
                                            position: "relative",
                                            right: "12px"
                                        }} >Last Name</span>
                                    </div>
                                    <div className='row' style={{ marginTop: "2%" }}>
                                        <input placeholder='Last Name' style={{ width: "95%" }}
                                            onChange={(e) => { signHandleChange("last_name", e.target.value) }}

                                            className='inputBox'></input>

                                    </div>
                                </div>
                            </div>
                            <div className='row' style={{ marginTop: "2%" }}>
                                <div className='col'>
                                    <div className='row'>
                                        <span style={{
                                            position: "relative",
                                            right: "12px"
                                        }} >Email</span>
                                    </div>
                                    <div className='row' style={{ marginTop: "2%" }}>
                                        <input placeholder='Email' style={{ width: "97.5%" }} className='inputBox'
                                            onChange={(e) => { signHandleChange("email", e.target.value) }}
                                        ></input>
                                        {signUpDataError.email ? <p style={{ color: "red", fontSize: 10 }}> Please enter Email</p> : null}
                                    </div>
                                </div>

                            </div>
                            <div className='row' style={{ marginTop: "2%" }}>
                                <div className='col'>
                                    <div className='row'>
                                        <span style={{
                                            position: "relative",
                                            right: "12px"
                                        }} >Address</span>
                                    </div>
                                    <div className='row' style={{ marginTop: "2%" }}>
                                        <input placeholder='Address' style={{ width: "97.5%" }} className='inputBox'
                                            onChange={(e) => { signHandleChange("address", e.target.value) }}
                                        ></input>
                                        {signUpDataError.address ? <p style={{ color: "red", fontSize: 10 }}> Please enter address</p> : null}
                                    </div>
                                </div>

                            </div>
                            <div className='row' style={{ marginTop: "2%" }}>
                                <div className='col'>
                                    <div className='row'>
                                        <span style={{
                                            position: "relative",
                                            right: "12px"
                                        }} >Country</span>
                                    </div>
                                    <div className='row' style={{ marginTop: "2%" }}>
                                        <select className='inputBox' style={{ width: "95%" }} onChange={(event) => { setCountry(event.target.value) }}>
                                            <option value="">Select an country</option>
                                            {countries.map((country, i) => {
                                                return (
                                                    <option key={i} value={country.name}>{country.name}</option>
                                                )
                                            })}
                                        </select>
                                        {signUpDataError.country ? <p style={{ color: "red", fontSize: 10 }}> Please select country </p> : null}

                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='row'>
                                        <span style={{
                                            position: "relative",
                                            right: "12px"
                                        }} >State</span>
                                    </div>
                                    <div className='row' style={{ marginTop: "2%" }}>
                                        <select className='inputBox' style={{ width: "95%" }} onChange={(event) => { setState(event.target.value) }}>
                                            <option value="">Select an state</option>
                                            {states.map((state, i) => {
                                                return (
                                                    <option key={i} value={state.name}>{state.name}</option>
                                                )
                                            })}
                                        </select>
                                        {signUpDataError.state ? <p style={{ color: "red", fontSize: 10 }}> Please select state </p> : null}

                                    </div>
                                </div>
                            </div>
                            <div className='row' style={{ marginTop: "2%" }}>
                                <div className='col'>
                                    <div className='row'>
                                        <span style={{
                                            position: "relative",
                                            right: "12px"
                                        }} >City</span>
                                    </div>
                                    <div className='row' style={{ marginTop: "2%" }}>
                                        <select className='inputBox' style={{ width: "95%" }} onChange={(event) => { setCity(event.target.value) }}>
                                            <option value="">Select an city</option>
                                            {cities.map((city, i) => {
                                                return (
                                                    <option key={i} value={city}>{city}</option>
                                                )
                                            })}
                                        </select>
                                        {signUpDataError.city ? <p style={{ color: "red", fontSize: 10 }}> Please select city </p> : null}

                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='row'>
                                        <span style={{
                                            position: "relative",
                                            right: "12px"
                                        }} >Pincode</span>
                                    </div>
                                    <div className='row' style={{ marginTop: "2%" }}>
                                        <input placeholder='Pincode' style={{ width: "95%" }} className='inputBox'
                                            onChange={(e) => { signHandleChange("pincode", e.target.value) }}

                                        ></input>
                                        {signUpDataError.pincode ? <p style={{ color: "red", fontSize: 10 }}> Please enter pincode </p> : null}

                                    </div>
                                </div>
                            </div>
                            <div className='row' style={{ marginTop: "2%" }}>
                                <div className='col'>
                                    <div className='row'>
                                        <span style={{
                                            position: "relative",
                                            right: "12px"
                                        }} >Mobile Number</span>
                                    </div>
                                    <div className='row' style={{ marginTop: "2%" }}>
                                        <div className='col-3'>

                                            <select className='inputBox' style={{
                                                width: "95%", position: "relative",
                                                marginLeft: "-13px"
                                            }}
                                                onChange={(event) => { signHandleChange("isdCode", event.target.value) }}
                                            >
                                                <option value="">Select ISD Code</option>
                                                {countries.map((country, i) => {
                                                    return (
                                                        <option key={i} value={country.dial_code}>{country.dial_code}</option>
                                                    )
                                                })}
                                            </select>
                                            {signUpDataError.isdCode ? <p style={{ color: "red", fontSize: 10 }}> Please select country code </p> : null}

                                        </div>
                                        <div className='col-9'>
                                            <input placeholder='Mobile Number' style={{ width: "100%" }} className='inputBox'
                                                onChange={(e) => { signHandleChange("mobile", e.target.value) }}
                                            ></input>
                                            {signUpDataError.mobile ? <p style={{ color: "red", fontSize: 10 }}> Please enter mobile </p> : null}

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='row' style={{ marginTop: "2%" }}>
                                <div className='col'>
                                    <div className='row'>
                                        <span style={{
                                            position: "relative",
                                            right: "12px"
                                        }} >Fax</span>
                                    </div>
                                    <div className='row' style={{ marginTop: "2%" }}>
                                        <input placeholder='Fax' style={{ width: "95%" }} className='inputBox'
                                            onChange={(e) => { signHandleChange("fax", e.target.value) }}

                                        ></input>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='row'>
                                        <span style={{
                                            position: "relative",
                                            right: "12px"
                                        }} >Phone</span>
                                    </div>
                                    <div className='row' style={{ marginTop: "2%" }}>
                                        <input placeholder='Phone' style={{ width: "95%" }} className='inputBox'
                                            onChange={(e) => { signHandleChange("phone", e.target.value) }}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className='row' style={{ marginTop: "2%" }}>
                                <div className='col'>
                                    <div className='row'>
                                        <span style={{
                                            position: "relative",
                                            right: "12px"
                                        }} >Password</span>
                                    </div>
                                    <div className='row' style={{ marginTop: "2%" }}>
                                        <input placeholder='Password' style={{ width: "97.5%" }} className='inputBox'
                                            onChange={(e) => { signHandleChange("password", e.target.value) }}
                                        ></input>
                                        {signUpDataError.password ? <p style={{ color: "red", fontSize: 10 }}> Please enter pasword </p> : null}

                                    </div>
                                </div>

                            </div>
                            <div className='row' style={{ marginTop: "2%" }}>
                                <div className='col'>
                                    <div className='row'>
                                        <span style={{
                                            position: "relative",
                                            right: "12px"
                                        }} >Confirm Password</span>
                                    </div>
                                    <div className='row' style={{ marginTop: "2%" }}>
                                        <input placeholder='Confirm Password' style={{ width: "97.5%" }} className='inputBox'
                                            onChange={(e) => { signHandleChange("confirm_password", e.target.value) }}

                                        ></input>
                                        {signUpDataError.confirm_password ? <p style={{ color: "red", fontSize: 10 }}> Please enter confirm password </p> : null}

                                    </div>
                                </div>

                            </div>
                            <div className='row' style={{ marginTop: "5%" }}>
                                <button style={{ border: "1px solid rgb(0, 241, 204)", borderRadius: '30px', background: "rgb(0, 241, 204)", color: "white" }}
                                    onClick={() => { handleSignSubmit() }}
                                >SIGNUP</button>
                            </div>
                        </div>
                    )
                }


            </div>

        </div>
    )
}

export default Login