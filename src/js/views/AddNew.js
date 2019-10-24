import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

function AddNew(props) {
	const { actions } = useContext(Context);
	const [ifullname, SetIfullname] = useState();
	const [iemail, SetIemail] = useState();
	const [iphone, SetIphone] = useState();
	const [iaddress, SetIaddress] = useState();
	const [objContact, setObjContact] = useState();

	useEffect(
		() => {
			setObjContact({
				agenda_slug: "Cohort-V",
				full_name: ifullname,
				email: iemail,
				phone: iphone,
				address: iaddress
			});
		},
		[ifullname, iemail, iphone, iaddress]
	);
	return (
		<>
			<div className="mx-auto">
				<h1>Add New Contact</h1>
				<div className="form-group">
					<label>Full Name</label>
					<input
						type="text"
						value={ifullname}
						className="form-control"
						placeholder="Enter Name"
						onChange={event => SetIfullname(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Email</label>
					<input
						type="text"
						value={iemail}
						className="form-control"
						placeholder="Enter Email"
						onChange={event => SetIemail(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Phone</label>
					<input
						type="text"
						value={iphone}
						className="form-control"
						placeholder="Enter Phone #"
						onChange={event => SetIphone(event.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Address</label>
					<input
						type="text"
						value={iaddress}
						className="form-control"
						placeholder="Enter Address"
						onChange={event => SetIaddress(event.target.value)}
					/>
				</div>
				<button
					className="btn btn-large btn-primary"
					onClick={() => {
						actions.saveInfo(objContact, props);
					}}>
					SAVE
				</button>
				<Link to="/rigo">back to contacts</Link>
			</div>
		</>
	);
}
export default AddNew;
