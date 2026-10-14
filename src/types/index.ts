export type MenuItem = {
    id: number;
    name: string;
    price: number;

}


type CartItem = MenuItem & {
    quantity: number;
}

