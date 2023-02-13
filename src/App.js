import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BookRoutes from "./pages/BookRoutes";
import "./styles.css";
import { useLocation } from "react-router-dom";

function App() {
	const location = useLocation();
	console.log(location);
	return (
		<>
			<nav>
				<ul>
					<li>
						<NavLink
							to="/"
							style={({ isActive }) => {
								return isActive ? { color: "orange" } : null;
							}}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink end to="/books">
							Books
						</NavLink>
					</li>
				</ul>
			</nav>
			{location.state}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/books/*" element={<BookRoutes />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
