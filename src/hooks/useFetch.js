'use client'

import { useEffect, useState } from "react"


export default function useFetchData(url) {

    const [products, setProducts] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setIsError] = useState(null);


    useEffect(()=>{
        const fetcData =async () =>{

            try {
    
                const res = await fetch(url);
                setIsLoading(true);
    
            if(!res.ok){
                throw new Error('Failed to Fetch Data ...!')
            }
    
            const data = await res.json();
            setProducts(data);
            setIsLoading(false);
            }catch(err){
                setIsError(err)
            };
    
        }

        fetcData(url)

    }, [url])

    return {isLoading, products, error}

}
