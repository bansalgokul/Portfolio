import { useEffect, useState } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";

function App() {
	const [darkMode, setDarkMode] = useState(true);

	const toggleDarkMode = () => {
		setDarkMode((prev) => !prev);
		localStorage.setItem("darkMode", !darkMode + "");
	};

	useEffect(() => {
		if (localStorage["darkMode"]) {
			if (JSON.parse(localStorage.getItem("darkMode") || "") || "") {
				setDarkMode(true);
			}
		}
	}, []);

	return (
		<div className={`${darkMode ? "dark" : ""} w-full min-h-screen`}>
			<div className="scroll-smooth dark:bg-gray-950 bg-white text-gray-600 dark:text-gray-300 w-full min-h-screen">
				<Header
					darkMode={darkMode}
					setDarkMode={setDarkMode}
					toggleDarkMode={toggleDarkMode}
				/>
				<Hero />
				<About />
				<Skills />
				<Experience />
				<Work />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default App;
