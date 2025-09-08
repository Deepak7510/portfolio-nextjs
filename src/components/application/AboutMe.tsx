"use client"
import React from 'react'

import { motion } from 'motion/react'
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Avatar } from '../ui/avatar';
import me from '../../../public/me.jpg'
import Image from 'next/image';
import { Badge } from '../ui/badge';

const AboutMe = () => {
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
                About Me
            </motion.h2>
            <motion.p
                custom={1}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='text-xl'
            >
                Get to know the person behind DevNexa
            </motion.p>
            <motion.div
                custom={2}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='w-full'>
                <Card className='border-green-100 dark:border-green-700 bg-green-50 dark:bg-green-900/20'>
                    <CardContent className='flex justify-between w-full gap-4'>
                        <div className='p-5 w-[70%] space-y-6'>
                            <div className='flex gap-4 items-center'>
                                <Avatar className='h-20 w-20 border-3 shadow-lg border-black dark:border-white'>
                                    {/* <AvatarFallback></AvatarFallback> */}
                                    <Image src={me} alt='me' fill className='object-cover' />
                                </Avatar>
                                <div className='space-y-1'>
                                    <h1 className='font-bold text-3xl'>
                                        Deepak Kumar Yadav
                                    </h1>
                                    <Badge className='font-bold'>Full-stack web developer</Badge>
                                </div>

                            </div>
                            <p>
                                I am passionate about building scalable, modern, and user-friendly web applications. With hands-on experience in full-stack development, I create projects that solve real-world problems while focusing on performance, clean code, and best practices.
                            </p>
                            <p>
                                Alongside development, I enjoy sharing knowledge and helping others grow through tutorials, project builds, and practical guidance. My goal is to empower aspiring developers and make quality education accessible, while continuously learning and evolving in the ever-changing world of web development.
                            </p>
                            <Button>Learn more about me →</Button>
                        </div>

                        <div className='flex flex-col justify-center w-[30%] gap-3'>
                            <Button variant={"outline"} size={"lg"}>
                                <Linkedin className='h-5! w-5!' />
                                <span> LinkedIn</span>
                            </Button>
                            <Button variant={"outline"} size={"lg"}>
                                <Github className='h-5! w-5!' />
                                <span> Github</span>
                            </Button>
                            <Button variant={"outline"} size={"lg"}>
                                <Instagram className='h-5! w-5!' />
                                <span> Instagram</span>
                            </Button>
                            <Button variant={"outline"} size={"lg"}>
                                <Twitter className='h-5! w-5!' />
                                <span> Twitter</span>
                            </Button>
                            <Button variant={"outline"} size={"lg"}>
                                <Facebook className='h-5! w-5!' />
                                <span> Facebook</span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}

export default AboutMe



