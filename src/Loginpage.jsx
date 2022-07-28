import axios from "axios";
import React, { useCallback, useState } from "react";
import { LOGIN_URL } from "./Constants";
import { Navbar } from "./components/Navbar/Navbar";
import Input from "./components/Input/Input";

import "./Loginpage.css";

export const Loginpage = () => {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const [data, setData] = useState();

	const handleChange = (fieldName, value) => {
		setCredentials({
			...credentials,
			[fieldName]: value,
		});
	};
	
	
	

	const handleLogin = async (e) => {
	
		e.preventDefault();
		try {
			let response = await axios.post(LOGIN_URL, {
				...credentials,
			});
			console.log(response?.data?.token);
			setData(response?.data?.token);
		
		} catch (err) {
			setData(err?.response?.data?.error);
		}
	};

	return (
		<div className="Container">
		

		<Navbar/>
			<div className='bodyContainer'>
			
				<div className='loginContainer'>
					<div className='insideDiv'>
						<div className='headingContainer'>
							<p className='heading'>
								Welcome Back
							</p>
							<p className='subHeading'>
								Sub-title text goes here
							</p>
						</div>
						<div className='formContainer'>
							<form onSubmit={handleLogin}>
								<Input
									type={"email"}
									placeholder={"Enter Username*"}
									value={credentials.email}
									onChangeHandler={handleChange}
									
									name={"email"}
								/>
								<Input
									type={"password"}
									placeholder={"Enter Password*"}
									value={credentials.password}
									onChangeHandler={handleChange}
							
									name={"password"}
								/>
								<p className='rightDiv'>{data}</p>

								<button type='submit' className='loginButton'>
									LOGIN
								</button>
							</form>
						</div>
						<div className='otherContainer'>
							<span><input type='checkbox' /><p>Remember Me</p></span>
						    <span><a>Forgot Password?</a></span></div>
					</div>
				</div>
				<div className='imageContainer'>IMAGE</div>
			</div>
		</div>
	);
};
