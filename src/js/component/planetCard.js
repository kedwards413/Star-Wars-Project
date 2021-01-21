import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const PlanetCard = props => {
	return (
		<div className="card m-3" style={{ width: "18rem;" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.planet.name}</h5>
				<p className="card-text">
					Terrain: {props.planet.terrain} <br />
					Population: {props.planet.population}
				</p>
				<div className="d-flex justify-content-between">
					<Link to={{ pathname: `/planetDetails/${props.planet.name}`, state: props.planet }}>
						<span href="#" className="btn btn-primary">
							Click for more
						</span>
					</Link>
					<a href="#" className="btn btn-outline-danger">
						Fav
					</a>
				</div>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	planet: PropTypes.object
};
