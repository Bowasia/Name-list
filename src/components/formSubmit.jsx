import { useState } from "react";
import { DSTextField, DSButton, DSFormGroup } from 'ttb-design-system-webview'

export default function FormSubmit({ onSubmit }) {
	const [formData, setData] = useState({
		firstName: "",
		lastName: "",
		ID: 1
	})

	const [error, setError] = useState({
		errorFirst: false,
		errorLast: false
	})


	const handleSubmit = (e) => {
		e.preventDefault(); // prevent a browser reload/refresh

		if (formData.firstName && formData.lastName){
			setData({ ...formData, ID: formData.ID })
			onSubmit(formData) // send data back
			console.log(`formData = ${formData}`)
			console.log(`formData.firstName = ${formData.firstName}`)
			setData({
				firstName: "",
				lastName: "",
				ID: formData.ID + 1
			})
			setError({errorFirst: false, errorLast: false})
		} 
		else {
			setError({errorFirst: formData.firstName ? false : true, errorLast: formData.lastName ? false : true})
		}

		console.log(`errorFirst ${error.errorFirst}`)
		console.log(`errorLast ${error.errorLast}`)
	}
	
	return (
		<>
			<DSFormGroup>
				<DSTextField
					value={formData.firstName}
					error={error.errorFirst}
					errorMessage="Enter your first name"
					half
					onChange={(e) => setData({ ...formData, firstName: e.target.value })}
					label="Firstname"
					tabIndex={1}
				/>
				<DSTextField
					half
					error={error.errorLast}
					errorMessage="Enter your last name"
					value={formData.lastName}
					onChange={(e) => setData({ ...formData, lastName: e.target.value })}
					label="Lastname"
					tabIndex={2}
				/>
				<DSButton
					onClick={handleSubmit}
					tabIndex={3}
				>Submit</DSButton>
			</DSFormGroup>
		</>
	)
}