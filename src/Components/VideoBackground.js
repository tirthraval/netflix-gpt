
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movie_id}) => {
    const trailerVideo = useSelector(store => store.movies?.mainMovieTrailer);
    useMovieTrailer(movie_id)


  return (
    <div className='w-full'>
        <iframe className ="w-full aspect-video" src={"https://www.youtube.com/embed/" +trailerVideo?.key+"?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground