export type TButtonSize = "small" | "regular" | "large";

export type TButtonProps = {
	label: string;
	callback?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
	isFullWidth?: boolean;
	buttonSize?: TButtonSize;
	type?: "button" | "submit" | "reset";
	disabled?: boolean;
};

export type TStyledButtonProps = {
	isFullWidth?: boolean;
	buttonSize?: TButtonSize;
	disabled?: boolean;
};
