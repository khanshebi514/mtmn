'use client'
import useFetchData from "@/hooks/useFetch";
import Link from "next/link";
import ProductsItem from "@/Ui/productsItem";
export default function Shop() {
  const {products, error, isLoading} = useFetchData("https://dummyjson.com/products")
  console.log(products);


  return (
    <div className="w-full bg-[#222] flex justify-center gap-4 p-3 flex-wrap mt-9">
      {isLoading && <p className="font-bold text-xl">Loading data Please Wait ...!</p>}
      {error && <p className="font-bold text-xl">{error.message}</p>}

      {products && products.products.map((item)=>
        <Link href={`/shop/${item.id}`} key={item.id}> <ProductsItem products={item}/> </Link>
      )}

    </div>
    
  )
}
