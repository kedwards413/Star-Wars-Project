import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-black mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png" />
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown show">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="true">
						Favorites
						<span className="badge badge-secondary">{store.favorites.length}</span>
					</button>
					<div
						className={store.favorites.length > 0 ? "dropdown-menu show" : "d-none"}
						aria-labelledby="dropdownMenuButton">
						{store.favorites.map((item, index) => {
							return (
								<li className="dropdown-item" href="#" key={index}>
									{item}
								</li>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};
