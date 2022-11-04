import React from 'react';
import MoviesCarousel from './MoviesCarousel';
import { getDocumentary, getTopRated, getTrending } from '../utils/tmdbApi';
import { useQuery } from '@tanstack/react-query';
import Error from './Error';

const TopRated = () => {
  const { isLoading, isError, error, data: topRatedMovie } = useQuery(['Error'] ,getTopRated);
  const { data: trendingMovie } = useQuery(['trending'], getTrending);
  const { data: docMovie } = useQuery(['documentary'], getDocumentary);

  // if( isError) return (
    
  //     <Error title={error.message} />
  // )

  return (
    <div className=' pt-5 pb-7 ' style={{
      background: 'linear-gradient(90deg, #b6b6b6ff 0%, #7a7afcff 51%)',
    }}>
      <MoviesCarousel movieData={topRatedMovie} isError={isError} error={error} title='Top Rating' />
      <MoviesCarousel movieData={trendingMovie} isError={isError} error={error} title='trending' />
      <MoviesCarousel movieData={docMovie} isError={isError} error={error} title='Documentary' />
    </div>
  );
};

export default TopRated;
