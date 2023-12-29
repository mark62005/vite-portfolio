import { useEffect, useState } from "react";
import About from "./components/About";
import BackToTopButton from "./components/BackToTopButton";
import Contact from "./components/Contact";
import BackgroundDecoration from "./components/decorations/BackgroundDecoration";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SectionDivider from "./components/ui/SectionDivider";
import ActiveSectionContextProvider from "./context/ActiveSectionContext";

function App() {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const backToTop = () => {
		document.documentElement.style.scrollBehavior = "smooth";
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<>
			<div
				id="home"
				className="relative pt-28 sm:pt-36"
			>
				<ActiveSectionContextProvider>
					<Header />
					<main className="static flex flex-col items-center px-4">
						<Hero />
						<SectionDivider />
						<About />
						<Projects />
						<Skills />
						<Experiences />
						<Contact />
					</main>
					<Footer />
				</ActiveSectionContextProvider>
				<BackToTopButton
					isVisible={isVisible}
					backToTop={backToTop}
				/>

				<BackgroundDecoration />
			</div>
		</>
	);
}

export default App;
