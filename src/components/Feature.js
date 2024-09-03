// Import styles
import "../styles/Feature.css";

// Import Pictures
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
		<div className="feature-item">
			<img src={ArrayIcons[icon]} alt={icon} className="feature-icon" />
			<h3 className="feature-item-title">{title}</h3>
			<p>{text}</p>
		</div>
	);
}

export default Feature;
