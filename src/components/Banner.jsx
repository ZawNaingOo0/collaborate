import { useState, useEffect } from 'react';
import { instance, requests, base_url } from '../utils/tmdbApi';
const Banner = (props) => {
  const [moviesF, setMoviesF] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchBanner);
      setMoviesF(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
      return request;
    }
    fetchData();
  }, []);

  return (
    <section className=' text-white'>
      <div className='hero-image  relative'>
        <img
          className=' h-96  min-w-full object-cover object-top bg-no-repeat object-center-bottom opacity-[0.9]    '
          src={`${base_url}${moviesF.backdrop_path}`}
          alt={moviesF.name}
        />
        <div className='absolute bottom-5 px-3  ml-2   '>
          <p className='text-2xl mb-3'>{moviesF.name}</p>
          <p className='w-96 text-sm'>{moviesF.overview}</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
