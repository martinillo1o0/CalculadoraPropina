import type { OrderTotalsProps } from "../types"
//Formatoso
const currency = new Intl.NumberFormat("es-MX", {
	style: "currency",
	currency: "MXN"
});

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
	const subtotal = order.reduce((sum, item) => sum + item.price * item.quantity, 0);
	const tipAmount = subtotal * tip / 100;
	const total = subtotal + tipAmount;

	return (
		<div className="order-totals">
			<dl className="totals-breakdown">
				<div>
					<dt>Subtotal a pagar</dt>
					<dd>{currency.format(subtotal)}</dd>
				</div>
				<div>
					<dt>Propina ({tip}%)</dt>
					<dd>{currency.format(tipAmount)}</dd>
				</div>
			</dl>
			<div className="grand-total">
				<span>Total a pagar</span>
				<strong>{currency.format(total)}</strong>
			</div>
			<button className="place-order-button" type="button" onClick={placeOrder}>
				GUARDAR ORDEN
			</button>
		</div>
	);
}
