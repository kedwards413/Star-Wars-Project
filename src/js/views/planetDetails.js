import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { StarshipCard } from "../component/starshipCard";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">{store.planets[params.theid].name}</h1>
				<p className="lead">
					<strong>Rotation Period:</strong>
					{store.planets[params.theid].rotation_period}
					<br />
					<strong>Diameter:</strong>
					{store.planets[params.theid].diameter}
					<br />
					<strong>Gravity:</strong>
					{store.planets[params.theid].gravity}
					<br />
					<strong>Surface Water:</strong>
					{store.planets[params.theid].surface_water}
				</p>
			</div>
		</div>
	);
};

PlanetDetails.propTypes = {
	name: PropTypes.object,
	climate: PropTypes.object
};
