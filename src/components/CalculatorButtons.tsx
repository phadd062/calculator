import Button from "./Button";
import { ACTION } from "./reducer";

const CalculatorButtons = ({
	calcDispatch,
}: {
	calcDispatch: (action: { type: string; payload: { value: string } }) => void;
}) => {
	return (
		<>
			<Button
				className="border-b-2 border-r-2 col-span-2"
				calcDispatch={calcDispatch}
				label="AC"
				type={ACTION.RESET}
			/>
			<Button
				className="border-b-2 border-r-2"
				calcDispatch={calcDispatch}
				label="DEL"
				type={ACTION.REMOVEDIGIT}
			/>
			<Button
				className="border-b-2"
				calcDispatch={calcDispatch}
				label="/"
				type={ACTION.TYPECALC}
			/>
			<Button
				className="border-b-2 border-r-2"
				calcDispatch={calcDispatch}
				label="1"
				type={ACTION.ADDDIGIT}
			/>
			<Button
				className="border-b-2 border-r-2"
				calcDispatch={calcDispatch}
				label="2"
				type={ACTION.ADDDIGIT}
			/>
			<Button
				className="border-b-2 border-r-2"
				calcDispatch={calcDispatch}
				label="3"
				type={ACTION.ADDDIGIT}
			/>
			<Button
				className="border-b-2"
				calcDispatch={calcDispatch}
				label="*"
				type={ACTION.TYPECALC}
			/>
			<Button
				className="border-b-2 border-r-2"
				calcDispatch={calcDispatch}
				label="4"
				type={ACTION.ADDDIGIT}
			/>
			<Button
				className="border-b-2 border-r-2"
				calcDispatch={calcDispatch}
				label="5"
				type={ACTION.ADDDIGIT}
			/>
			<Button
				className="border-b-2 border-r-2"
				calcDispatch={calcDispatch}
				label="6"
				type={ACTION.ADDDIGIT}
			/>
			<Button
				calcDispatch={calcDispatch}
				label="+"
				className="border-b-2"
				type={ACTION.TYPECALC}
			/>
			<Button
				className="border-b-2 border-r-2"
				calcDispatch={calcDispatch}
				label="7"
				type={ACTION.ADDDIGIT}
			/>
			<Button
				className="border-b-2 border-r-2"
				calcDispatch={calcDispatch}
				label="8"
				type={ACTION.ADDDIGIT}
			/>
			<Button
				className="border-b-2 border-r-2"
				calcDispatch={calcDispatch}
				label="9"
				type={ACTION.ADDDIGIT}
			/>
			<Button
				className="border-b-2"
				calcDispatch={calcDispatch}
				label="-"
				type={ACTION.TYPECALC}
			/>
			<Button
				className="border-r-2 rounded-bl-lg"
				calcDispatch={calcDispatch}
				label="."
				type={ACTION.ADDDIGIT}
			/>
			<Button
				className="border-r-2"
				calcDispatch={calcDispatch}
				label="0"
				type={ACTION.ADDDIGIT}
			/>
			<Button
				className="col-span-2 rounded-br-lg"
				calcDispatch={calcDispatch}
				label="="
				type={ACTION.EQUAL}
			/>
		</>
	);
};

export default CalculatorButtons;
