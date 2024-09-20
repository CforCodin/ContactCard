import React from 'react'
import Modal from "./Modal";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import * as Yup from "yup";


const contactsSchemaValidation = Yup.object().shape({
    name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .required("Name is required"),

    email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

    phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),

})
const AddAndUpdateContact = ({isOpen,onClose, isUpdate, contact}) => {


    const addContact = async (contact) => {   
       try{
        const contactsRef = collection(db, "contacts");
        await addDoc(contactsRef, contact);
        onClose();
        toast.success("Contact Added");
       }
         catch(error){
              console.log(error);
         }



    };

    const updateContact = async (contact, id) => {   
        try{
         const contactsRef = doc(db, "contacts", id);
         await updateDoc(contactsRef, contact);
         onClose();
         toast.success("Contact Updated");
 
        }
          catch(error){
               console.log(error);
          }
 
 
 
     };
  return (
    <div>
     <Modal isOpen={isOpen}  onClose={onClose}>
       <Formik
       validationSchema={contactsSchemaValidation}
       initialValues={isUpdate ? {
        name: contact.name,
        email: contact.email,
        phone: contact.phone
       }
        :{
            name: '',
            email: '',
            phone: ''
        }
       }

       onSubmit={(values) => {
        console.log(values);
        isUpdate ? updateContact(values, contact.id) : addContact(values);
        onClose();
    }}
        >
        <Form className='flex flex-col '>
            <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <Field name="name" className="border h-10 rounded-md p-2" />
            <div className='text-red'>
            <ErrorMessage name="name" />
            </div>
            </div>
            <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <Field name="email" className="border h-10 rounded-md p-2" />
            <div className='text-red'>
            <ErrorMessage name="email" />
            </div>
            </div>
            <div className='flex flex-col gap-1'>
            <label htmlFor="phone">Phone No</label>
            <Field name="phone" className="border h-10 rounded-md p-2" />
            <div className='text-red'>
            <ErrorMessage name="phone" />
            </div>
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded-md p-2 m-4 self-end">
                {isUpdate ? "Update" : "Add"} Contact
            </button>

        </Form>
       </Formik>
      </Modal>
    </div>
  )
}

export default AddAndUpdateContact