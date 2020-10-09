import React from "react";
import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";

const StyledDetails = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	#dropdown-episodes {
		display: inline-block;
		width: 100%;
		height: 40px;
		padding: 0 auto;
		font-size: 1.4rem;
	}
`;

const Details = (props) => {
	const { character } = props;
	const { episode, gender, location, name, origin, species, status, url } = character;

	return (
		<StyledDetails>
			<h4>Name: {name}</h4>
			<p>Status: {status}</p>
			<p>Species: {species}</p>
			<p>Gender: {gender}</p>
			<p>Origin: {origin.name}</p>
			<p>Location: {location.name}</p>
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-episodes">Episodes</Dropdown.Toggle>
				<Dropdown.Menu>
					{
						episode.map(epi => { return <Dropdown.Item key={epi}>{epi}</Dropdown.Item> })
					}
				</Dropdown.Menu>
			</Dropdown>
			<a href={url}>More Info</a>
		</StyledDetails>
	);
};


export default Details;