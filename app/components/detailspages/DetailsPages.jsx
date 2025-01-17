"use client";
import React from "react";
import AddtoBasketBtn from "../addtobasketbtn/addtobasket";

export default function DetailsPages({ product }) {
  console.log("Received Product:", product);
  if (!product) {
    return <div>Ürün detayları yüklenemedi.</div>;
  }
  return (
    <div className="Details">
      <h1>{product.product_name}</h1>
      <p>Kategori:{product.category}</p>
      <p>Fiyat: {product.price} ₺</p>
      <p>Puan: {product.rating}</p>
      <AddtoBasketBtn />
    </div>
  );
}
