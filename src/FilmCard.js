import React, { useState, useEffect } from "react";
function FilmCard({ filmUrls }) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();

	async function fetchAll() {
		await Promise.all(
			filmUrls.map((url) => {
				setLoading(true);
				fetch(url)
					.then((r) => r.json())
					.then((obj) => {
						setData((data) => [...data, obj]);
					})
					.catch((err) => {
						setError(err);
					})
					.finally(() => {
						setLoading(false);
					});
			})
		);
	}

	useEffect(() => {
		fetchAll();
	}, [filmUrls]);

	if (loading) {
		return <p>Data is loading...</p>;
	}

	if (error || !Array.isArray(data)) {
		return <p>There was an error loading your data!</p>;
	}

	let displayFilmCards = data ? (
		data.map((film) => {
			return (
				<>
					<div>{film.title}</div>
					<img src={film.image} />
				</>
			);
		})
	) : (
		<div>empty</div>
	);

	return <>{displayFilmCards}</>;
}
export default FilmCard;
