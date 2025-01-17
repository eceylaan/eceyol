import { createClient } from "@/app/utils/supabase/client";
import dynamic from "next/dynamic";

const DetailsPages = dynamic(() => import("@/app/components/detailspages/DetailsPages"), { ssr: false });

export default async function Details({ params }) {
  const { id } = params;

  // Supabase ile sunucu tarafında veri çekme
  const supabase = createClient();
  const { data: products, error } = await supabase.from("products").select("*").eq("id", id);

  if (error || !products || products.length === 0) {
    console.error("Error:", error);
    return <div>Ürün bulunamadı.</div>;
  }

  return (
    <>
      <div>Detay sayfasına hoş geldiniz</div>
      <DetailsPages product={products[0]} />
    </>
  );
}
