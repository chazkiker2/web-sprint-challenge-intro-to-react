import React from "react";
import styled from "styled-components";

const StyledDetails = styled.div`
	display: flex;
	flex-flow: column nowrap;
`;

const Details = (props) => {
	const {character} = props;
	const { created, episode, gender, id, image, location, name, origin, species, status, type, url } = character;

	return (
		<div>
			<h4>Name: {name}</h4>
			<p>Status: {status}</p>
			<p>Species: {species}</p>
			<p>Origin: {origin.name}</p>
			<p>Location: {location.name}</p>
			<a href={url}>More Info</a>
		</div>
	);
};


export default Details;