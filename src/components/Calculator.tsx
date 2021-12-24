import { useReducer } from "react";
import { INITIALREDUCER, reducer } from "./reducer";
import CalculatorButtons from "./CalculatorButtons";

const Calculator = () => {
	const [calcState, calcDispatch] = useReducer(reducer, INITIALREDUCER);

	return (
		<div className="grid grid-cols-4 shadow-2xl mb-10">
			<div className="flex flex-col justify-center items-end col-span-4 bg-gradient-to-r from-gray-800 to-slate-700 h-24 px-3 rounded-t-lg">
				<span className="text-gray-50 text-opacity-75 text-sm">
					{calcState.previousValue} {calcState.calculationType}
				</span>
				<span className="text-gray-50 text-2xl transition-all">
					{calcState.currentValue}
				</span>
			</div>
			<CalculatorButtons calcDispatch={calcDispatch} />
		</div>
	);
};

export default Calculator;
