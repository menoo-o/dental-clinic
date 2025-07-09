'use client';

import Image from 'next/image';

import { Badge } from "@/components/ui/badge"
import {  Star, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
   <>
          {/* Hero Section */}
    <section className="relative bg-gradient-to-br from-[#E3E3E3] to-[#F5F5F5] py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-22 min-h-[90vh] sm:min-h-[95vh] flex items-center">
  {/* Background Image Container */}
  <div className="absolute inset-0 w-full h-full">
    {/* Mobile Background Image */}
    <Image
      src="/mobile-hero.jpeg"
      alt="Beautiful confident smile showing perfect white teeth"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center sm:hidden"
    />

    {/* Desktop Background Image */}
    <Image
      src="/homepage.jpeg"
      alt="Beautiful confident smile showing perfect white teeth"
      fill
      priority
      sizes="100vw"
      className="object-cover object-center hidden sm:block"
    />

    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
  </div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-2xl space-y-8">
      <div className="space-y-4">
        <Badge className="bg-[#0E969D]/10 text-[#0E969D] hover:bg-[#0E969D]/20">
          Transform Your Smile Today
        </Badge>
        <h1 className="text-4xl lg:text-6xl font-bold text-[#052C38] leading-tight">
          Your new,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED7412] to-[#0E969D]">
            confident smile
          </span>
        </h1>
        <p className="text-xl text-[#1C4C5B] leading-relaxed">
          Experience exceptional dental care with our state-of-the-art treatments and compassionate team. We are here to help you achieve the smile you have always dreamed of.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          size="lg"
          className="bg-gradient-to-r from-[#ED7412] to-[#0E969D] hover:from-orange-600 hover:to-cyan-700 text-lg px-8 text-white"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Schedule Consultation
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-[#0E969D]/20 text-[#0E969D] hover:bg-[#0E969D]/10 text-lg px-8 bg-white/80 backdrop-blur-sm"
        >
          Learn More
        </Button>
      </div>

      <div className="flex items-center space-x-8 pt-4">
        <div className="flex items-center space-x-2">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 bg-gradient-to-r from-[#ED7412] to-[#0E969D] rounded-full border-2 border-white"
              ></div>
            ))}
          </div>
          <span className="text-sm text-[#1C4C5B] font-medium">500+ Happy Patients</span>
        </div>
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-sm text-[#1C4C5B] font-medium ml-2">4.9/5 Rating</span>
        </div>
      </div>
    </div>
  </div>
</section>


   </>
  );
}
