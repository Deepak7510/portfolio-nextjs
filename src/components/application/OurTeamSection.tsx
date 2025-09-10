"use client";
import React from 'react'
import { motion } from 'motion/react'
import { Card, CardContent } from '../ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const OurTeamSection = () => {

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
        <div className='flex flex-col justify-center items-center gap-7'>
            <motion.h1 custom={0}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='font-bold text-2xl md:text-3xl text-center xl:text-4xl'>
                Meet Our Team
            </motion.h1>

            <motion.div custom={1}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='w-full'
            >

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 2000,
                            stopOnInteraction: false, // ✅ autoplay kabhi rukega nahi
                        }),
                    ]}
                    className="w-full">
                    <CarouselContent className="-ml-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
                                <div className="p-1">
                                    <Card className='border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/20'>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-2xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className='relative flex justify-center mt-10 gap-6'>
                        <CarouselPrevious className='static' />
                        <CarouselNext className='static' />
                    </div>
                </Carousel>

            </motion.div>
        </div>
    )
}

export default OurTeamSection


