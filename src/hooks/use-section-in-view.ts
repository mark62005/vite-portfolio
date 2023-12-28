import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ActiveSectionContext } from "@/context/ActiveSectionContext";
import type { SectionName } from "@/lib/types";

export function useSectionInView(
	sectionName: SectionName,
	threshold: number = 0.75
) {
	const { setActiveSection, timeOfLastClicked } =
		useContext(ActiveSectionContext);
	const { ref, inView } = useInView({
		threshold: threshold,
	});

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClicked > 1000) {
			setActiveSection(sectionName);
		}
	}, [sectionName, inView, setActiveSection, timeOfLastClicked]);

	return { ref };
}
