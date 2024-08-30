import React from "react";
import {useEffect} from "react";

import {useParams, useNavigate} from "react-router-dom";

import Account from "../../components/Account";
import Header from "../../components/Header";

function User() {
	return (
		<main className="main bg-dark">
			<Header />
			<h2 className="sr-only">Accounts</h2>
			<Account
				data={{
					title: "Argent Bank Checking (x8349)",
					amount: "$2,082.79",
					description: "Available Balance",
				}}
			/>
			<Account
				data={{
					title: "Argent Bank Savings (x6712)",
					amount: "$10,928.42",
					description: "Available Balance",
				}}
			/>
			<Account
				data={{
					title: "Argent Bank Credit Card (x8349)",
					amount: "$184.30",
					description: "Available Balance",
				}}
			/>
		</main>
	);
}
export default User;
