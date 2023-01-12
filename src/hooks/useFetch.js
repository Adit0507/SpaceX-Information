import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)
            const data = await res.json()
            setData(data)
        }
        fetchData()
    }, [url])

    return [data]
}

export default useFetch