"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import emailjs from "@emailjs/browser";

export default function Contact() {
    async function handler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            const result = await emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string,e.target as HTMLFormElement, process.env.NEXT_PUBLIC_PUBLIC_KEY as string);
            console.log("Email sent successfully", result);
        } catch (error) {
            console.error("Error sending email: ", error)
        }
    }

    return(
        <>
            <section className="text-gray-400 font-custom">
            <h2 className="text-xl text-center mt-24 mb-8 italic">
              Get in Touch
            </h2>
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