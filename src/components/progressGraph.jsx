import React, {useState, setState, useEffect} from 'react';
import {database} from '../firebase';
import { UserAuth } from '../context/AuthContext';
import { storage } from "../firebase";
import db from "../firebase";
import { doc, collection, QuerySnapshot, setDoc, updateDoc, getDocs} from "firebase/firestore"; 
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ProgressGraph = () => {

    const { user } = UserAuth();

    const [userDataArray, setUserDataArray] = useState([]);

    //replaced with the useEffect function
    /*const getData = () => {
        var counter = 0;    //counter used to stop auto for loop at 14
        var dataArray = [];

        //db.collection(user.uid).get().then((snapshot) => {  //gets snapshot of user's collection
        db.instance.collection(user.uid).get().then((qSnapshot) => {
                qSnapshot.docs.forEach(doc => {  //auto for loop through documents in collection
                var entry = doc.data();

                console.log(entry);
                var hours = entry.lengthHours;
                console.log(hours);
            });
        });
    }
    getData()*/

    useEffect(() => {
        let unsubscribed = false;
      
        getDocs(collection(db, user.uid))
            .then((querySnapshot) => {
                if (unsubscribed) return; // unsubscribed? do nothing.
                
                const newUserDataArray = querySnapshot.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }));
        
                setUserDataArray(newUserDataArray);
                console.log(userDataArray);
            })
            .catch((err) => {
                if (unsubscribed) return; // unsubscribed? do nothing.
        
                // TODO: Handle errors
                console.error("Failed to retrieve data", err);
            });
      
        return () => unsubscribed  = true;
    }, []);

    return (
        <div>
          { userDataArray.map((userData) => userData.firstName) }
        </div>
      );

}

export default ProgressGraph;