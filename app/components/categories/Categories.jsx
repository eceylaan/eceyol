import Image from "next/image";
import "./categories.css";
import { createClient } from "@/app/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";

export default async function Categories() {
  const _cookies = cookies();
  const supabase = await createClient(_cookies);

  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Error fetching products:", error);
    return <p>Ürünler yüklenirken bir hata oluştu.</p>;
  }

  const categories = Array.from(new Set(products.map((product) => product.category)));

  const categoryImg = [
    "/assets/sports.webp",
    "/assets/moda.jpg",
    "/assets/supplies.jpg",
    "/assets/homenliving.avif",
    "/assets/electronic.webp",
  ];

  return (
    <div className=" mt-40 flex flex-wrap gap-4 justify-center">
      {categories.map((category, index) => (
        <Link href={encodeURI("categories/" + category).trim()} key={index} className="category text-center w-40">
          <Image
            width={200}
            height={200}
            className="w-full h-40 object-cover rounded-md"
            src={categoryImg[index]}
            alt={`${category} resmi`}
          />
          <p className="mt-2 text-sm font-medium">{category}</p>
        </Link>
      ))}
    </div>
  );
}
