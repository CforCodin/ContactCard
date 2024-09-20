import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import AddAndUpdateContact from '../components/AddAndUpdateContact';
import Contact from '../components/Contact';
const useDisclouse = () => {

  
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
    console.log("Setting isOpen to true");
  }
  const onClose = () => {
    setOpen(false);
    console.log("Setting isOpen to false");
  }


  return {isOpen, onOpen, onClose};
};

export default useDisclouse