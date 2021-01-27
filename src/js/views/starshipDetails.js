import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { StarshipCard } from "../component/starshipCard";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarshipDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">{store.starship[params.theid].name}</h1>
				<p className="lead">
					<strong>Crew:</strong>
					{store.starship[params.theid].crew}
					<br />
					<strong>Cargo Capacity:</strong>
					{store.starship[params.theid].cargo_capacity}
					<br />
					<strong>MGLT:</strong>
					{store.starship[params.theid].MGLT}
					<br />
					<strong>Consumables:</strong>
					{store.starship[params.theid].consumables}
				</p>
			</div>
		</div>
	);
};

StarshipDetails.propTypes = {
	starship: PropTypes.object
};
