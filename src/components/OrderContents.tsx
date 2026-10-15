import type { OrderContentsProps } from "../types"

const currency = new Intl.NumberFormat("es-MX", {
	style: "currency",
	currency: "MXN"
});

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
	return (
		<ul className="order-list">
			{order.map(item => (
				<li className="order-line" key={item.id}>
					<div className="order-line-copy">
						<h3>{item.name}</h3>
						<p>
							{currency.format(item.price)} c/u · Cantidad: {item.quantity}
						</p>
					</div>
					<span className="order-line-total">
						{currency.format(item.price * item.quantity)}
					</span>
					<button
						className="remove-item-button"
						type="button"
						onClick={() => removeItem(item.id)}
						aria-label={`Quitar ${item.name} de la orden`}
					>
						X
					</button>
				</li>
			))}
		</ul>
	);
}
