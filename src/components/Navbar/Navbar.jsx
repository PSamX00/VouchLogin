import React from "react";
import "../../Loginpage.css"

export const Navbar = () => {
	return (
		<>
			<div className='navbar'>
				<div className='logoContainer'>
					ATools<b>.</b>
				</div>
				<div className='buttonContainer'>
					<button className='btn trialBtn'>
						Start Free Trial
					</button>
					<button className='btn loginBtn'>Login</button>
				</div>
			</div>
		</>
	);
};
