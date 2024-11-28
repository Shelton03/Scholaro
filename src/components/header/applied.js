import React from "react";
import { db } from "../../firebase/firebase";
import { useAuth } from "../../contexts/authContext";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";



const Applied = () => {

    const {currentUser} = useAuth()
    const email = currentUser.email

    let data = []
    const createList = async () => { const docs = await getDocs(collection(db,"users"));
    docs.forEach((doc) => {
        if (doc.data().email === email)
        {
        doc.data().list_of_applied.forEach(program =>
          data.push(<p>{program}</p>)
        )
        }
  })
};

createList()


 

return(
  <div className='text-2xl font-bold pt-14'> {data} {console.log("data", data)}  </div>
)
    

}

export default Applied
