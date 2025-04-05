"use client";

// import { useRouter } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRight, Badge, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { products } from "../data/item";

const Sample = () => {
  const features = ["Premium Quality Paints", "Eco-Friendly Options", "Expert Color Matching"]
  const products = [
    {
      id: 1,
      name: "Glow Satin",
      img: "/buke.png",
      desc: "Wide spreading capacity, weather shield, low odour, durable, suitable for both interior & exterior, low VOC "
    },
    { 
      id: 2,
      name: "Glow Matt Emulsion",
      img: "/buke2.png",
      desc: "Flat finish, weather proof and long lasting, suitable for all walls, both interior & exterior, low odour, wide spreading capacity suitable for all clors"
    },
    {
      id: 3,
      name: "Glow Super Smooth Putty",
      img: "/buke3.png",
      desc: "Basecoat, for interior skimming, durable and long lasting skimming, no cracks, smooth luxury glossy and extremely smooth"
    },
    {
      id: 4,
      name: "Glow Plus Emulsion",
      img: "/buke4.png",
      desc:"Highly recommended for interior/exterior, wide coverage, durable, suitable for both interior and exterior, accomondation rough walls"
    },
    {
      id: 5,
      name: "Glow Satin",
      img: "/buke.png",
       desc: "Wide spreading capacity, weather shield, low odour, durable, suitable for both interior & exterior, low VOC "
    }
  ]

  return (
    <>
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
        <div className="lg:w-1/2 space-y-6">
          <Badge className="px-3 py-1 text-sm bg-primary/10 text-primary border-none">Premium Paint Collection</Badge>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Choose Our Colors <span className="text-primary">With Confidence</span>
          </h1>

          <div className="w-20 h-1.5 bg-primary rounded-full"></div>

          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you are in the early stages of planning your project, preparing your materials, or diving into the
            actual process of painting, we have you covered every step of the way. Our extensive collection ensures
            you find exactly what you need to bring your vision to life.
          </p>

          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="bg-primary/10 rounded-full p-1">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" className="font-medium">
              Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="font-medium">
              Color Consultation
            </Button>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/home.jpg"
              fill
              alt="Modern interior with premium paint finish"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
            <div className="flex items-center gap-3">
              <div className="bg-green-500 h-3 w-3 rounded-full"></div>
              <p className="font-medium">Eco-friendly formulations</p>
            </div>
          </div>

          <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500 h-3 w-3 rounded-full"></div>
              <p className="font-medium">Low VOC options available</p>
            </div>
          </div>

          {/* Color palette dots */}
          <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-3">
            <div className="h-6 w-6 rounded-full bg-red-400 shadow-md"></div>
            <div className="h-6 w-6 rounded-full bg-blue-400 shadow-md"></div>
            <div className="h-6 w-6 rounded-full bg-green-400 shadow-md"></div>
            <div className="h-6 w-6 rounded-full bg-yellow-400 shadow-md"></div>
            <div className="h-6 w-6 rounded-full bg-purple-400 shadow-md"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
        {products.map((product) => (
          <Link 
            href={`/color-sample/${product.id}`} 
            key={product.id} 
            className="block group"
          >
            <div className="border rounded-lg p-4 hover:shadow-lg transition duration-300 h-[380px] group-hover:border-blue-500">
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                <Image 
                  src={product.img} 
                  fill
                  alt={product.name} 
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-700 line-clamp-4">
                {product.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sample;