import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    // Start of the try...catch block
    try {
      const response = await fetch(url);

      // Check if the response was successful
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const products = await response.json();
      setProducts(products);
    } catch (error) {
      // Catch any errors that occurred during the fetch
      console.error("Failed to fetch products:", error);
    } finally {
      // This will run whether the fetch succeeded or failed
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  return { loading, products };
};
