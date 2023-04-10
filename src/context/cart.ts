import { createContext, useContext, useState } from "react";

type Product = {
    id: string;
    name: string;
    price: number;
}

type CartContextType = {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => { },
    removeFromCart: () => { },
});

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<Product[]>([]);

    function addToCart(product: Product) {
        setCart((prevCart) => [...prevCart, product]);
    }

    function removeFromCart(productId: string) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    }

    const value = {
        cart,
        addToCart,
        removeFromCart,
    };

    return (<CartContext.Provider value= { value } > { children } < /CartContext.Provider>
})
