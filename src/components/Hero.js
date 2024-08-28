import React from "react";

import "../styles/Hero.css";

import Banktree from "../assets/images/bank-tree.jpeg";

function Hero(d) {
	const {title, items, text} = d.data;
	console.log(items);
	return (
		<div class="hero">
			<section class="hero-content">
				<h2 class="sr-only">{title}</h2>
				{items.map((item, index) => (
					<p class="subtitle" key={index}>
						{item}
					</p>
				))}
				<p class="text">{text}</p>
			</section>
		</div>
	);
}

export default Hero;
