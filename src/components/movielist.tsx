'use client'
import { Movie } from "@/types/movie.type"
import Moviecard from "./moviecard"
import request from "@/helpers/request.helper";
async function getmovies(){
   const res = await request('https://moviesverse1.p.rapidapi.com/movies/1','GET')
   const movies  =  res&&res.data.movies as Movie[]
   return movies
  }
const Movielist= async () =>{
    const movies = await getmovies()
      if (movies) {
      return(
            movies && movies.map((movie)=>(
             <Moviecard
              {...movie}
             />
            ))
          )
      }else{
        return(
          <>
          </>
        )
      }
      
}
export default Movielist
