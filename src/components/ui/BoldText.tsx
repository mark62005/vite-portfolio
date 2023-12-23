import { cn } from "@/lib/utils";

type BoldTextProps = {
	text: string;
	className?: string;
};
const BoldText = ({ text, className }: BoldTextProps) => {
	return <span className={cn("font-bold", className)}>{text}</span>;
};
export default BoldText;
