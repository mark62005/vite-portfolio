import BackgroundDecoration from "./components/decorations/BackgroundDecoration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionDivider from "./components/ui/SectionDivider";

function App() {
	return (
		<div
			id="#home"
			className="relative h-[1000px] pt-28 sm:pt-36"
		>
			<Header />
			<main className="flex flex-col items-center px-4">
				<BackgroundDecoration />
				<Hero />
				<SectionDivider />
			</main>
			<Footer />
		</div>
	);
}

export default App;
