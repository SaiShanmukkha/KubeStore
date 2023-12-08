import useSWR from 'swr';

export function useOH(){

    const productsFetcher = async () => {
      const response = await fetch('/api/hygraph/fetchOH', { 
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify("demo@gmail.com")
          });
  
      const data = await response.json();

    //   console.log(data);
  
      if(response.status == 200){
          return data.orders;
      }
  }
    const { data, error, isLoading, mutate } = useSWR("/api/hygraph/fetchOH", productsFetcher);
    
    return {
        orders: data,
        isLoading,
        isError: error,
        mutate
    }
}