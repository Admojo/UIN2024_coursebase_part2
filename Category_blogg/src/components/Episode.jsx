import { useEffect } from "react"

export default function Episode ({name}) {

    const [result, setResult] = useEffect(null)

    const getEpisode = async() => {
        fetch (name)
        .then(response => response.json())
        .then(data => setResult(data))
        .catch(error => console.log(error))
    }

    useEffect(()=> {
        getEpisode()
    }, [])

    return(
        <h3><Link to={result?.name}>{result?.episode}</Link></h3>
    )
}