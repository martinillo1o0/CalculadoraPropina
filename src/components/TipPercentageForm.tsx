import type { TipPercentageFormProps } from "../types"

const tipOptions = [0, 10, 20, 50];

export default function TipPercentageForm({ tip, setTip }: TipPercentageFormProps) {
	return (
		<fieldset className="tip-form">
			<legend>Propina</legend>
			<div className="tip-options">
				{tipOptions.map(option => (
					<label
						className="tip-option"
						data-selected={tip === option}
						key={option}
					>
						<input
							type="radio"
							name="tip-percentage"
							value={option}
							checked={tip === option}
							onChange={() => setTip(option)}
						/>
						<span>{option}%</span>
					</label>
				))}
			</div>
		</fieldset>
	);
}
