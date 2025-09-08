"use client"
import React from 'react'
import { motion } from 'motion/react'

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
        <div className='flex flex-col justify-center items-center gap-5'>
            <motion.h2
                custom={0}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='font-bold text-4xl'>
                What I’ve Built – Real Projects, Real Impact
            </motion.h2>
            <>
                {children}
            </>
        </div>
    )
}

export default FeaturesProjectSection
