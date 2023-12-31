import { useContext } from "react";
import { SectionName } from "@/lib/types";
import { ActiveSectionContext } from "@/context/ActiveSectionContext";
import Navbar from "./Navbar";

const Header = () => {
	const { activeSection, setActiveSection, setTimeOfLastClicked } =
		useContext(ActiveSectionContext);

	const handleOnClicked = (sectionName: SectionName) => {
		setActiveSection(sectionName);
		setTimeOfLastClicked(Date.now());
	};

	return (
		<header className="bg-white sticky z-50 top-0 inset-x-0 h-16 bg-opacity-80 mb-10">
			<Navbar
				activeSection={activeSection}
				handleOnClicked={handleOnClicked}
			/>
		</header>
	);
};
export default Header;
