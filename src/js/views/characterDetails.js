import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { StarshipCard } from "../component/starshipCard";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">{store.characters[params.theid].name}</h1>
				<p className="lead">
					<strong>Height:</strong>
					{store.characters[params.theid].height}
					<br />
					<strong>Hair Color:</strong>
					{store.characters[params.theid].hair_color}
					<br />
					<strong>Eye Color:</strong>
					{store.characters[params.theid].eye_color}
					<br />
					<strong>Gender:</strong>
					{store.characters[params.theid].gender}
				</p>
			</div>
		</div>
	);
};

CharacterDetails.propTypes = {
	character: PropTypes.object
};
