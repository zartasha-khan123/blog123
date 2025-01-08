"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from 'lucide-react'
import { MapPin } from 'lucide-react'
import Image from "next/image"
import { sendEmail } from "@/utils/emailservice"

export default function ContactForm() {
 
 const [name,setName]=useState('');
 const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
   
    const templateParams = {
      to_name:'zara',
      from_name:name,
     from_email:email,
     message:message,
    };

    try {
      await sendEmail(templateParams)
        alert('Email sent successfully');
        setName('');
        setEmail('');
        setMessage('');
      ;
    }
    catch (error) {
     console.error('FAILED TO SEND EMAIL', error);
     alert('Failed to send email');
    }

  }

 
  return (
<>
<div className="min-h-screen bg-black text-white">
  
          <div className="container mx-auto p-4 pt-36">
  <div className="flex items-center gap-6">
    {/* Text Section */}
    <div>
      <h1 className="text-8xl font-bold text-orange-600">Contact us</h1>
      <p className="text-gray-400 text-lg max-w-lg">
        Our bakery and handcrafted pastries are of the highest quality. Come and enjoy our organic bakery items.
      </p>
    </div>

    {/* Image Section */}
    <Image
      src="/contactimg1.webp"
      alt="Bakery"
      width={400} // Adjust size as needed
      height={200}
      className="rounded-md"
    />
  </div>
</div>

        
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-orange-900/20 mix-blend-multiply z-10"></div>
                <Image
                  src="/contactimg.webp"
                  alt="Bakery display with fresh bread and pastries"
                  className="w-full h-full object-cover sepia brightness-90"
                    layout="fill"

                />
              </div>
    
              {/* Content Section */}
              <div className="space-y-12">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">Visit our shop</h1>
    
                {/* California Location */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">PM, California</h2>
                  <div className="space-y-2 text-gray-400">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      <span>6987 ImnerAve, Minesia</span>
                    </p>
                    <p className="pl-7">California (99081) United States</p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      <span>Tel. (991) 583-2502</span>
                    </p>
                  </div>
                </div>
    
                {/* New York Location */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">YC, New York</h2>
                  <div className="space-y-2 text-gray-400">
                    <p className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      <span>6987 ImnerAve, Minesia</span>
                    </p>
                    <p className="pl-7">California (99081) United States</p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      <span>Tel. (991) 583-2502</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* Scroll to Top Button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-sm transition-colors"
            aria-label="Scroll to top"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 10l7-7m0 0l7 7m-7-7v18" 
              />
            </svg>
          </button>
        </div>
      
    

<div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-orange-600">
            Contact us & submit your feedback
          </h1>
          <p className="text-gray-400 text-lg">
            Gochujang raw denim gentrify pug, ugh mukbang green juice chambray tousled.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              <span className="text-xl">(213) 555 - 0298</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5" />
              <span className="text-xl">contact@bakery.com</span>
            </div>
          </div>

          <p className="text-gray-400 pt-4">
            Gochujang raw denim gentrify pug, ugh mukbang green juice cham.
          </p>
        </div>

        <Card className="p-6 bg-[#916b2e] border-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            
          
            <Input
              placeholder="Enter your name"
              className="bg-transparent border-0 placeholder:text-gray-900 text-black h-12"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-0 placeholder:text-gray-900 text-black h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              placeholder="Write your message..."
              className="bg-transparent border-0 placeholder:text-gray-900 text-black min-h-[160px] resize-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button 
              type="submit"
              className={`w-full text-orange-400 hover:bg-gray-500 h-12 text-lg ${
                "opacity-50 cursor-not-allowed"
              }`}
             
            >
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
    </>
  )
}

