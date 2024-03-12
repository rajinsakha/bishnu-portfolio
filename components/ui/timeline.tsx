import React from 'react'
import { FaCircle } from "react-icons/fa";

const Timeline = () => {
  return (
    <div className="w-full">
    {/* <h1 className="font-bold italic mb-10">PROYECTOS</h1> */}

    <div className="relative mt-5 text-left text-black">
        
        <div className="flex items-center relative">
            
            
            <div className="border-r-2 border-customText absolute h-full left-1 md:left-0 top-2 z-10">
                <FaCircle className='-top-1 -ml-2 absolute text-customText' />

            </div>

            <div className="ml-10">
                <div className="font-bold">Proyecto 1</div>
                <div className="italic md:mb-4">Empresa 1</div>
                <div className="mb-4 mt-2 md:hidden">
                    <div className="font-bold">2020</div>
                    <div className="text-xs">Abril - Junio</div>
                </div>
                <div className="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros.</div>
            </div>
        </div>



        
        <div className="flex items-center relative">
          
        
            <div className="border-r-2 border-customText absolute h-full left-1 md:left-0 top-2 z-10">
            <FaCircle className='-top-1 -ml-2 absolute text-customText'  />
            </div>

            <div className="ml-10">
                <div className="font-bold">Proyecto 2</div>
                <div className="italic md:mb-4">Empresa 2</div>
                <div className="mb-4 mt-2 md:hidden">
                    <div className="font-bold">2020</div>
                    <div className="text-xs">Julio - Agosto</div>
                </div>
                <div className="mb-10">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros.</div>
            </div>
        </div>



        
        <div className="flex items-center relative">
           
            <div className="border-r-2 border-customText absolute h-full left-1 md:left-0 top-2 z-10">
            <FaCircle className='-top-1 -ml-2 absolute text-customText'  />
            <FaCircle className='bottom-0 -ml-2 absolute text-customText'  />
            
            </div>

            <div className="ml-10">
                <div className="font-bold">Proyecto 3</div>
                <div className="italic md:mb-4">Empresa 3</div>
                <div className="mb-4 mt-2 md:hidden">
                    <div className="font-bold">2020</div>
                    <div className="text-xs">Agosto - Hoy</div>
                </div>
                <div className="mb-5">Fusce auctor gravida dui, ut tristique nisi aliquam quis. Maecenas id ligula ac dui mollis tempor. Sed vitae ex eros. </div>
            </div>
        </div>


    </div>
</div>

  )
}

export default Timeline