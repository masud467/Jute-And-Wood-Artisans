import { useEffect, useState } from "react";


const useItemData = () => {
    const [data,setData] = useState([]);
    // const[loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async () => {
            // setLoading(true)
            const res = await fetch ('https://jute-and-wood-artisans-for-server.vercel.app/item');
            const data = await res.json();
            setData(data)
            // setLoading(false)
        };
        fetchData();
    },[])

    return {data}
};

export default useItemData;