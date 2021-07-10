import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	const [inputValue, setInputValue] = useState("");
	const [userName, setUserName] = useState("");
	const [initialLoad, fireInitialLoad] = useState(true);
	const [showAlert, doShowAlert] = useState(false);

	useEffect(() => {
		if (!initialLoad && inputValue === "") {
			setUserName("");
			doShowAlert(true);
		} else {
			doShowAlert(false);
		}
		fireInitialLoad(false);
	}, [inputValue]);

	const updateInfo = e => {
		setInputValue(e.target.value.trim());
	};

	const validateData = () => {
		if (inputValue === "") {
			setUserName("");
			doShowAlert(true);
		} else {
			setUserName(inputValue);
		}
	};

	return (
		<div className="text-center mt-5">
			<input type="text" value={inputValue} onChange={updateInfo} />{" "}
			&nbsp;
			<button className="btn btn-primary" onClick={validateData}>
				Say hello
			</button>
			<hr width="100%" />
			{userName.length > 0 && <h1>Hello {userName}</h1>}
			{showAlert && (
				<div className="alert alert-danger" role="alert">
					Invalid input, please fix!
				</div>
			)}
		</div>
	);
}
