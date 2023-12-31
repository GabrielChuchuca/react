import { useEffect, useState } from "react"
import './App.css'
import { getRandomFact } from "./services/facts"


const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

function useCatImage({fact}) {
    const [imageUrl, setImageUrl] = useState()
    useEffect(() => {
        if(!fact) return 
        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords);

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
            const { url } = response
            setImageUrl(url)
        })
    }, [fact])

    return { imageUrl }
}

export function App(){
    const [fact, setFact] = useState()
    //const [imageUrl, setImageUrl] = useState()
    const { imageUrl } = useCatImage({fact})

    useEffect(() => {
        getRandomFact().then(setFact)
    }, [])

    const handleClick = async () => {
        const newFact = await getRandomFact()
        setFact(newFact)
    }

    return(
        <main>
            <h1>App cat</h1>
            {/* <section> */}
            <button onClick={handleClick}>Get new fact</button>
                {fact && <p>{fact}</p> }
                {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} /> }
            {/* </section> */}
        </main>
    )
}