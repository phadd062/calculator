export const calculateNumbers = (state: {
	currentValue: string;
	previousValue: string;
	calculationType: string;
}) => {
	let RESULT = "";
	const PREVIOUSCALCVALUE = Number(state.previousValue);
	const CURRENTCALCVALUE = Number(state.currentValue);
	switch (state.calculationType) {
		case "/":
			RESULT = String(PREVIOUSCALCVALUE / CURRENTCALCVALUE);
			break;
		case "*":
			RESULT = String(PREVIOUSCALCVALUE * CURRENTCALCVALUE);
			break;
		case "+":
			RESULT = String(PREVIOUSCALCVALUE + CURRENTCALCVALUE);
			break;
		case "-":
			RESULT = String(PREVIOUSCALCVALUE - CURRENTCALCVALUE);
			break;
		default:
			break;
	}
	return {
		...state,
		currentValue: RESULT,
		previousValue: "",
		calculationType: "",
	};
};
