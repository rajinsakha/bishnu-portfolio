import React from "react";


import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { IContact } from "@/lib/interface";

const ContactForm = () => {


  return (
    <form
      
      className="flex-1 flex flex-col gap-4 max-w-sm w-full"
    >
      <div className="flex flex-col gap-2">
      
        <Input
          name="fullname"
          type="text"
          placeholder="Enter your name"
          className=" "
        />
      </div>

      <div className="flex flex-col gap-2">
    
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          className=""
        />
      </div>

      <div className="flex flex-col gap-2">

        <Textarea
          placeholder="Enter your message"
          name="message"
          id="message"
        className="resize-none "
        />
      </div>

      <Button type="submit" className="w-fit mt-4 ">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;