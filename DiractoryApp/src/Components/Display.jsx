import React,{useState} from 'react'

const Display = () => {
  const [search, setSearch] = useState('');
    const [user, setUser] = useState({});
    const [show,setShow] = useState(false)
    

    const handleData = () => {
        const data = JSON.parse(localStorage.getItem(search));
        console.log(data);
        setUser(data);
    }

  
  return (
    <div className='addDetailsOuterDiv'>
            <div className="buttonHeadingDiv">Retrive Information</div>
            <div className="tableDiv">
            <input id='displayInput' type='number' placeholder='Enter your Aadhar' value={search} onChange={(e) => setSearch(e.target.value)} />
           <button id='displayButton' onClick={()=>{
            handleData()
            setShow(true)
            }}>Search</button>
          {
              user ? (
                  <div className='UserDisplay' style={show ? { boxShadow: "0 0 10px black"} : { border: "none" }}>
                      {
                         Object.keys(user).map(key=>(
                           <li>{key} : {user[key]}</li>
                           
                         )) 
                         
                      }
                     
              </div>
              ):(<div className='UserDisplay' style={show ? { boxShadow: "0 0 10px black",textAlign:"center"} : { border: "none" }}><h2>No Data Found</h2></div>)
          }
            </div>
        </div>
  )
}

export default Display