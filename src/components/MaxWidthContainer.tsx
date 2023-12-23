import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MaxWidthContainerProps = {
	className?: string;
	children: ReactNode;
};

const MaxWidthContainer = ({ className, children }: MaxWidthContainerProps) => {
	return (
		<section
			className={cn(
				"w-full max-w-[55rem] mx-auto mb-28 px-16 text-center sm:mb-0",
				className
			)}
		>
			{children}
		</section>
	);
};

export default MaxWidthContainer;
