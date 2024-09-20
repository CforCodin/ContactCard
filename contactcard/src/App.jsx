import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { FaRegSquarePlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { db } from "./config/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import Contact from "./components/Contact";
import useDisclouse from "./hooks/useDisclouse";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AddAndUpdateContact from "./components/AddAndUpdateContact";



const App = () => {
 
  const [contacts, setContacts] = useState([]);
  const {isOpen, onOpen, onClose} = useDisclouse();

  

  useEffect(() => {
    const getContacts = async () => {
      try{
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
           
              const contactsList = snapshot.docs.map((doc) =>{ doc.data()
                return {id: doc.id, ...doc.data(),

                };
          });
            setContacts(contactsList);
            return contactsList;
            
        });
      } catch(error){
        console.log(error);
      }
    };
    getContacts();
  },[]);


  const filterContacts = (e) => {
      const value = e.target.value;
      const contactsRef = collection(db, "contacts");
      onSnapshot(contactsRef, (snapshot) => {
           
        const contactsList = snapshot.docs.map((doc) =>{ doc.data()
          return {id: doc.id, ...doc.data(),

          };
    });
    const filteredContacts = contactsList.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()));
      setContacts(filteredContacts);


     
      return filteredContacts;
      
  });


  } 

  return (
         <>
       <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2 ">
        <div className="flex relative items-center flex-grow">
        <FiSearch className="text-white text-3xl absolute m-1"/>
        <input
        onChange = {filterContacts}
        type="text" className=" flex-grow border bg-transparent border-white rounded-md h-10 text-white pl-10"/>
        </div>
        <div>
        <FaRegSquarePlus onClick={onOpen} className="text-white text-5xl cursor-pointer" />
        </div>
       </div>
       <div>
        {
          contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))

        }
        </div>  
       </div>  
       <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer />
       </>
  )
}

export default App;
