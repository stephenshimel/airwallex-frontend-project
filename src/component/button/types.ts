export type TButtonSize = "small" | "regular" | "large";

export type TButtonProps = {
	title: string;
	callback?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
	isFullWidth?: boolean;
	buttonSize?: TButtonSize;
	type?: "button" | "submit" | "reset";
};

export type TStyledButtonProps = {
	isFullWidth?: boolean;
	buttonSize?: TButtonSize;
};
