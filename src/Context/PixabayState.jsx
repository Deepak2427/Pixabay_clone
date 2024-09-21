import React, { useContext, useEffect, useState } from 'react'
import PixabayContext from './PixabayContext'

const PixabayState = ({children}) => {
    const [imageData , setImageData] = useState([])
    const [query,setQuery] = useState('london')
    const api_key = "46074249-063ebac4217065e1e58715a67"
    useEffect(() =>{
        const fetchData = async () =>{
            const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&per_page=100`)
            const data = await api.json()
            setImageData(data.hits)
            console.log(data.hits)
        }
        fetchData()
    },[query])

    const fetchImageByCategory = async (cat) =>{
      const fetchData = async () =>{
        const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&per_page=100`)
        const data = await api.json()
        setImageData(data.hits)
        console.log(data.hits)
    }
    fetchData()
    }

  return (
    <PixabayContext.Provider value={{ imageData, fetchImageByCategory, setQuery }}>{children}</PixabayContext.Provider>
  )
}

export default PixabayState