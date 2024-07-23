import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MovieCreate from '../components/MovieCreate'
import MovieSummary from '../components/MovieSummary'

function Index() {
  const [refreshRequired,setrefreshRequired]=useState()
  const[movieId,setMovieId]=useState()
  return (
    <div>
      <h3>Movie Gallery</h3>
      <Navbar></Navbar>
      <MovieCreate setrefreshRequired={setrefreshRequired} movieId={movieId}></MovieCreate>
      <MovieSummary refreshRequired={refreshRequired} setMovieId={setMovieId}></MovieSummary>
    </div>
  )
}

export default Index
