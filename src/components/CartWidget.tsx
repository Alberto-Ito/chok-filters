import { useEffect, useMemo, useState } from "react";

type Product = {
  id: string;
  code: string;
  name: string;
  category: string;
  categoryLabel: string;
  description: string;
};

type CartItem = Product & {
  quantity: number;
};

type Props = {
  products: Product[];
  whatsappNumber: string;
};

const STORAGE_KEY = "chok-cart";

function buildWhatsappUrl(phone: string, items: CartItem[]) {
  const lines = [
    "Hola, quiero hacer el siguiente pedido:",
    "",
    ...items.map((item) => `- ${item.code} | ${item.name} x${item.quantity}`),
    "",
    `Total de unidades: ${items.reduce((sum, item) => sum + item.quantity, 0)}`,
    "",
    "Quedo atento a disponibilidad y confirmacion.",
  ];

  return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export default function CartWidget({ products, whatsappNumber }: Props) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored) as CartItem[];
      setItems(parsed);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const onAdd = (event: Event) => {
      const customEvent = event as CustomEvent<{ productId: string }>;
      const product = products.find((entry) => entry.id === customEvent.detail.productId);
      if (!product) return;

      setItems((current) => {
        const existing = current.find((item) => item.id === product.id);
        if (existing) {
          return current.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
          );
        }

        return [...current, { ...product, quantity: 1 }];
      });
    };

    window.addEventListener("cart:add", onAdd);
    return () => window.removeEventListener("cart:add", onAdd);
  }, [products]);

  const totalUnits = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const whatsappUrl = useMemo(
    () => buildWhatsappUrl(whatsappNumber, items),
    [items, whatsappNumber],
  );

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((current) => current.filter((item) => item.id !== id));
      return;
    }

    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  const clearCart = () => setItems([]);

  return (
    <div className="cart-widget">
      <div>
        <h2>Carrito</h2>
      </div>

      <div className="cart-widget__summary">
        <strong>{items.length} productos</strong>
        <span>{totalUnits} unidades en total</span>
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <p>Todavia no agregaste filtros. Usa el boton de cada producto para armar el pedido.</p>
        </div>
      ) : (
        <div className="cart-lines">
          {items.map((item) => (
            <article key={item.id} className="cart-line">
              <div>
                <strong>{item.code}</strong>
                <p>{item.name}</p>
              </div>

              <div className="cart-line__controls">
                <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="cart-widget__actions">
        <a
          className={`button button--primary ${items.length === 0 ? "is-disabled" : ""}`}
          href={items.length === 0 ? undefined : whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-disabled={items.length === 0}
          onClick={(event) => {
            if (items.length === 0) event.preventDefault();
          }}
        >
          Enviar pedido por WhatsApp
        </a>
        <button
          type="button"
          className="button button--ghost button--neutral"
          onClick={clearCart}
          disabled={items.length === 0}
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}
