"use client"
import React from 'react'
import { motion } from 'motion/react'
import { Button } from '../ui/button';

const FeaturesProjectSection = ({ children }: { children: React.ReactNode }) => {
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
            <motion.h2
                custom={0}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='font-bold text-2xl md:text-3xl text-center xl:text-4xl'>
                What I’ve Built – Real Projects, Real Impact
            </motion.h2>

            <motion.div
                custom={1}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
            >
                <>
                    {children}
                </>
                <div className='flex justify-center mt-8'>
                    <Button>See all projects</Button>
                </div>
            </motion.div>
        </div>
    )
}

export default FeaturesProjectSection
