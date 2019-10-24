import PropTypes from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactObj: [
				{
					fullname: "",
					phone: "",
					email: "",
					address: ""
				}
			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			test: () => {
				const store = getStore();
				console.log("store", store.contactObj);
			},
			saveInfo: (objContact, props) => {
				// console.log(getStore());
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(objContact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(newContacts => {
						alert("New Contact Added");
						props.history.push("/rigo");
					})
					.catch(error => console.error("Error:", error));
			},
			delete: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				})
					.then(res => res.json())
					.then(response => console.log(response))
					.catch(error => console.error("Error:", error));
			},
			editInfo: (param1, param2, history) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + param2, {
					method: "PUT",
					body: JSON.stringify(param1),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => {
						alert("Success:", JSON.stringify(response));
						history.push("/rigo");
					})
					.catch(error => console.error("Error:", error));
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

// getState.propTypes = {
// 	history: PropTypes.objects
// };

export default getState;
