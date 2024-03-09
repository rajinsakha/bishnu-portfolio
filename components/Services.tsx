import React from "react";
import Title from "./ui/title";
import { MdVpnKey } from "react-icons/md";
import ServiceCard from "./ui/serviceCard";

const Services = () => {
    const serviceList = [
        {
            Icon: MdVpnKey,
            title: 'Digital Product Design',
            description:'Multiple Layers of Security are Dispered Across the Networks.'
        }
    ]


  return (
    <section className="padding flex flex-col gap-6 items-center">
      <Title title="Services I Provide" />
      <p className="text-gray-300">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi at
        deserunt sit ex saepe architecto perspiciatis ab dolor reiciendis atque?
        Veniam laborum sunt alias magni quia accusantium voluptatibus eaque et?
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {serviceList.map((service,index)=>(
            <ServiceCard service={service} key={index}/>
        ))}
      </div>
    </section>
  );
};

export default Services;
