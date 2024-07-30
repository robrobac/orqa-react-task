import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";
import { useInView } from "react-intersection-observer";

export default function useFetchEmployeeData() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [page, setPage] = useState(0);
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);

    const [employees, setEmployees] = useState([]);

    const {ref, inView} = useInView()

    useEffect(() => {
        const fetchData = async () => {
            const baseUrl = import.meta.env.VITE_API_PATH;
            setIsLoading(true)

            try {
                let url = baseUrl;

                if (debouncedSearch && debouncedSearch !== "") {
                    console.log("SEARCH: ", debouncedSearch)
                    url += `?search=${debouncedSearch}`;
                } else if (page) {
                    console.log("PAGE: ", page)
                    url += `?page=${page}`;
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
    }, [page, debouncedSearch]);

    useEffect(() => {
        if (data.data && !isLoading && debouncedSearch === "") {
            setEmployees((prevEmployees => [...prevEmployees, ...data.data]));
        } else if (data.data && !isLoading && debouncedSearch) {
            setEmployees(data.data);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    useEffect(() => {
        if (page >= data.last_page) {
            return
        } else if (inView) {
            setPage((prevPage) => prevPage + 1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    useEffect(() => {
        if (debouncedSearch === "") {
            setEmployees([]);
        }
    }, [debouncedSearch]);

    const handleSearch = (e) => {
        e.preventDefault()
        setPage(0)
        setSearch(e.target.value)
    }

    return {
        isLoading,
        error,
        employees,
        search,
        handleSearch,
        ref
    };
}