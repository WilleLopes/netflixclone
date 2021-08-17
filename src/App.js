import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

export default () => {

  const [movieList,  setMovieList] = useState([]);

  useEffect(() =>{
    const loadAll = async () => {
     // Pegando a lista Total
     let list = await Tmdb.getHomeList();
     console.log("essa é a lista de filmes", list)

    }
    loadAll();
  },[])

  return (
    <div>
      olá mundo!
    </div>
  )
}