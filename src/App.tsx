// import Detail from "./Components/Detail";
// import { useTheme } from "./Context/themeContext";

// function App() {
//   const themeContext = useTheme();

//   return (
//     <>
//       <Detail />
//       <button onClick={themeContext?.toggleTheme}>Toggle Theme</button>
//     </>
//   );
// }

// export default App;

// Using redux toolkit

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store/store";
// import { ProductState } from "./store/slice";

interface Product {
  id: string | number;
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
}

function App() {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: RootState) => state.product.data as Product[],
  );

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log("Running from useEffect", data.products);
    dispatch({ type: "product/setProductData", payload: data.products });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDeleteProduct = (id: string | number | null | undefined) => {
    if (id == null || id === "") return;

    dispatch({ type: "product/deleteProductData", payload: { id } });
  };

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>Products</h1>
      <section style={{ display: "grid", gap: 16 }}>
        {products?.map((product) => (
          <article
            key={product.id}
            style={{
              display: "flex",
              gap: 20,
              padding: 16,
              border: "1px solid #ddd",
              borderRadius: 8,
              boxShadow: "0 2px 6px #0001",
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: 180, height: 180, objectFit: "cover" }}
            />
            <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Price:</strong> ${product.price.toFixed(2)}
              </p>
              <p>
                <strong>Rating:</strong> {product.rating} / 5
              </p>
              <p>
                <strong>Stock:</strong> {product.stock}
              </p>
              <button
                type="button"
                style={{
                  padding: "6px 10px",
                  border: "1px solid #ddd",
                  borderRadius: 4,
                  background: "#dc2626",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={() => handleDeleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
