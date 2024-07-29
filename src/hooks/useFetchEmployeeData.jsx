import { useState, useEffect } from "react";

export default function useFetchEmployeeData(page, search) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
        const baseUrl = import.meta.env.VITE_API_PATH;
        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 2000)); // delay for 2 sec

        try {
            let url = baseUrl;

            if (page) {
                // TODO
                url += `?page=${page}`;
            } else if (search) {
                //TODO
                url += `?search=${search}`;
            }

            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    fetchData()
  }, [page, search]);

  return { data, isLoading, error };
}

