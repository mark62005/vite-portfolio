import Header from "./components/Header";
import BackgroundDecoration from "./components/decorations/BackgroundDecoration";

function App() {
	return (
		<div className="relative h-[1000px]">
			<Header />
			<main className="">
				<BackgroundDecoration />
				Portfolio
			</main>
		</div>
	);
}

export default App;
