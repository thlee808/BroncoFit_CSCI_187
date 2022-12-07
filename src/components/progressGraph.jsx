// import React, {useState, setState, useEffect} from 'react';
// import {database} from '../firebase';
// import { auth } from '../firebase'
// import { UserAuth } from '../context/AuthContext';
// import { storage } from "../firebase";
// import db from "../firebase";
// import { doc, collection, QuerySnapshot, setDoc, updateDoc, getDoc, onSnapshot } from "firebase/firestore"; 
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// const ProgressGraph = () => {

//     const { user } = UserAuth();

//     const [userDataArray, setUserDataArray] = useState([]);

//     //replaced with the useEffect function
//     /*const getData = () => {
//         var counter = 0;    //counter used to stop auto for loop at 14
//         var dataArray = [];

//         //db.collection(user.uid).get().then((snapshot) => {  //gets snapshot of user's collection
//         db.instance.collection(user.uid).get().then((qSnapshot) => {
//                 qSnapshot.docs.forEach(doc => {  //auto for loop through documents in collection
//                 var entry = doc.data();

//                 console.log(entry);
//                 var hours = entry.lengthHours;
//                 console.log(hours);
//             });
//         });
//     }
//     getData()*/

//     const fetchExercises=async()=>{
//         const docRef = doc(db, user.uid, "12_07_2022");
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//         console.log("Document data fucker:", docSnap.data());
//         setUserDataArray(docSnap.data());
//         } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//         }
//     }

//     useEffect(() => {
//         if (user) {
//             fetchExercises();
//         }
//       }, [user]);

//     return (
//         <div>
//           HEllo
//         </div>
//       );

// }

// export default ProgressGraph;