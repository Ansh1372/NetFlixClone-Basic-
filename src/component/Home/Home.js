import React from 'react'
import './Home.scss';
const Card = ({img})=>(
  <img className='card' src={img} alt='cover'/>
)
const Row = ({title , arr=[{
  img:""
}
]})=>(
  <div className='Row'>
    <h2>{title}</h2>
    <div>
    {
      arr.map((item)=>(
        <Card img={item.img}/>
      ))
    }
    </div>
  </div>
  
)

const Home=()=> {
  return (
    <div className='Home'>
    <div className='Banner'></div>
    <Row title={"Popular on Netflix"}/>
      
    </div>
  )
}

export default Home;