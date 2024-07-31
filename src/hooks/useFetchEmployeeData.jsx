import { useState, useEffect } from "react";
import useDebounce from "./useDebounce";
import { useInView } from "react-intersection-observer";

export default function useFetchEmployeeData() {
    // Data, loading and error statest
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Pagination and search states
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);

    // List of all fetched employees
    const [employees, setEmployees] = useState([]);

    // Reference to DOM element that triggers the page change when visible in Viewport.
    const {ref, inView} = useInView()

    useEffect(() => {
        const fetchData = async () => {
            const baseUrl = import.meta.env.VITE_API_PATH;
            setIsLoading(true)

            try {
                let url = baseUrl;

                // Update URL search parameters
                if (debouncedSearch && debouncedSearch !== "") {
                    url += `?search=${debouncedSearch}`;
                } else if (page) {
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

    // Add fetched employees to the list, if PAGE update the state but keep the previous values, if SEARCH replace the state.
    useEffect(() => {
        if (data.data && !isLoading && debouncedSearch === "") {
            setEmployees((prevEmployees => [...prevEmployees, ...data.data]));
        } else if (data.data && !isLoading && debouncedSearch) {
            setEmployees(data.data);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading])

    // increment page number if referenced DOM element is in viewport
    useEffect(() => {
        if (page >= data.last_page) {
            return
        } else if (inView) {
            setPage((prevPage) => prevPage + 1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inView]);

    // Clear employees list if SEARCH value is "" after change
    useEffect(() => {
        if (debouncedSearch === "") {
            setEmployees([]);
        }
    }, [debouncedSearch]);

    // Controlling SEARCH state
    const handleSearch = (e) => {
        e.preventDefault()
        setPage(1)
        setSearch(e.target.value)
    }

    return {
        data,
        isLoading,
        error,
        employees,
        search,
        handleSearch,
        ref
    };
}



















