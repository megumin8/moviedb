'use client'
import React from "react"
import { Movie } from "@/types/movie.type"
import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/components/moviecard.module.css'
import { Card,Title,Disp } from "@/styled_components/moviecard.sc"
const Moviecard:React.FC<Movie> = (movie:Movie)=>{
  return(
    <Card key={movie.id}>
    <Link href={movie.link} target='0' className={`${styles.imgbox}`}>
      <Image
        src={movie.img}
        alt='movie thumbnail'
        width={200}
        height={250}
      />
    </Link>
  <div>
    <Title>{movie.id}</Title>
    <Disp>{movie.text}</Disp>
  </div>
</Card>
    ) 
}

export default Moviecard