import React, { useState } from "react";
import styled from "styled-components";

import Details from "./Details";
import { Collapse } from "reactstrap";

// import axios from "axios";

const StyledCharacter = styled.div`
	display: flex;
	flex-flow: column nowrap;
	width: 400px;
	margin: 2rem;
	img {
		width: 100%;
		height: auto;
	}
	button {
		background-color: #4CAF50;
		border: none;
		color: white;
		padding: 2rem;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 2rem;
	}
`;

const Character = (props) => {
	const [showDetails, setShowDetails] = useState(false);
	const { character } = props;
	const { created, episode, gender, id, image, location, name, origin, species, status, type, url } = character;
	
	const toggle = () => { setShowDetails(!showDetails) };

	return (
		<StyledCharacter>
			<h1>{name}</h1>
			<img src={image} alt={name} />
			<button onClick={toggle}>Expand</button>
			<Collapse isOpen={showDetails}>
				<Details character={character} />
			</Collapse>
		</StyledCharacter>
	);
};

export default Character;