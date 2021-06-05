import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const abortCont = new AbortController();
    const [data, setData] = useState(null);

    const getData = async () => {
        const res = await fetch(url, {signal: abortCont.signal});
        return await res.json();
    }

    useEffect( async () => {
        const data = await getData().catch(e => console.log(e.message));
        setData(data);
        return () => abortCont.abort();
    }, [url]);

    return {data};
}

export default useFetch;