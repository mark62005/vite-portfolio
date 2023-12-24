import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";

type ProjectProps = {
	project: (typeof projectsData)[number];
};
const Project = ({ project }: ProjectProps) => {
	const { title, description, tags, imageUrl } = project;

	return (
		<motion.div className="group mb-3 last:mb-0 sm:mb-8">
			<div
				className="
          relative bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden transition
          sm:pr-8 sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 
          dark:text-white dark:bg-white/10 dark:hover:bg-white/20
        "
			>
				{/* CONTENT */}
				<div
					className="
            flex flex-col h-full pt-4 pb-7 px-5 
            sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:group-even:ml-[18rem]
          "
				>
					<h3 className="text-2xl font-semibold">{title}</h3>
					<p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
						{description}
					</p>
					<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
						{tags.map((tag, index) => (
							<li
								className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
								key={index}
							>
								{tag}
							</li>
						))}
					</ul>
				</div>

				{/* IMAGE */}
				<img
					src={imageUrl}
					alt={`Feature image of ${title}`}
					className="
            hidden absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition 
            sm:block
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial] group-even:-left-40
          "
				/>
			</div>
		</motion.div>
	);
};
export default Project;
