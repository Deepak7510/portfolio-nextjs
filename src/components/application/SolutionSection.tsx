"use client"
import React from 'react'
import { motion } from 'motion/react'
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import {
    Monitor, Server, Layers,
    Building2, Palette, BarChart3, Rocket, Handshake
} from "lucide-react";

type serviceType = {
    id: number;
    title: string;
    description: string
    icon: React.ElementType
    button: string;
}

export const services: serviceType[] = [
    {
        id: 1,
        icon: Monitor,
        title: "Web Development",
        description: "Custom, responsive, and high-performance websites built with the latest technologies.",
        button: "Explore",
    },
    {
        id: 2,
        icon: Server,
        title: "Backend Solutions",
        description: "Secure, scalable, and efficient server-side systems with APIs, databases, and authentication.",
        button: "Explore",
    },
    {
        id: 3,
        icon: Layers,
        title: "Full-Stack Development",
        description: "End-to-end solutions combining frontend + backend to deliver complete digital products.",
        button: "Explore",
    },
    {
        id: 4,
        icon: Building2,
        title: "System Design",
        description: "Robust architecture and design strategies to ensure your apps grow seamlessly with your business.",
        button: "Explore",
    },
    {
        id: 5,
        icon: Palette,
        title: "UI/UX Design",
        description: "Clean, modern, and user-friendly designs that give your users the best experience.",
        button: "Explore",
    },
    {
        id: 6,
        icon: BarChart3,
        title: "SEO & Digital Marketing",
        description: "Boost your online presence with optimized SEO strategies and smart digital marketing solutions.",
        button: "Explore",
    },
    {
        id: 7,
        icon: Rocket,
        title: "Projects & Portfolio",
        description: "Take a look at our past work and real-world projects that helped businesses grow.",
        button: "Explore",
    },
    {
        id: 8,
        icon: Handshake,
        title: "Support & Collaboration",
        description: "Ongoing maintenance, updates, and collaboration to ensure your digital success.",
        button: "Explore",
    }
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
                Your Complete Digital Solutions Partner            </motion.h2>
            <motion.p
                custom={2}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='text-base md:text-xl text-center max-w-4xl'>
                DevNexa delivers everything your business needs to succeed in the digital world—from modern websites and mobile apps to scalable systems and long-term support.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {services.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <motion.div
                            key={2 + item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card
                                className={`h-full flex flex-col border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/20 rounded-2xl shadow-md`}
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
