import BackgroundDecoration from "./components/decorations/BackgroundDecoration";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
	return (
		<div
			id="#home"
			className="relative h-[1000px] pt-28 sm:pt-36"
		>
			<Header />
			<main className="">
				<BackgroundDecoration />
				<Hero />
			</main>
		</div>
	);
}

export default App;
