import React, { useEffect , useState} from 'react'
import axios from 'axios';
import {BiPlay} from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai";
import './Home.scss';
import { Link } from 'react-router-dom';

const apiKey = "7f33fd6a26b4f7c4b68f4e7916ccc209";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const imgUrl = "https://image.tmdb.org/t/p/original";
const nowPlaying ='now_playing';
const topRated = "top_rated";
const popular = 'popular'; 
const Card = ({img})=>(
  <img className='card' src={img} alt='cover'/>
)
const Row = ({title , arr=[]})=>(
  <div className='Row'>
    <h2>{title}</h2>
    <div>
    {
      arr.map((item , index)=>(
        <Card key={index} img={`${imgUrl}/${item.poster_path}`}/>
      ))
    }
    </div>
  </div>
  
)

const Home=()=> {
  const [UpcomingMovies, setUpcomingMovies] = useState([]);
  const [PopularMovies, setPopularMovies] = useState([]);
  const [TopRatedMovies, setTopRatedMovies] = useState([]);
  const [NowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [GetAllGenreMovies, setGetAllGenreMovies] = useState([])
  useEffect(() => {
    const fetchUpcoming  = async () => {
      const {data:{results} } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovies(results);
    }

    const fetchPopular  = async () => {
      const {data:{results} } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
    }
    const fetchNowPlaying  = async () => {
      const {data:{results} } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovies(results);
    }
    const fetchTopRated  = async () => {
      const {data:{results} } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    }

    const GetAllGen  = async () => {
      const {data:{genres} } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGetAllGenreMovies(genres);
    }
    
    fetchUpcoming();
    fetchPopular();
    fetchNowPlaying();
    fetchTopRated();
    GetAllGen();
    
  }, [])

  return (
    <section className='Home'>
      <div className='banner' style={{
        backgroundImage:PopularMovies[0] ? `url(${`${imgUrl}/${PopularMovies[0].poster_path}`})`:"rgb(16,16,16)"
      }}>
      {
        PopularMovies[0] && (
          <h1>{PopularMovies[0].original_title}</h1>
        )
      }
      {
        PopularMovies[0] && (
          <p>{PopularMovies[0].overview}</p>
        )
      }
      <div>
      <button><BiPlay/> Play</button>
      <button>My List <AiOutlinePlus/></button>
      </div>
      
        
        
      </div>
      <Row title={"Upcoming Movies"} arr={UpcomingMovies}/>
      <Row title={"Popular Movies"} arr={PopularMovies}/>
      <Row title={"Now Playing Movies"} arr={NowPlayingMovies}/>
      <Row title={"Top Rated Movies"} arr={TopRatedMovies}/>
    <div className="genreBox">
      {
        GetAllGenreMovies.map((item)=>(
          <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>

        ))
      }
    </div>
      
    </section>
  )
}

export default Home;