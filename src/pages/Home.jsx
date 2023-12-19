import React from 'react';

const Home = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location = "/login";
	};

	return (
		<div className="text-black">
			<nav>
				<h1>Home Page</h1>
				<button onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Home;