import React from "react";
// Import styles
import "../styles/Hero.css";
// Import Pictures
import Banktree from "../assets/images/bank-tree.jpeg";

function Hero(d) {
	const {title, items, text} = d.data;
	console.log(items);
	return (
		<div className="hero">
			<section className="hero-content">
				<h2 className="sr-only">{title}</h2>
				{items.map((item, index) => (
					<p className="subtitle" key={index}>
						{item}
					</p>
				))}
				<p className="text">{text}</p>
			</section>
		</div>
	);
}

export default Hero;
