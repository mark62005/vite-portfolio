import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/hooks/use-section-in-view";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SectionHeading from "./ui/SectionHeading";
import { Fragment } from "react";

import "react-vertical-timeline-component/style.min.css";

const Experiences = () => {
	const { ref } = useSectionInView("Experiences");

	return (
		<section
			ref={ref}
			id="experiences"
			className="scroll-mt-28 mb-28 sm:mb-40"
		>
			<SectionHeading>My Experiences</SectionHeading>
			<VerticalTimeline>
				{experiencesData.map((experience, index) => (
					<Fragment key={index}>
						<VerticalTimelineElement
							contentStyle={{
								background: "#f3f4f6",
								boxShadow: "none",
								border: "1px solid rgba(0, 0, 0, 0.05)",
								textAlign: "left",
								padding: "1.3rem 2rem",
							}}
							contentArrowStyle={{
								borderRight: "0.4rem solid #9ca3af",
							}}
							date={experience.date}
							icon={<experience.Icon />}
							iconStyle={{
								background: "white",
								fontSize: "1.5rem",
							}}
						>
							<h3 className="font-semibold capitalize">{experience.title}</h3>
							<p className="font-normal !mt-0">{experience.location}</p>
							<p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
								{experience.description}
							</p>
						</VerticalTimelineElement>
					</Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
};
export default Experiences;
