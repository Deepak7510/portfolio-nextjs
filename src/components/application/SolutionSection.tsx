"use client"
import React from 'react'
import { motion } from 'motion/react'
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import {
    Monitor, Layers,
    Building2, Palette, BarChart3, Handshake
} from "lucide-react";

export type serviceType = {
    id: number;
    title: string;
    description: string
    icon: React.ElementType
    button: string;
}

const services: serviceType[] = [
    {
        id: 1,
        icon: Monitor,
        title: "Web Development",
        description: "Responsive, high-performance websites powered by modern technologies and clean code.",
        button: "Explore",
    },
    {
        id: 2,
        icon: Layers,
        title: "Full-Stack Solutions",
        description: "Complete frontend and backend development with APIs, databases, and authentication for real-world apps.",
        button: "Explore",
    },
    {
        id: 3,
        icon: Building2,
        title: "System Architecture",
        description: "Scalable system design and architecture to ensure your apps grow seamlessly with your business.",
        button: "Explore",
    },
    {
        id: 4,
        icon: Palette,
        title: "UI/UX Design",
        description: "Modern, user-friendly interfaces and experiences tailored to engage and delight your users.",
        button: "Explore",
    },
    {
        id: 5,
        icon: BarChart3,
        title: "SEO & Marketing",
        description: "Boost visibility and reach with SEO optimization and smart digital marketing strategies.",
        button: "Explore",
    },
    {
        id: 6,
        icon: Handshake,
        title: "Support & Collaboration",
        description: "Reliable maintenance, updates, and partnerships to ensure your long-term digital success.",
        button: "Explore",
    },
];


export const SolutionSection = () => {
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
        <div className='flex flex-col justify-center items-center gap-4 md:gap-7'>
            <motion.h2
                custom={0}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='font-bold text-2xl md:text-3xl text-center xl:text-4xl'>
                Your Complete Digital Solutions Partner
            </motion.h2>
            <motion.p
                custom={1}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='text-base md:text-xl text-center max-w-4xl'>
                DevNexa delivers everything your business needs to succeed in the digital world—from modern websites to scalable systems and long-term support.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {services.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={item.id}
                            custom={2 + index}
                            initial={textVariants.hidden}
                            whileInView={textVariants.visible}
                            viewport={{ once: true }}
                        >
                            <Card
                                className={`h-full flex flex-col border border-skya-200 dark:border-skya-700 bg-skya-50 dark:bg-skya-900/20 rounded-2xl shadow-md`}
                            >
                                <CardContent className="flex flex-col gap-4 flex-1">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow">
                                        <Icon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h2 className="text-xl font-semibold">{item.title}</h2>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        {item.description}
                                    </p>
                                    <div className="mt-auto">
                                        <Button size={"sm"} variant="outline">{item.button}</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </div >
    )
}
