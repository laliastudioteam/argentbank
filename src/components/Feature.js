import "../styles/Feature.css";

import iconChat from "../assets/icons/icon-chat.png";
import iconMoney from "../assets/icons/icon-money.png";
import iconSecurity from "../assets/icons/icon-security.png";

const ArrayIcons = {
	iconChat,
	iconMoney,
	iconSecurity,
};

function Feature(d) {
	const {icon, title, text} = d.data;

	return (
		<div class="feature-item">
			<img src={ArrayIcons[icon]} alt={icon} class="feature-icon" />
			<h3 class="feature-item-title">{title}</h3>
			<p>{text}</p>
		</div>
	);
}

export default Feature;
