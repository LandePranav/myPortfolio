"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import emailjs from "@emailjs/browser";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    async function handler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            const result = await emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string,e.target as HTMLFormElement, process.env.NEXT_PUBLIC_PUBLIC_KEY as string);
            console.log("Email sent successfully", result);
            setAlertVisible(true);
            (e.target as HTMLFormElement).reset();
            setTimeout(()=>{setAlertVisible(false)},5000);


        } catch (error) {
            console.error("Error sending email: ", error)
        }
    }

    const [alertVisible, setAlertVisible] = useState(false);

    return(
        <>
            <section className="relative text-gray-400 font-custom">
            <h2 className="text-xl text-center mt-24 mb-6 italic">
              Get in Touch
            </h2>
            {!!alertVisible && (
              <motion.div
                initial={{y:-200,opacity:0}}
                animate={alertVisible && {y:[-200,-100,-100,-100,-200],opacity:[0,1,,1,1,0]}}
                transition={{duration:5,ease:"easeInOut"}}
                className="absolute top-0 z-10 shadow-lg shadow-gray-700">
                <Alert className="bg-green-300 mx-auto">
                  <AlertTitle>Message Received !</AlertTitle>
                  <AlertDescription>
                    I will get back to you as soon as possible.
                  </AlertDescription>
                </Alert>
            </motion.div>
            ) }
            <form id="myForm" className="px-6" onSubmit={e => handler(e)}>
              <label htmlFor="name">Name</label>
              <Input 
                type="text" 
                placeholder="name" 
                name="name" 
                id="name" 
                required
            ></Input>
              <label htmlFor="email">Email</label>
              <Input 
                type="email" 
                placeholder="email" 
                id="email" 
                name="email" 
                required
               ></Input>
              <label htmlFor="message">Message</label>
              <Textarea 
                className="overflow-auto text-wrap" 
                name="message" 
                placeholder="whats on your mind.." 
                />
              <div className="text-center my-6 ">
                <Button variant={'secondary'} type="submit" className="font-bold">Submit</Button>
              </div>
            </form>
          </section>
        </>
    );
}