import React from "react";
import { db } from "../../firebase/firebase";
import { useAuth } from "../../contexts/authContext";
import { useEffect } from "react";
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
        data.push(doc.data().list_of_applied)
        }
  })
};

createList()
console.log(data)

 const applied = data.map(program => <p>{program}</p>)

return(
    <div> {applied} </div>
)
    

}

export default Applied
