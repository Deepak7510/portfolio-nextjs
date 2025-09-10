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
import { Code, Rocket, TrendingUp } from "lucide-react";
import { Separator } from '../ui/separator';

export type approachDataType = {
    id: number;
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
};

const approachData: approachDataType[] = [
    {
        id: 1,
        title: "Hands-On Development Experience",
        description:
            "I design and build real-world websites and mobile apps with a focus on performance, scalability, and user experience—crafted to match industry standards.",
        icon: Code,
        color: "border-violet-200 dark:border-violet-700 bg-violet-50 dark:bg-violet-900/20", // Blue
    },
    {
        id: 2,
        title: "Build: Turn Ideas into Reality",
        description:
            "Transform your vision into powerful digital products. From modern websites to feature-rich apps, I help bring your ideas to life with clean and effective code.",
        icon: Rocket,
        color: "border-yellow-200 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900/20", // Blue
    },
    {
        id: 3,
        title: "Grow: Scale Your Business",
        description:
            "Take your brand or project to the next level with tailored web and app solutions that not only work but help you succeed in the digital world.",
        icon: TrendingUp,
        color: "border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20", // Blue
    },
];

const ProcessSection = () => {

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
                Transforming Ideas into Digital Solutions
            </motion.h1>

            <motion.div custom={1}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='w-full'
            >
                <Card className='border-cyan-100 dark:border-cyan-700 bg-cyan-50 dark:bg-cyan-900/20 py-3lg:py-6'>
                    <CardContent className='md:flex justify-between w-full gap-2 md:gap-4 px-3 lg:px-6'>
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
                                    {approachData.map((item) => (
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
                        <Separator className='md:hidden' />
                        <div className='flex flex-col items-start justify-center md:w-[50%] gap-4 md:gap-8 py-4 md:py-20'>
                            <h1 className='font-semibold text-2xl'>Why Choose DevNexa?</h1>
                            <p className='max-w-md'>
                                I’m not just building a portfolio — I deliver professional Web and App Development services.
                                From responsive websites to powerful mobile applications, I create solutions that are modern, scalable, and user-friendly.                                </p>
                            <Button variant={"outline"} className='text-cyan-400 rounded-full'>Let&apos;s Start</Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}

export default ProcessSection
