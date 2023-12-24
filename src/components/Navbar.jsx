import React from "react";
import "../styles/Navbar.css";
const Navbar = () => {
	return (
		<div className="navbar">
			<nav className="container">
				<div className="logo">
					<p>
						Loyal<span className="red">Fitness</span>
					</p>
				</div>
				<ul className="nav">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Class</a>
					</li>
					<li>
						<a href="#">Testimonial</a>
					</li>
					<li>
						<a href="#">Trainers</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
					<li>
						<a href="#" className="free-btn">
							Get Free Class
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
