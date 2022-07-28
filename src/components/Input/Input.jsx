import React, { memo } from "react";

import styles from "./Input.module.css";

const Input = ({ onChangeHandler, value, type, placeholder, ...props }) => {

	const handleOnChange = (e) => {
		let inputValue = e.target.value;
		let inputName = e.target.name;
		onChangeHandler(inputName, inputValue);
		
	};

	return (
		<>
			<input
				type={type}
				className={styles.inputField}
				value={value}
				placeholder={placeholder}
				onChange={handleOnChange}
				{...props}
			/>
		</>
	);
};

export default memo(Input);
