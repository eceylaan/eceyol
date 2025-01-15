"use client";
import React, { useEffect, useState } from "react";
import "../category.css";
import { createClient } from "@/app/utils/supabase/client";

export default function Page({ params }) {
  let category = decodeURI(params.category);
  if (category === "Ev %26 Yaşam") category = "Ev & Yaşam";
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const { data, error } = await supabase.from("products").select("*").eq("category", category);
      console.log(category);
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    }
    fetchProducts();
  }, [category]);
  return (
    <div className="category">
      {loading ? (
        <p>Yükleniyor...</p>
      ) : products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className="product">
            <p>{product.product_name}</p>
          </div>
        ))
      ) : (
        <p>Bu kategoriye ait ürün bulunamadı</p>
      )}
    </div>
  );
}
