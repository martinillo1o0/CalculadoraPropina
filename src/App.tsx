
import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder"
import MenuItemCard from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import "./App.css"

function App() {
	const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

	return (
		<main className="order-app">
			<header className="order-header">
				<div>
					<p className="order-kicker">COCINA ABIERTA · PEDIDOS</p>
					<h1>Menú del día</h1>
				</div>
				<p className="order-count">{menuItems.length} opciones disponibles</p>
			</header>

			<div className="order-layout">
				<section className="menu-panel" aria-labelledby="menu-heading">
					<div className="section-heading">
						<div>
							<p className="section-kicker">01 / CARTA</p>
							<h2 id="menu-heading">El menú</h2>
						</div>
					</div>
					<div className="menu-grid">
						{menuItems.map(item => (
							<MenuItemCard key={item.id} item={item} addItem={addItem} />
						))}
					</div>
				</section>

				<aside className="order-panel" aria-labelledby="order-heading">
					<div className="section-heading order-title-row">
						<div>
							<p className="section-kicker">02 / RESUMEN</p>
							<h2 id="order-heading">Tu orden</h2>
						</div>
						<span className="order-badge" aria-label={`${order.length} productos distintos`}>
							{order.length}
						</span>
					</div>

					{order.length === 0 ? (
						<p className="empty-order">La orden esta vacia</p>
					) : (
						<>
							<OrderContents order={order} removeItem={removeItem} />
							<TipPercentageForm tip={tip} setTip={setTip} />
							<OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
						</>
					)}
				</aside>
			</div>
		</main>
	);
    

}
export default App