"use client";
import React, { useEffect, useState } from "react";
import "../category.css";
import { createClient } from "@/app/utils/supabase/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AddtoBasketBtn from "@/app/components/addtobasketbtn/addtobasket";

export default async function Page({ params }) {
  const router = useRouter();
  let category = decodeURI(params.category);
  if (category === "Ev %26 Yaşam") category = "Ev & Yaşam";
  const [products, setProducts] = useState([]);
  const supabase = createClient();

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase.from("products").select("*").eq("category", category);
      console.log(category);
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data || []);
      }
    }
    fetchProducts();
  }, [category]);

  const handleProductClick = (id) => {
    router.push(`${category}/${id}`);
  };

  return (
    <div className="product-page">
      {products.length > 0 &&
        products.map((product) => (
          <div onClick={() => handleProductClick(product.id)} key={product.id} className="product">
            <div className="image-container">
              <Image className="urunImg rounded-lg" width={280} height={200} src={"/assets/beige.jpg"} alt="ürün resmi" />
            </div>
            <p>{product.product_name}</p>
            <p>{product.rating}</p>
            <AddtoBasketBtn />
          </div>
        ))}
    </div>
  );
}
