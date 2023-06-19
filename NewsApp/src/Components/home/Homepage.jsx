import React, { useEffect, useState } from 'react'
import './home.css'

const Homepage = ({type}) => {
  console.log(type)
  const [data,setData]=useState([])
  useEffect( ()=>{
    apifunc()

  },[type])
 const apifunc = async ()=>{
  let resp = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/${type}/in.json`);
  let result = await resp.json();
  //  console.log(result.articles);
   setData(result.articles)
 }
  return (
    <div className='homepageOuterDiv'>
      <div className="newsItemOuterDiv">

           {console.log(data)}
           {
            data.length > 0 ? 
            
              data.map((ele)=>{
                return  <div className="newsItemBox">
                <div className="imgDiv">
                  <img src={ele.urlToImage} alt="" />
                </div>
                <div className="textDiv">
                  <h2 style={{fontSize:'2.5ch'}}>{ele.title}</h2>
                  <p style={{fontSize:'1.5ch', color:'gray'}}>Sort by {ele.author} / 2:05 pm on 05 May 2022 Thu</p>
                  <h4 style={{fontSize:'2ch'}}>{ele.description}</h4>
                  <p>read more at <a href={ele.url}>{ele.source.name}</a></p>
                  
                </div>
              </div>
              })
            
            : 
            <div className='newsItemBox'>
              <div className="dataNotFoundDiv">
              <h1>Data Not Present</h1>
              </div>
            </div>
           }
      </div>
    </div>
  )
}

export default Homepage