'use client'
import { Movie } from "@/types/movie.type"
import Moviecard from "./moviecard"
import request from "@/helpers/request.helper";
import { Toolbar } from "@/styled_components/util.sc";
import { useState,useReducer,useEffect } from "react";
import { cats , cat} from "@/types/categories.type";

const Movielist= () =>{
  const [movies, setMovies] = useState<Movie[]>([])
   const [category,setCategory] = useState('latest-movies')
   const getmovies = ()=>{
    request('https://moviesverse1.p.rapidapi.com/movies/category/'+category+ '/1','GET').then((res)=>{
      const movies  =  res&&res.data.movies as Movie[]
      if (movies) {
        setMovies(movies)
      }
    })
   }
   const changecat = (e: any) =>{
    const cat = e.target.value as string
    setCategory(cat)
   }
   useEffect(()=>{
    console.log("cat change", category)
    getmovies()
   },[category])
    
      if (movies) {
      return(
         <>
         <Toolbar>
         <select name="Category" onChange={changecat}>
          {
            cats&& cats.map((cat,index)=>(
              <option value={cat.value} key={index}>{cat.name}</option>
            ))
          }
         </select>
         </Toolbar>
         <section className='movies_section'>
           {
            movies && movies.map((movie)=>(
              <Moviecard
               {...movie}
              />
             ))
           }
          </section>
         </>
          )
      }else{
        return(
          <>
          </>
        )
      }
      
}
export default Movielist
