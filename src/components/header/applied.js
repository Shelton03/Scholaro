import React, { useState } from "react";
import { db } from "../../firebase/firebase";
import { useAuth } from "../../contexts/authContext";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";



const Applied = () => {

    const {currentUser} = useAuth()
    const email = currentUser.email

    const [data,setData] = useState([])

    const createList = async () => { const docs = await getDocs(collection(db,"users"));
    docs.forEach((doc) => {
      
        if (doc.data().email === email)
        {
        setData(doc.data().list_of_applied)
        }
  })
};

createList()

return(
  <div className="applications-container">
    <div className="applications-left-side">
      <h1 style={{marginTop:"50px",
                   fontSize:"2rem", 
                  marginLeft:"30px", 
                  fontFamily:"sans-serif", 
                  color:"purple",
                  textDecoration:"underline",
                  textUnderlineOffset: "10px",
                  }}>Your Current Applications</h1>
      
      <br/>
      
      <div className="application-list" style={{marginLeft:"30px",fontSize:"20px"}}> {data.map(program => <li>{program}</li>)}  {console.log("data", data)}  </div>
    </div>

    <div className="applications-right-side">
      <blockquote style={{color:"purple", fontSize:"17px"}}>
      "Education is the most powerful weapon which <br/>
      you can use to change the world."<br/>
      -Nelson Mandela
      </blockquote>
    </div>
  </div>
)
    

}

export default Applied
