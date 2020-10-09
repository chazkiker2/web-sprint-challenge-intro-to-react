import React from "react";
// import axios from "axios";

const Character = (props) => {
	const { character } = props;
	const { created, episode, gender, id, image, location, name, origin, species, status, type, url } = character;

	return (
		<>
			<h1>{name}</h1>

			<img src={image} />
		</>
	);
};

export default Character;