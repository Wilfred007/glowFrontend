import Image from "next/image";
import Link from "next/link";
import React from "react";

const Walls = () => {
  const Collection = [
    {
      name: "Green",
      category: "Premium Quality",
      shades: "5  Shades",
      img: "/buke.png",
      type: "Matt Emulsion",
    },
    {
      name: "POP Screeding Paint",
      category: "Premium Quality",
      shades: "4  Shades",
      img: "/buke3.png",
      type: "Matt Emulsion",
    },
    {
      name: "Blue",
      category: "Premium Quality",
      shades: "3  Shades",
      img: "/buke4.png",
      type: "Matt Emulsion",
    },
    {
      name: "Green",
      category: "Premium Quality",
      shades: "5  Shades",
      img: "/buke.png",
      type: "Matt Emulsion",
    },
  ];
  return (
    <div>
      <div className="flex ">
        <div className="md:w-6/12 mx-auto py-10 bg-black">
          <h1 className="text-white flex justify-center text-6xl font-bold">
            Meet Our
          </h1>
          <p className="text-white flex justify-center text-2xl mt-2">
            {" "}
            Biggest Colour Range
          </p>
          <p className="text-gray-300 w-11/12 mx-auto text-center py-10">
          Transform Your Space with Premium Paints

          </p>
          <div className="mt-5 px-2 flex justify-center">
            <Link
              href="/"
              className="bg-yellow-500 px-5 py-2 rounded-full text-black mt-5"
            >
              See Our Colour Guide
            </Link>
          </div>
        </div>
        <div className="hidden md:flex">
          <Image src="/crown.png" height={900} width={900} alt="home" />
        </div>
      </div>
      <div className="flex w-11/12 mx-auto mt-10">
        <div className="hidden md:flex">
          <Image src="/yellow.jpg" height={700} width={700} alt="home" />
        </div>
        <div className="md:w-6/12 mx-10 shadow-lg p-10">
          <h1>
            Mild <span className="text-3xl">Colours</span>
          </h1>
          <p className="text-gray-700 ">
            The look and feel of our walls & ceilings matt and silk emulsion
            range embodies everything Crown stands for, brimming with
            personality and potential to help you paint your own possible. We
            know what a positive difference we can make to people and our
            planet, so our walls & ceilings matt and silk emulsion range uses
            carefully selected Vegan Verified ingredients along with our unique
            breatheasy® 99% solvent free formulation to offer you the confidence
            to decorate your home safely. Limiting exposure to airborne triggers
            of asthma and allergy, it helps create a healthier space for your
            whole family. And we’re pushing what’s possible even further with
            packaging made using 100% recycled plastic. Our new trend colours
            have been curated by our team of colour specialists to help you stay
            ahead of the curve and be the envy of your friends, family and
            neighbours. The thick and creamy paint goes on easily and covers
            beautifully… no wonder it’s Good Homes Approved!
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div>
        <h1 className="text-4xl font-bold text-gray-800">Walls & Ceilings</h1>
        <div className="border-t border-gray-300 my-4 p-10 w-1/4 m-auto"></div>
        </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto p-10 gap-10">
        {Collection.map((item, index) => (
          <div key={index} className="gap-10">
            <div className="md:flex gap-10 shadow-lg p-10">
              <img src={item.img} height={200} width={200} alt="paint" />
              <div className="">
                <h1 className="text-2xl flex text-center font-bold text-gray-700">
                  {item.name}
                </h1>
                <h1 className="text-gray-600 flex text-center">{item.category}</h1>
                <div className="mt-24">
                  <h1 className="text-gray-600 font-bold">{item.shades}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:w-11/12 mx-auto">
        <h1 className="text-3xl font-bold">Walls and Ceilings paints</h1>
        <p className="text-gray-700 my-10">
          Welcome to our Walls and Ceilings range! Here, you’ll find Crown’s
          most extensive colour assortment, designed to rejuvenate your walls,
          refresh your ceilings, and enhance your living space. This
          high-quality paint collection includes a variety of shades and
          finishes to suit any style, from contemporary and minimalist to
          traditional and eclectic. Whether you’re searching for bold statement
          colours or calming neutrals, we have what you need to achieve your
          dream designs. The Walls & Ceilings collection is not only beautiful,
          but also long-lasting and simple to apply. Suitable for a range of
          surfaces, this exceptional formulation is guaranteed to provide a
          flawless finish that will last for years to come. Not sure where to
          start? Our Colour Specialists are always on-hand to provide expert
          advice and help you select the perfect shade for your home. Visit one
          of our retailers or browse our website for inspiration and more ideas
          to transform your home, or order an A5 Real Paint Swatch colour sample
          on this site. Our samples are fully recyclable and adhesive free. At
          Crown Paints, we believe that colour is more than just a pigment on a
          wall – it’s a unique reflection of who we are. Let us help you
          revitalise your space and bring your walls and ceilings to life!
        </p>
      </div>
    </div>
  );
};

export default Walls;
