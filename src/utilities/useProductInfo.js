import useSWR from 'swr';

export function useProductInfo(slug){

    const productFetcher = async () => {
      const response = await fetch('/api/hygraph/fetchProductBySlug', { 
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({slug: slug})
          });
  
      const data = await response.json();
  
      if(response.status == 200){
          return data.product;
      }
  }
    const { data, error, isLoading, mutate } = useSWR("/api/hygraph/fetchProductBySlug", productFetcher);
    return {
        product: data,
        isLoading,
        isError: error,
        mutate
    }
}