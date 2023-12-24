import { projectsData } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Project from "./Project";

const Projects = () => {
	return (
		<section
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
