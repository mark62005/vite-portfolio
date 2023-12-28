import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState,
} from "react";
import { SectionName } from "@/lib/types";
import { navLinks } from "@/lib/data";

/* CONTEXT */
type ActiveSectionContextProps = {
	activeSection: SectionName;
	setActiveSection: Dispatch<SetStateAction<SectionName>>;
	timeOfLastClicked: number;
	setTimeOfLastClicked: Dispatch<SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextProps>({
	activeSection: navLinks[0].label,
	setActiveSection: () => {},
	timeOfLastClicked: 0,
	setTimeOfLastClicked: () => {},
});

/* PROVIDER */
type ActiveSectionContextProviderProps = {
	children: ReactNode;
};

const ActiveSectionContextProvider = ({
	children,
}: ActiveSectionContextProviderProps) => {
	const [activeSection, setActiveSection] = useState<SectionName>(
		navLinks[0].label
	);
	const [timeOfLastClicked, setTimeOfLastClicked] = useState<number>(0);

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClicked,
				setTimeOfLastClicked,
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	);
};
export default ActiveSectionContextProvider;
