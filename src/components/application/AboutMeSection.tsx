"use client"
import React from 'react'
import { motion } from 'motion/react'
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Avatar } from '../ui/avatar';
import me from '../../../public/me.png'
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import { APPLICATION_ROUTES } from '@/lib/client/routesConfig';

const AboutMeSection = () => {
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
        <div className='flex flex-col justify-center items-center gap-2 md:gap-5'>
            <motion.h2
                custom={0}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='font-bold text-2xl md:text-3xl text-center xl:text-4xl'>
                About Me
            </motion.h2>
            <motion.p
                custom={1}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='text-base md:text-xl text-center'
            >
                Get to know the person behind DevNexa
            </motion.p>
            <motion.div
                custom={2}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='w-full'>
                <Card className='border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/20'>
                    <CardContent className='md:flex justify-between w-full'>
                        <div className='md:p-5 md:w-[60%] space-y-3 md:space-y-4'>
                            <div className='flex gap-4 items-center'>
                                <Avatar className='h-16 w-16 md:h-20 md:w-20 border-3 shadow-lg border-black dark:border-white'>
                                    <Image src={me} alt='me' fill className='object-cover' />
                                </Avatar>
                                <div className='space-y-1'>
                                    <h1 className='font-bold text-xl md:text-3xl'>
                                        Deepak Kumar Yadav
                                    </h1>
                                    <Badge className='font-semibold rounded-full text-xs'>Full-stack web developer</Badge>
                                </div>
                            </div>
                            <p>
                                I’m a MERN Stack Developer with hands-on experience in building secure, scalable, and user-friendly web applications. I’ve worked on projects ranging from Learning Management Systems and E-Commerce Platforms to Blog Applications, delivering real-world solutions with modern technologies like React, Next.js, Node.js, Express.js, and MongoDB.
                            </p>
                            <p>
                                As a passionate learner and builder, I enjoy exploring system design, clean architecture, and modern UI/UX practices while continuously improving performance and scalability. I’ve also worked with third-party integrations such as Razorpay for payments and Cloudinary for media management, ensuring smooth digital experiences.
                            </p>
                            <p>
                                Through my journey, I’ve discovered a strong interest in sharing knowledge and guiding others. I aim to empower aspiring developers by providing practical guidance, project builds, and structured learning resources.
                            </p>
                            <Button asChild>
                                <Link href={APPLICATION_ROUTES.about}>
                                    Learn more about me →
                                </Link>
                            </Button>
                        </div>

                        <Separator className='md:hidden my-4' />

                        <div className='flex flex-col justify-center md:w-[40%] gap-3 md:gap-6 md:p-5'>
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
        </div >
    )
}

export default AboutMeSection



