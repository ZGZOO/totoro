import React, { useState, useEffect } from "react";
import "./People.css";

function People() {
	const [listOfPeople, setListOfPeople] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	const getAllPeople = async () => {
		try {
			setLoading(true);
			let res = await fetch("https://ghibliapi.herokuapp.com/people");
			let rawPeople = await res.json(); //[{},{},{}]
			setListOfPeople(rawPeople);
			setLoading(false);
		} catch (err) {
			setError(err);
		}
	};

	useEffect(() => {
		getAllPeople();
	}, []);

	while (loading) {
		return (
			<>
				<div className="loadingDiv">
					<div className="loader"></div>
				</div>
			</>
		);
	}

	if (error || !Array.isArray(listOfPeople)) {
		return <p>There was an error loading the data!</p>;
	}

	let displayPeople = listOfPeople ? (
		listOfPeople
			.sort((a, b) => a.name.localeCompare(b.name))
			.map((people) => {
				return (
					<div className={`PeopleCard`} key={`PeopleCard-${people.name}`}>
						<div className="peopleCardWrapper">
							<div>
								Name: <span>{people.name}</span>
							</div>
							<div>
								Gender:{" "}
								<span>{people.gender == "NA" ? "N/A" : people.gender}</span>
							</div>
							<div>
								Age:{" "}
								<span>
									{!people.age || people.age == "NA" ? "N/A" : people.age}
								</span>
							</div>
						</div>
					</div>
				);
			})
	) : (
		<div>no people</div>
	);

	return (
		<>
			<div className="People">{displayPeople}</div>
		</>
	);
}
export default People;
