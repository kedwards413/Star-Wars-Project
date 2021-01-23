import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const StarshipCard = props => {
	return (
		<div className="card m-3" style={{ width: "18rem;" }}>
			<img src="..." className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.starship.name}</h5>
				<p className="card-text">
					Model: {props.starship.model}
					Passengers: {props.starship.passengers} <br />
				</p>
				<div className="d-flex justify-content-between">
					<Link to={{ pathname: `/starshipDetails/${props.starship.name}`, state: props.starship }}>
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

StarshipCard.propTypes = {
	starship: PropTypes.object
};
