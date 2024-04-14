import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = (category) => {
    
    const [images, setImages] = useState([])
    const [isLoading, seIsLoading] = useState(true)


    const getImages = async () => {
    const gifs = await getGifs({ category });
    setImages(gifs);
    seIsLoading(false)
    }


    useEffect(() => {getImages()});


    return {
        images,
        isLoading: isLoading
    }
}