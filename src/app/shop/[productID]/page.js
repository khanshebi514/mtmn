'use client'

import Container from "@/Ui/container";
import useFetchData from "@/hooks/useFetch";
import ProductsItem from "@/Ui/productsItem";
import Link from "next/link";


export default function ProductDetail({params}) {
  const id = params.productID
  const {products, error, isLoading} = useFetchData(`https://dummyjson.com/products/${id}`)
  console.log(products)

  return (

      <Container>
      <div className="w-full h-[100vh] bg-[#222] flex justify-center items-center gap-3 p-3">
      {isLoading && <p className="font-bold text-xl">Loading data Please Wait ...!</p>}
      {error && <p className="font-bold text-xl">{error.message}</p>}

      {products &&
          <ProductsItem products={products}/>
      }
      </div>
      </Container>
  )
}
