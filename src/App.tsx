import About from "./components/About";
import Contact from "./components/Contact";
import BackgroundDecoration from "./components/decorations/BackgroundDecoration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SectionDivider from "./components/ui/SectionDivider";
import ActiveSectionContextProvider from "./context/ActiveSectionContext";

function App() {
	return (
		<div
			id="home"
			className="relative h-[1000px] pt-28 sm:pt-36"
		>
			<ActiveSectionContextProvider>
				<Header />
				<main className="flex flex-col items-center px-4">
					<BackgroundDecoration />
					<Hero />
					<SectionDivider />
					<About />
					<Projects />
					<Skills />
					<Contact />
				</main>
				<Footer />
			</ActiveSectionContextProvider>
		</div>
	);
}

export default App;
