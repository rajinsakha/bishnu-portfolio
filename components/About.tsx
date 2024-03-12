import Image from "next/image";
import React from "react";
import Title from "./ui/title";
import Timeline from "./ui/timeline";

const About = () => {

  const qualities = [
    {
      title:'Keep Safe Exploring the Internet',
      subTitle:'Cryptanalysis & Classical Encryption Technique (Stream Cipher, Cipher And Caesar Cipher Etc'
    },
    {
      title:'Secure Your Business',
      subTitle:'Cryptanalysis & Classical Encryption Technique (Stream Cipher, Cipher And Caesar Cipher Etc'
    },
    {
      title:'Keep Safe Exploring the Internet',
      subTitle:'Cryptanalysis & Classical Encryption Technique (Stream Cipher, Cipher And Caesar Cipher Etc'
    },

  ]


  return (
    <section
      className="padding w-full flex max-lg:flex-col justify-between bg-slate-50"
      id="about"
    >
      <div className="flex-1 w-full flex items-center justify-start">
        <Image
          src="/hero_image.JPG"
          alt="main-image"
          sizes="100vw"
          width={0}
          height={0}
          className="object-cover w-[80%] h-[80vh] object-center"
          style={{objectPosition: '50% 10%'}}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center gap-6">
        <Title title="Know Me More" />
        <p className="text-black max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          laboriosam sequi, autem odit inventore recusandae placeat. Eaque a
          nobis aperiam?
        </p>

      <Timeline />
      </div>
    </section>
  );
};

export default About;
