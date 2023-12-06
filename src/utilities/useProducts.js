import useSWR from 'swr';

export function useProducts(){

    const productsFetcher = async () => {
      const response = await fetch('/api/hygraph/fetchAllProducts', { 
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          });
  
      const data = await response.json();
  
      if(response.status == 200){
          return data.products;
      }
  }
    const { data, error, isLoading, mutate } = useSWR("/api/hygraph/fetchrecenttransactions", productsFetcher);
    return {
        products: data,
        isLoading,
        isError: error,
        mutate
    }
}