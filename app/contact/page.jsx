"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email content
    const mailtoLink = {
      to: 'ashah85@binghamton.edu',
      subject: `New Contact Form Submission from ${formData.firstname} ${formData.lastname}`,
      body: `
Name: ${formData.firstname} ${formData.lastname}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}
      `
    };

    // Create the mailto URL
    const mailtoUrl = `mailto:${mailtoLink.to}?subject=${encodeURIComponent(
      mailtoLink.subject
    )}&body=${encodeURIComponent(mailtoLink.body)}`;

    // Open default email client
    window.location.href = mailtoUrl;
  };

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "+1 607 370 8772",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "ashah85@binghamton.edu",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      description: "New York City, NY",
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4, 
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Fill out the form below to get in touch with me.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  type="text"
                  name="lastname" 
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  type="email"
                  name="email" 
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <Input 
                  type="tel"
                  name="phone" 
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* select */}
              <Select onValueChange={handleServiceChange} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                    <SelectItem value="Backend Development">Backend Development</SelectItem>
                    <SelectItem value="Fullstack Development">Fullstack Development</SelectItem>
                    <SelectItem value="Software Development">Software Development, Design & QA</SelectItem>
                    <SelectItem value="Cloud Services">Cloud Services</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea 
                className="h-[200px]"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <Button 
                size="md" 
                className="max-w-40" 
                type="submit"
              >
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li 
                    key={index}
                    className="flex items-center gap-6"
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;