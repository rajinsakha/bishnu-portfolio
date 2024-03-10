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
        },
        {
          Icon: MdVpnKey,
          title: 'Digital Product Design',
          description:'Multiple Layers of Security are Dispered Across the Networks.'
      },
      {
        Icon: MdVpnKey,
        title: 'Digital Product Design',
        description:'Multiple Layers of Security are Dispered Across the Networks.'
    },
    {
      Icon: MdVpnKey,
      title: 'Digital Product Design',
      description:'Multiple Layers of Security are Dispered Across the Networks.'
  }
    ]


  return (
    <section className="padding flex flex-col gap-6 items-center">
      <Title title="Services I Provide" />
      <p className="text-gray-300 max-w-xl text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi at
        deserunt sit ex saepe architecto perspiciatis ab dolor reiciendis atque?
        
      </p>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12">
        {serviceList.map((service,index)=>(
            <ServiceCard Icon={service.Icon} title={service.title} description={service.description} key={index}/>
        ))}
      </div>
    </section>
  );
};

export default Services;
