import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const StarshipCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col">
			<div className="card-group">
				<div className="card" style={{ width: "18rem" }}>
					<img className="card-img-top" src="https://www.dummyimage.com/400x200" alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title text-left">{props.starship.name}</h5>
						<p className="card-text">Passengers: {props.starship.passengers}</p>
						<p className="card-text">Model: {props.starship.model}</p>
						<Link to={`/starshipdetails/${props.index}`}>
							<span href="#" className="btn btn-primary">
								Click for more
							</span>
						</Link>
						<a
							href="#"
							className="btn btn-outline-danger ml-5"
							onClick={() => actions.addFavorite(props.starship.name)}>
							Fav
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

StarshipCard.propTypes = {
	starship: PropTypes.object,
	index: PropTypes.number
};
