import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home/Home.js'
import Login from './pages/Login/Login.js'
import Signup from './pages/Signup/Signup.js'
import Navbar from './components/Navbar.js'

import useAuthContext from "./hooks/useAuthContext.js";

export default function App() {
	const { user, isAuthReady } = useAuthContext()
	return (
		<div className="App">
			{isAuthReady && (
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={
							!user ? (<Navigate to="/login" />) : (<Home />)
						} />
						<Route path="/login" element={
							!user ? (<Login />) : (<Navigate to="/" replace />)
						} />
						<Route path="/signup" element={
							!user ? (<Signup />) : (<Navigate to="/" replace />)
						} />
					</Routes>
				</BrowserRouter>
			)}
		</div>
	)
}
