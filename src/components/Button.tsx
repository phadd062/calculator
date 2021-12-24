const DigitButton = ({
	className,
	calcDispatch,
	label,
	type,
}: {
	className?: string | undefined;
	label: string;
	calcDispatch: any;
	type: string;
}) => {
	const distpatchFunc = () => {
		calcDispatch({
			type: type,
			payload: { value: label },
		});
	};

	return (
		<button
			onClick={distpatchFunc}
			className={`bg-sky-200 hover:bg-gray-50 text-slate-900 text-lg border-gray-50 py-6 px-5 sm:px-6 md:px-7 lg:px-8 ${className}`}
		>
			{label}
		</button>
	);
};

export default DigitButton;
