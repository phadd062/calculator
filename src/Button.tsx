import { ACTION } from "./reducer";

const DigitButton = ({
	className,
	label,
	calcDispatch,
}: {
	className?: string | undefined;
	label: string;
	calcDispatch: any;
}) => {
	const DigitDispatch = () => {
		calcDispatch({
			type: ACTION.ADDDIGIT,
			payload: { digit: label },
		});
	};

	return (
		<button
			onClick={DigitDispatch}
			className={`bg-sky-200 hover:bg-gray-50 text-slate-900 text-lg border-gray-50 py-6 px-5 sm:px-6 md:px-7 lg:px-8 ${className}`}
		>
			{label}
		</button>
	);
};

export default DigitButton;
