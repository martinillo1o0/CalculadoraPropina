export type MenuItem = {
    id: number;
    name: string;
    price: number;

}
export type OrderItem = MenuItem & {
    quantity: number;
}

export type MenuItemProps = {
    item: MenuItem;
    addItem: (item: MenuItem) => void;
};

export type OrderContentsProps = {
    order: OrderItem[];
    removeItem: (id: MenuItem["id"]) => void;
};

export type OrderTotalsProps = {
    order: OrderItem[];
    tip: number;
    placeOrder: () => void;
};

export type TipPercentageFormProps = {
    tip: number;
    setTip: (tip: number) => void;
};

