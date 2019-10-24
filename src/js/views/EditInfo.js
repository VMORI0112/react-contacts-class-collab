import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const EditInfo = props => {
	const { store, actions } = useContext(Context);

	const [ifullname, SetIfullname] = useState(store.contacts[props.match.params.elid].full_name);
	const [iemail, SetIemail] = useState(store.contacts[props.match.params.elid].email);
	const [iphone, SetIphone] = useState(store.contacts[props.match.params.elid].phone);
	const [iaddress, SetIaddress] = useState(store.contacts[props.match.params.elid].address);

	const [objContact, setObjContact] = useState();

	useEffect(
		() => {
			setObjContact({
				full_name: ifullname,
				email: iemail,
				phone: iphone,
				address: iaddress
			});
		},
		[ifullname, iemail, iphone, iaddress]
	);

	// Never use <form> </form> after this return in views like this

	return (
		<>
			<div className="mx-auto">
				<h1>Edit Contact Info</h1>
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
					onClick={() =>
						actions.editInfo(objContact, store.contacts[props.match.params.elid].id, props.history)
					}>
					Save Edited Information
				</button>
				<Link to="/rigo">back to contacts</Link>
			</div>
		</>
	);
};
EditInfo.propTypes = {
	match: PropTypes.object,
	history: PropTypes.objects
};

export default EditInfo;
// onClick={() =>
// 							actions.editInfo(objContact, store.contacts[props.match.params.elid].id, props.history)
// 						}>
