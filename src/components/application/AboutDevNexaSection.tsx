"use client";
import React from 'react'
import { motion } from 'motion/react'
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '../ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { Users, Laptop, BarChart3 } from "lucide-react";
import { Separator } from '../ui/separator';

export type aboutDevNexaDataType = {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
};

const aboutDevNexaData: aboutDevNexaDataType[] = [
    {
        id: 1,
        title: "Who We Are: About DevNexa",
        description:
            "A platform dedicated to building modern web and app solutions, crafted to empower businesses and individuals.",
        icon: Users,
        color:
            "border-violet-200 dark:border-violet-700 bg-violet-50 dark:bg-violet-900/20",
    },
    {
        id: 2,
        title: "Build: Turn Ideas into Reality",
        description:
            "From responsive websites to feature-rich apps, we transform ideas into powerful digital products.",
        icon: Laptop,
        color:
            "border-yellow-200 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
        id: 3,
        title: "Grow: Scale Your Business",
        description:
            "Our tailored solutions help you grow, succeed, and stay ahead in the digital world.",
        icon: BarChart3,
        color:
            "border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20",
    },
];


const AboutDevNexaSection = () => {

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
            <motion.h1 custom={0}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='font-bold text-2xl md:text-3xl text-center xl:text-4xl'>
                Empowering Businesses, Enabling Ideas
            </motion.h1>

            <motion.div custom={2}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='w-full'
            >
                <Card className='border-green-100 dark:border-green-700 bg-green-50 dark:bg-green-900/20'>
                    <CardContent className='md:flex justify-between w-full gap-2 md:gap-4 px-3 lg:px-6'>
                        <div className='flex flex-col items-start justify-center md:w-[50%] gap-4 md:gap-8 py-4 md:py-20'>
                            <h1 className='font-semibold text-xl md:text-2xl'>Who is DevNexa?</h1>
                            <p className='max-w-md'>
                                DevNexa is a platform dedicated to delivering modern Web & App Development solutions.
                                We focus on creating scalable, user-friendly, and high-performance digital products that help individuals and businesses turn their ideas into reality.
                            </p>
                            <Button variant={"outline"} className='text-green-400 rounded-full'>Let&apos;s Start</Button>
                        </div>
                        <Separator className='md:hidden' />
                        <div className='p-1 md:w-[50%] flex justify-center items-center'>
                            <Carousel
                                opts={{
                                    align: "start",
                                }}
                                orientation="vertical"
                                className="w-full"
                                plugins={[
                                    Autoplay({
                                        delay: 2000,
                                    }),
                                ]}
                            >
                                <CarouselContent className="-mt-1 h-[300px]">
                                    {aboutDevNexaData.map((item) => (
                                        <CarouselItem key={item.id} className="pt-1 md:basis-1/3">
                                            <div className="p-1">
                                                <Card className={`${item.color}`}>
                                                    <CardContent className="space-y-1 md:space-y-2">
                                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow">
                                                            <item.icon className="w-5 h-5 text-indigo-600" />
                                                        </div>
                                                        <h2 className='text-xl font-semibold'>{item.title}</h2>
                                                        <p className='text-sm'>{item.description}</p>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}

export default AboutDevNexaSection
