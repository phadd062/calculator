import { calculateNumbers } from "./helper";

export const ACTION = {
	ADDDIGIT: "digit",
	TYPECALC: "type_calc",
	RESET: "reset",
	REMOVEDIGIT: "remove_digit",
	EQUAL: "equal",
};

export const INITIALREDUCER = {
	currentValue: "",
	previousValue: "",
	calculationType: "",
};

export const reducer = (
	state: {
		currentValue: string;
		previousValue: string;
		calculationType: string;
	},
	action: { type: string; payload: { value: string } }
) => {
	switch (action.type) {
		case ACTION.RESET:
			return INITIALREDUCER;
		case ACTION.REMOVEDIGIT:
			if (state.currentValue === "") return state;
			return {
				...state,
				currentValue: state.currentValue.substring(
					0,
					state.currentValue.length - 1
				),
			};
		case ACTION.TYPECALC:
			let STATECURRENTVALUE = state.currentValue;
			let STATEPREVIOUSVALUE = state.previousValue;
			if (STATECURRENTVALUE !== "" && STATEPREVIOUSVALUE !== "") {
				STATECURRENTVALUE = calculateNumbers(state).currentValue;
			} else if (STATECURRENTVALUE === "") {
				return {
					...state,
					currentValue: STATECURRENTVALUE,
					previousValue: STATEPREVIOUSVALUE,
					calculationType: action.payload.value,
				};
			}
			return {
				...state,
				currentValue: "",
				previousValue: STATECURRENTVALUE,
				calculationType: action.payload.value,
			};
		case ACTION.ADDDIGIT:
			let VALUE = action.payload.value;
			let CURRENTVALUE = state.currentValue;
			if (
				(VALUE === "0" && CURRENTVALUE === "0") ||
				(VALUE === "." && CURRENTVALUE.includes("."))
			) {
				return state;
			} else if (
				CURRENTVALUE.startsWith("0") &&
				VALUE !== "." &&
				!CURRENTVALUE.includes(".")
			) {
				CURRENTVALUE = CURRENTVALUE.substring(1);
			} else if (VALUE === "." && CURRENTVALUE === "") {
				VALUE = "0.";
			}
			return {
				...state,
				currentValue: `${CURRENTVALUE}${VALUE}`,
			};
		case ACTION.EQUAL:
			return calculateNumbers(state);

		default:
			return state;
	}
};
