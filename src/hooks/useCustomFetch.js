'use client'
import { useEffect, useState } from "react"

const useProductFetcher = (url)=>{
    const [loadedProducts, setLoadedProducs] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);



   useEffect(()=>{

    const fetchProducts = async()=>{
        try{
            const res = await fetch(url);
            setIsLoading(true)
            if(!res.ok){
                throw new Error('Faild to fetch Data..!')
            }

            const data = await res.json()
            setLoadedProducs(data)
            setIsLoading(false);
        }catch(error){
            setError(error.message)
        }

    }
    fetchProducts(url)

   }, [url])
   
   return {loadedProducts, isLoading, error}
}

export default useProductFetcher;