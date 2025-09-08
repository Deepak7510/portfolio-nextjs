"use client"

import React from 'react'
import { motion } from 'motion/react'
import { Code2, Globe, Smartphone, Megaphone, Palette, Server, Layers, Wrench, Network } from "lucide-react";
import ServiceCard from '@/components/application/ServiceCard';

export type ServiceType = {
    id: number;
    title: string;
    desc: string;
    icon: React.ElementType;
    color: string;
};

const services: ServiceType[] = [
    {
        id: 1,
        title: "Software Development",
        desc: "Software development is the process of conceiving, specifying, designing, programming, documenting, testing.",
        icon: Code2,
        color: "border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20", // Blue
    },
    {
        id: 2,
        title: "Website Development",
        desc: "Web development is the work involved in developing a web site for the Internet (World Wide Web) or an intranet.",
        icon: Globe,
        color: "border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900/20", // Green
    },
    {
        id: 3,
        title: "Mobile Application Development",
        desc: "Mobile app development is the act or process by which a mobile app is developed.",
        icon: Smartphone,
        color: "border-amber-200 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20", // amber
    },
    {
        id: 4,
        title: "Digital Marketing",
        desc: "Digital marketing encompasses all marketing efforts that use an electronic device or the internet.",
        icon: Megaphone,
        color: "border-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900/20", // red
    },
    {
        id: 5,
        title: "Graphics Designing",
        desc: "Graphic design is the process of visual communication and problem-solving through the use of typography.",
        icon: Palette,
        color: "border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-900/20", // purple
    },
    {
        id: 6,
        title: "Domain and Hosting",
        desc: "Domain name is the first face of a business when we talk digitally. Web hosting is a service that allows organizations.",
        icon: Server,
        color: "border-cyan-200 dark:border-cyan-700 bg-cyan-50 dark:bg-cyan-900/20", // cyan
    },
    {
        id: 7,
        title: "ERP and CRM Development",
        desc: "ERP is an acronym for Enterprise Resource Planning, but even its full name doesn't shed much light.",
        icon: Layers,
        color: "border-pink-200 dark:border-pink-700 bg-pink-50 dark:bg-pink-900/20", // pink
    },
    {
        id: 8,
        title: "Maintenance Services",
        desc: "Leverage our powerful software maintenance and support services around the globe, as we are able to deliver our solutions everywhere.",
        icon: Wrench,
        color: "border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20", // orange
    },
    {
        id: 9,
        title: "Other IT Services",
        desc: "Leverage our powerful software and Other IT services around the globe, as we are able to deliver our solutions everywhere.",
        icon: Network,
        color: "border-fuchsia-200 dark:border-fuchsia-700 bg-fuchsia-50 dark:bg-fuchsia-900/20", // fuchsia

    },
];


const ServicesPage = () => {

    const textVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: any) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };
    return (
        <div className='w-full px-2 md:px-20'>
            <div className='text-center mt-5 mb-10'>
                <motion.h1
                    custom={1}
                    initial={textVariants.hidden}
                    whileInView={textVariants.visible}
                    viewport={{ once: true }}

                    className='font-bold text-4xl'>
                    Trusted IT Services
                </motion.h1>
                <motion.h1
                    custom={2}
                    initial={textVariants.hidden}
                    whileInView={textVariants.visible}
                    viewport={{ once: true }}

                    className='font-bold text-4xl'>
                    delivered by DevNexa.
                </motion.h1>
            </div>
            <div className='grid grid-cols-3 gap-10 mb-5 ' >
                {services?.map((item => {
                    return <motion.div
                        key={item.id}
                        custom={3}
                        initial={textVariants.hidden}
                        whileInView={textVariants.visible}
                        viewport={{ once: true }}
                        className='h-full'
                    >
                        <ServiceCard service={item} />
                    </motion.div>

                }))}

            </div>
        </div>
    )
}

export default ServicesPage
