import React from "react";
import {useEffect} from "react";

import Hero from "../../components/Hero";
import Feature from "../../components/Feature";

function Home() {
	return (
		<main>
			<Hero
				data={{
					title: "",
					items: ["No fees", "No minimum deposit", "High interest rates"],
					text: "Open a savings account with Argent Bank today!",
				}}
			/>
			<section class="features">
				<h2 class="sr-only">Features</h2>
				<Feature
					data={{
						icon: "iconChat",
						title: "You are our #1 priority",
						text:
							"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
					}}
				/>
				<Feature
					data={{
						icon: "iconMoney",
						title: "More savings means higher rates",
						text: "The more you save with us, the higher your interest rate will be!",
					}}
				/>
				<Feature
					data={{
						icon: "iconSecurity",
						title: "Security you can trust",
						text:
							"We use top of the line encryption to make sure your data and money is always safe.",
					}}
				/>
			</section>
		</main>
	);
}
export default Home;
