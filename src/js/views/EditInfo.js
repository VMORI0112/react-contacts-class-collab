import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

const EditInfo = props => {
	const fullname = useRef(null);
	const email = useRef(null);
	const phone = useRef(null);
	const address = useRef(null);
	const { store, actions } = useContext(Context);

	const [ifullname, SetIfullname] = useState(store.contacts[props.match.params.id].full_name);
	const [iemail, SetIemail] = useState(store.contacts[props.match.params.id].email);
	const [iphone, SetIphone] = useState(store.contacts[props.match.params.id].phone);
	const [iaddress, SetIaddress] = useState(store.contacts[props.match.params.id].address);

	const [objContact, setObjContact] = useState();

	useEffect(
		() => {
			setObjContact({
				id: store.contacts[props.match.params.id].id,
				fullname: ifullname,
				email: iemail,
				phone: iphone,
				address: iaddress
			});
		},
		[id, fullname, email, phone, address]
	);

	const SaveInfo = () => {
		actions.saveInfo(objContact);
	};

	return (
		<>
			<div className="mx-auto">
				<form>
					<h1>Edit Contact Info</h1>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							value={ifullname}
							className="form-control"
							placeholder="Enter Name"
							ref={fullname}
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
							ref={email}
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
							ref={phone}
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
							ref={address}
							onChange={event => SetIaddress(event.target.value)}
						/>
					</div>
					<button className="btn btn-large btn-primary" onClick={() => actions.SaveInfo()}>
						Save Edited Information
					</button>
					<Link to="/rigo">back to contacts</Link>
				</form>
			</div>
		</>
	);
};
EditInfo.propTypes = {
	match: PropTypes.object
};

export default EditInfo;
