import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { CharacterCard } from "../component/characterCard";
import { PlanetCard } from "../component/planetCard";
import { StarshipCard } from "../component/starshipCard";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">{props.planet.name}</h1>
				<p className="lead">
					This is a modified jumbotron that occupies the entire horizontal space of its parent.
				</p>
			</div>
		</div>
	);
};

PlanetDetails.propTypes = {
	planet: PropTypes.object
};
