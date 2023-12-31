import { projectsData } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Project from "./Project";
import { useSectionInView } from "@/hooks/use-section-in-view";

const Projects = () => {
	const { ref } = useSectionInView("Projects", 0.5);

	return (
		<section
			ref={ref}
			id="projects"
			className="scroll-mt-28 mb-28"
		>
			<SectionHeading>My projects</SectionHeading>
			<div className="">
				{projectsData.map((project, index) => (
					<Project
						key={index}
						project={project}
					/>
				))}
			</div>
		</section>
	);
};
export default Projects;
