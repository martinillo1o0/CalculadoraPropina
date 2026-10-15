import type { MenuItemProps } from "../types"

// Formato bonito pal proyectoso
const currency = new Intl.NumberFormat("es-MX", {
	style: "currency",
	currency: "MXN"
});


export default function MenuItem({ item, addItem }: MenuItemProps) {
	return (
		<article className="menu-item">
			<div className="menu-item-copy">
				<h3>{item.name}</h3>
				<p>{currency.format(item.price)}</p>
			</div>
			<button
				className="add-item-button"
				type="button"
				onClick={() => addItem(item)}
				aria-label={`Agregar ${item.name} a la orden`}
			>
				<span>Agregar</span>
				<span className="add-item-icon" aria-hidden="true">+</span>
			</button>
		</article>
	);
}
