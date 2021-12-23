const DigitButton = ({
	className,
	onClick,
	digit,
}: {
	className?: string | undefined;
	onClick: any;
	digit: string;
}) => {
	return (
		<button
			onClick={onClick}
			className={`bg-sky-200 hover:bg-gray-50 text-slate-900 text-lg border-gray-50 py-6 px-5 sm:px-6 md:px-7 lg:px-8 ${className}`}
		>
			{digit}
		</button>
	);
};

export default DigitButton;
