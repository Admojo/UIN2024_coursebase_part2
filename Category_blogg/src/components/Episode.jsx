<<<<<<< HEAD
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
=======
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Episode({name}){
    const [result, setResult] = useState(null)

    const getEpisode = async() =>{
        fetch(name)
        .then(response => response.json())
        .then(data => setResult(data))
        .catch(error => console.error(error))
    }

    console.log(result)

    useEffect(()=>{
        getEpisode()
    },[])

    return <h3><Link to={result?.episode}>{result?.episode}</Link></h3>
>>>>>>> b23e3ab2cd0b1e7d08ac753065b77263b5384e13
}