import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import {IoMdTrash} from "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri";
import { collection, doc, deleteDoc, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import AddAndUpdateContact from './AddAndUpdateContact';
import { useState } from 'react';
import useDisclouse from '../hooks/useDisclouse';
import { toast } from 'react-toastify';

const Contact = ({contact}) => {

   const {isOpen, onOpen, onClose} = useDisclouse();
   

  const deleteContact = async (id) => {
    try{
      const contactRef = doc(db, "contacts", id);
      await deleteDoc(contactRef);
      toast.success("Contact Deleted");
    }
    catch(error){
      console.log(error);
    }
  };


  return (
    <div key={contact.id} className="bg-yellow flex justify-between  items-center p-4 rounded-lg my-4">
              <div className="flex gap-3 items-center">
               <FaRegUserCircle className="text-orange text-4xl flex-start"/>
               <div className="text-white">
                 <h2 className="text-black font-bold">{contact.name}</h2>
                 <p  className="text-black text-sm">{contact.email}</p>
                 <p  className="text-black text-sm">{contact.phone}</p>
               </div>
               </div>
               <div className="flex  text-3xl items-center justify-end flex-auto">
                  <IoMdTrash className="text-red  cursor-pointer" onClick={() => deleteContact(contact.id)}/>
                  <RiEditCircleLine className="text-purple-950  cursor-pointer " onClick={onOpen}/>
               </div>
            <AddAndUpdateContact 
            contact = {contact}
            isUpdate
             isOpen={isOpen} onClose={onClose}  />
            </div>

  )
}

export default Contact