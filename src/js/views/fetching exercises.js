import React, { useState, useEffect } from "react";

function RigoDiaper() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/contact/agenda/harry_potter")
			.then(resp => resp.json())
			.then(data => setData(data));
	});

	return (
		<>
			<h1> BABY </h1>
			<ul>
				{!data
					? "loading"
					: data.map((item, index) => {
							return (
								<li key={index} className="m-2">
									<div className="card p-2">
										<div className="row">
											<div className="col-2">
												{/* <img src="" alt="..." /> */}
												here image
											</div>
											<div className="col">
												{item.full_name}
												<br />
												{item.email}
												<br />
												{item.phone}
												<br />
												{item.address}
												<br />
												{item.created_at}
											</div>
											<div className="col-2">
												<i className="fas fa-user-edit" />
												<i className="fas fa-trash-alt ml-2" />
											</div>
										</div>
									</div>
								</li>
							);
					  })}
			</ul>
		</>
	);
}

export default RigoDiaper;