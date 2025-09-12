"use client"
import React from 'react'
import { motion } from 'motion/react'
import { Code, Database, Layers } from "lucide-react";
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

type roadmapDataType = {
    id: number;
    title: string;
    description: string
    icon: React.ElementType
    button: string;
    color: string;
}

const roadmapData: roadmapDataType[] = [
    {
        id: 1,
        title: "Frontend Development",
        description:
            "Build stunning, responsive, and modern interfaces. Master HTML, CSS, JavaScript, React, and more through a structured path.",
        icon: Code,
        button: "Explore",
        color:
            "border-violet-200 dark:border-violet-700 bg-violet-50 dark:bg-violet-900/20",
    },
    {
        id: 2,
        title: "Backend Development",
        description:
            "Master how the web works behind the scenes—covering APIs, databases, authentication, and server-side programming to build real-world applications",
        icon: Database,
        button: "Explore",
        color:
            "border-yellow-200 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
        id: 3,
        title: "Full-Stack Development",
        description:
            "Become a complete developer by combining frontend and backend skills to build end-to-end scalable applications.",
        icon: Layers,
        button: "Explore",
        color:
            "border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20",
    },
];


export const DevelopmentRoadmapSection = () => {
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
                Interactive Development Roadmaps
            </motion.h2>
            <motion.p
                custom={1}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='text-base md:text-xl text-center max-w-4xl'>
                Our first major feature is live! Dive into interactive, step-by-step roadmaps designed to simplify complex development processes and guide you from concept to completion
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {roadmapData.map((item, index) => {
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
                                className={`h-full flex flex-col border ${item.color} p-6 rounded-2xl shadow-md`}
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
                                        <Button variant="default">{item.button}</Button>
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
