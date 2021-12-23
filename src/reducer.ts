export const ACTION = {
	ADDDIGIT: "digit",
	TYPECALC: "type_calc",
	CLEAR: "clear",
	REMOVEDIGIT: "remove_digit",
	EQUAL: "equal",
};

export const INITIALREDUCER = {
	currentValue: "",
	previousValue: null,
	calculationType: null,
};

export const reducer = (
	state: { currentValue: string },
	action: { type: string; payload: { digit: string } }
) => {
	switch (action.type) {
		case ACTION.ADDDIGIT:
			return {
				...state,
				currentValue: `${state.currentValue}${action.payload.digit}`,
			};

		default:
			return state;
	}
};
