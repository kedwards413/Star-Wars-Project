import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const PlanetCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="col">
			<div className="card-group">
				<div className="card" style={{ width: "18rem" }}>
					<img className="card-img-top" src="https://www.dummyimage.com/400x200" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title text-left">{props.planet.name}</h5>
						<p className="card-text">Terrain: {props.planet.terrain}</p>
						<p className="card-text">Climate: {props.planet.climate}</p>
						<Link to={`/planetdetails/${props.index}`}>
							<span href="#" className="btn btn-primary">
								Click for more
							</span>
						</Link>
						<a
							href="#"
							className="btn btn-outline-danger ml-5"
							onClick={() => actions.addFavorite(props.planet.name)}>
							Fav
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

PlanetCard.propTypes = {
	planet: PropTypes.object,
	index: PropTypes.number
};
