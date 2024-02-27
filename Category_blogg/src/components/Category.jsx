import { useParams } from "react-router-dom"
import { posts } from "../assets/posts"
import { useEffect, useState } from "react"
import PostCard from "./PostCard"

export default function Category(){


    const {slug} = useParams()
    const [post, setPost] = useState()
    // Blokkparantes: innheolder det som skal trigge useEffect 
    useEffect (() => {
        setPost(posts.filter(post => post.category === slug))
    }, [])
    console.log("sjekk", post)

    return (
        <section>
            <h1>{slug}</h1>
            {/* Hver gang man skal mappe, viktig med unik id, som ligger på object.  i dette tilfellet: key ="" */}
            {post?.map(item => <PostCard key={item.id} title={item.title} category={item.category} id={item.id} ingress={item.ingress}/>)}
        </section>
        
    )
}