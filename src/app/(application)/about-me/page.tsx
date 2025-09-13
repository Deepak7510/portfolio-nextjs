"use client"
import React from 'react'
import { motion } from 'motion/react'
import me from '../../../../public/me.png'
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

export const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "C++",
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Zustand",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Shadcn UI",
    "Motion",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "Microservices",
    "JWT Authentication",
    "API Integration",
    "MongoDB",
    "Query Optimization",
    "Database Design",
    "Aggregation Pipeline",
    "Git / GitHub",
    "Postman",
    "Render",
    "Vercel",
    "Cloudinary",
    "Razorpay",
    "VS Code",
];


const AboutMePage = () => {
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
        <div className='w-full my-5 md:my-10 px-2 md:px-20 space-y-6'>
            <motion.div
                custom={0}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
            >
                <div className='flex flex-col md:flex-row items-center justify-center w-full gap-5'>
                    <div className='p-2'>
                        <div className='w-[200px] h-[200px] rounded-full border-4 border-zinc-950 dark:border-gray-700 relative overflow-hidden'>
                            <Image src={me} alt='me' fill className='object-cover' />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center md:items-start gap-4'>
                        <h1 className='font-extrabold text-3xl md:text-4xl'>
                            Deepak Kumar Yadav
                        </h1>
                        <Badge className='font-sem-semfont-semibold rounded-full text-sm px-4'>Full-stack web developer</Badge>
                        <p className='md:text-start text-center font-medium'>
                            Full-stack web developer, educator, and creator of DevNexa. Passionate about building exceptional web experiences and sharing knowledge with the developer community.                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                custom={1}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='w-full space-y-3'>
                <h2 className='font-extrabold text-xl md:text-2xl'>
                    About Me
                </h2>
                <p>
                    I’m a MERN Stack Developer with hands-on experience in building secure, scalable, and user-friendly web applications. I’ve worked on projects ranging from Learning Management Systems and E-Commerce Platforms to Blog Applications, delivering real-world solutions with modern technologies like React, Next.js, Node.js, Express.js, and MongoDB.
                </p>
                <p>
                    As a passionate learner and builder, I enjoy exploring system design, clean architecture, and modern UI/UX practices while continuously improving performance and scalability. I’ve also worked with third-party integrations such as Razorpay for payments and Cloudinary for media management, ensuring smooth digital experiences.
                </p>
                <p>
                    Through my journey, I’ve discovered a strong interest in sharing knowledge and guiding others. I aim to empower aspiring developers by providing practical guidance, project builds, and structured learning resources.
                </p>
            </motion.div>

            <motion.div
                custom={2}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='w-full space-y-3'>
                <h2 className='font-extrabold text-xl md:text-2xl'>
                    Education
                </h2>
                <Card className='w-fit py-2 md:py-6 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/20'>
                    <CardContent className='flex gap-5 px-2 md:px-6'>
                        <div className='flex justify-center items-center gap-3'>
                            <Avatar className='h-15 w-15 border p-1 '>
                                <AvatarImage alt='Univercity-logo' src={"https://erp.mlkcollege.ac.in/logo.png"} />
                            </Avatar>
                            <div>
                                <p className='font-semibold'>M.L.K.P.G College, Balrampur</p>
                                <p className='text-sm md:text-sm'>Bachelor of Computer Applications (B.C.A) in Computer Science</p>
                                <p className='font-semibold text-xs'>Sep 2021 - May 2024 | CGPA: 7.485</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            <motion.div
                custom={3}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='w-full space-y-3'>
                <h2 className='font-extrabold text-xl md:text-2xl'>
                    Technical Skills
                </h2>
                <div className='flex flex-wrap gap-3'>
                    {
                        skills.map((item, index) => {
                            return <Badge key={index} className='rounded'>{item}</Badge>
                        })
                    }
                </div>
            </motion.div>
            <motion.div
                custom={4}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='w-full space-y-3'>
                <h2 className='font-extrabold text-xl md:text-2xl'>
                    Connect With Me
                </h2>
                <div className='flex flex-wrap gap-3'>
                    <Button className='flex-1' variant={"outline"} size={"lg"}>
                        <Linkedin className='h-5! w-5!' />
                        <span> LinkedIn</span>
                    </Button>
                    <Button className='flex-1' variant={"outline"} size={"lg"}>
                        <Github className='h-5! w-5!' />
                        <span> Github</span>
                    </Button>
                    <Button className='flex-1' variant={"outline"} size={"lg"}>
                        <Instagram className='h-5! w-5!' />
                        <span> Instagram</span>
                    </Button>
                    <Button className='flex-1' variant={"outline"} size={"lg"}>
                        <Twitter className='h-5! w-5!' />
                        <span> Twitter</span>
                    </Button>
                    <Button className='flex-1' variant={"outline"} size={"lg"}>
                        <Facebook className='h-5! w-5!' />
                        <span> Facebook</span>
                    </Button>
                </div>
            </motion.div>

            {/* <motion.div
                custom={3}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='w-full space-y-3'>
                <h2 className='font-extrabold text-xl md:text-2xl'>
                    Professional Experience
                </h2>
            </motion.div> */}
        </div >
    )
}





export default AboutMePage



