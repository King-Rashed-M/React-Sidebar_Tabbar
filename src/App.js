import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Sidebar from "./layout/Sidebar";
import TabBar from "./layout/TabBar";

function App() {
	return (
		<Router>
			<Sidebar />
			<TabBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/team" element={<Team />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	);
}

export default App;
