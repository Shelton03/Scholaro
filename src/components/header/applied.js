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
  <div className='text-2xl font-bold pt-14'> {data.map(program => <li>{program}</li>)}  {console.log("data", data)}  </div>
)
    

}

export default Applied
