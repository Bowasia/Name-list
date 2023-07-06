import { useState } from "react";
import { DSTextField, DSButton, DSFormGroup } from 'ttb-design-system-webview'
export default function FormSubmit({ onSubmit }) {
	const [formData, setData] = useState({
		firstName: "",
		lastName: "",
		ID: 1
	})

	const handleSubmit = (e) => {
		e.preventDefault(); // prevent a browser reload/refresh
		setData({ ...formData, ID: formData.ID })

		onSubmit(formData) // send data back

		console.log(`formData = ${formData}`)
		console.log(`formData.firstName = ${formData.firstName}`)
		setData({
			firstName: "",
			lastName: "",
			ID: formData.ID + 1
		})
	}
	return (
		<>
			{/* <form onSubmit={handleSubmit}>
      
        <label>Firstname
        <input value={formData.firstName} name="first" required type="text" onChange={(e) => setData({...formData, firstName: e.target.value})}/>
        </label>

        <label>Lastname
        <input value={formData.lastName} name="last" required type="text" onChange={(e) => setData({...formData, lastName: e.target.value})}/>
        </label>

    <button type='submit'>Submit</button>
    </form> */}
			<DSFormGroup>
				<DSTextField
					value={formData.firstName}
					required
					half
					helpingText="Please enter your firstname"
					onChange={(e) => setData({ ...formData, firstName: e.target.value })}
					label="Firstname"


					tabIndex={1}
				/>
				<DSTextField
					half
					required
					value={formData.lastName}
					helpingText="Please enter your lastname"
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