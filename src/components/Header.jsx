import React from "react";
import Navbar from "./Navbar";
import "../styles/Header.css";
const Header = () => {
	return (
		<>
			<div className="header">
				<Navbar />
				<div className="video-container">
					<video autoPlay loop muted>
						<source src={"/src/assets/gym-video.mp4"} type="video/mp4" />
					</video>
				</div>
				<div className="banner">
					<div className="banner-text">
						<h2>
							We will <span className="red">build</span> the{" "}
							<span className="red">body</span> you{" "}
							<span className="red">deserve</span>
						</h2>
						<p>
							Experience unparalleled coaching and unique equipment will not be
							found anywhere else
						</p>
						<button>Become a Member</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
