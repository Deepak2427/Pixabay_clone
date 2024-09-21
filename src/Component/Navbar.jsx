import React, { useContext } from 'react'
import PixabayContext from '../Context/PixabayContext'

const Navbar = () => {
    const { fetchImageByCategory, setQuery} = useContext(PixabayContext)
    return (
        <>
            <div className='container text-center my-3'>
                <button type="button" onClick={() => fetchImageByCategory('nature')} class="btn btn-outline-primary mx-3">Nature</button>
                <button type="button" onClick={() => fetchImageByCategory('science')} class="btn btn-outline-warning mx-3">Science</button>
                <button type="button" onClick={() => fetchImageByCategory('computer')} class="btn btn-outline-info mx-3">Computer</button>
                <button type="button" onClick={() => fetchImageByCategory('transportation')} class="btn btn-outline-danger mx-3">Transportation</button>
                <button type="button" onClick={() => fetchImageByCategory('buildings')} class="btn btn-outline-warning mx-3">Buildings</button>
                <button type="button" onClick={() => fetchImageByCategory('animals')} class="btn btn-outline-info mx-3">Animals</button>
                <button type="button" onClick={() => fetchImageByCategory('food')} class="btn btn-outline-light mx-3">Food</button>
                <button type="button" onClick={() => fetchImageByCategory('sports')} class="btn btn-outline-primary mx-3">Sports</button>
            </div>
            <div className="container" style={{width:'800px' }}>
                <input type="text" onChange={(e) => setQuery(e.target.value) } className="form-control bg-dark text-light"  ></input>
            </div>
        </>
    )
}

export default Navbar