import { useContext } from "react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
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
		<header className="relative z-10">
			<Navbar
				activeSection={activeSection}
				handleOnClicked={handleOnClicked}
			/>
		</header>
	);
};
export default Header;
