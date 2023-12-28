import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BoldTextProps = {
	className?: string;
	children: ReactNode;
};
const BoldText = ({ className, children }: BoldTextProps) => {
	return <span className={cn("font-bold", className)}>{children}</span>;
};
export default BoldText;
