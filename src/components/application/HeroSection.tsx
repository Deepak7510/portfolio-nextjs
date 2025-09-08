"use client"
import { Badge } from '@/components/ui/badge'
import { motion } from "motion/react"
import { Crown } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/button'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import UsersAvatarList from './UsersAvatarList'
import {
    Code2,
    Server,
    Database,
    Cloud,
    Palette,
    Workflow,
    Network,
    Bug,
    Shield
} from "lucide-react";

type typeOfSkill = {
    id: number;
    name: string;
    color: string;
    icon: React.ElementType
}

const skills: typeOfSkill[] = [
    { id: 1, name: "Frontend", color: "bg-gradient-to-r from-pink-500 to-yellow-500 scale-105", icon: Code2 },
    { id: 2, name: "Backend", color: "bg-gradient-to-r from-blue-500 to-purple-500 scale-105", icon: Server },
    { id: 3, name: "Database", color: "bg-gradient-to-r from-green-400 to-cyan-500 scale-105", icon: Database },
    { id: 4, name: "Deployment", color: "bg-gradient-to-r from-indigo-500 to-sky-500 scale-105", icon: Cloud },
    { id: 5, name: "UI/UX", color: "bg-gradient-to-r from-orange-400 to-pink-600 scale-105", icon: Palette },
    { id: 6, name: "DevOps", color: "bg-gradient-to-r from-teal-500 to-lime-500 scale-105", icon: Workflow },
    { id: 7, name: "Restful API", color: "bg-gradient-to-r from-red-400 to-pink-500 scale-105", icon: Network },
    { id: 8, name: "Testing", color: "bg-gradient-to-r from-sky-400 to-indigo-500 scale-105", icon: Bug },
    { id: 9, name: "Security", color: "bg-gradient-to-r from-green-600 to-gray scale-105", icon: Shield },
];

const HeroSection = () => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const ref = useRef<NodeJS.Timeout | null>(null);

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


    useEffect(() => {

        ref.current = setInterval(() => {
            setCurrentColorIndex(pre => (pre + 1) % skills.length)
        }, 1000)


        return () => {
            if (ref.current) {
                clearInterval(ref.current);
                ref.current = null
            }
        }

    }, [currentColorIndex, ref])

    console.log(currentColorIndex)



    return (
        <div className='w-full flex flex-col gap-5 justify-center text-center items-center'>
            <motion.p
                custom={1}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
            >
                <Badge variant="secondary" className='text-base font-medium rounded-full px-5'><Crown className='h-4! w-4!' /> <span>Hii I&apos;m Deepak Kumar Yadav →</span></Badge>
            </motion.p>

            <motion.h1
                custom={2}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}

                className='font-bold text-5xl'>
                Powerful Web Solutions, Clean & Modern
            </motion.h1>

            <motion.p
                custom={2}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}

                className='font- text-xl max-w-xl'>
                I create fast, scalable, and visually stunning web applications that help businesses and individuals grow online.
            </motion.p>

            <motion.div
                custom={3}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}

                className=' flex gap-4 items-center justify-center flex-wrap max-w-2xl'>
                {
                    skills?.map((item, index) => {
                        return <Button variant={"outline"} size={'lg'} key={item.id} className={`rounded-full ${index === currentColorIndex && item.color} `}> {<item.icon />}  {item.name}</Button>
                    })
                }
            </motion.div>


            <motion.div
                custom={4}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}

            >
                <Card className='w-full border-blue-100 dark:border-blue-700 bg-blue-50 dark:bg-blue-900/20 max-w-4xl py-3.5'>
                    <CardContent className='flex flex-col justify-center items-center gap-2'>
                        {/* <h2 className='font-bold text-2xl'>Who Am I?</h2> */}
                        <h2 className='font-semibold text-2xl'>Empowering Through Code, Learning Every Day</h2>
                        <p className='text-sm'>I believe coding is more than just writing programs — it&apos;s about problem-solving, creativity, and growth. From building projects to contributing in teams, I&apos;m on a mission to grow as a developer and help others.</p>
                        <Button size={"sm"} className='px-10 rounded-full animate-pulse'>Let&apos;s Connect →</Button>
                    </CardContent>
                </Card>
            </motion.div >

            <motion.div
                custom={5}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}

            >
                <UsersAvatarList />
            </motion.div >
        </div >
    )
}

export default HeroSection
