import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.js'
import Login from './pages/Login/Login.js'
import Signup from './pages/Signup/Signup.js'
import Navbar from './components/Navbar.js'

export default function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Login />}/>
					<Route path="/signup" element={<Signup />}/>
					<Route path="/home" element={<Home />}/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

