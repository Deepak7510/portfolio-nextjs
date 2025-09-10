"use client"
import React from 'react'

import { motion } from 'motion/react'
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ReactTyped } from "react-typed";


const CompilerSection = () => {

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
                FruitboxFlex & Quick Compiler
            </motion.h2>
            <motion.div
                custom={1}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='w-full'>
                <Card className='border-slate-100 dark:border-slate-700 py-3 md:py-6'>
                    <CardContent className='flex flex-col md:flex-row justify-between w-full gap-3 px-3 md:px-6'>
                        <Card className='p-5  md:w-1/2 border border-cyan-100 dark:border-cyan-700 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg shadow gap-4 items-start'>
                            <Badge className='font-bold rounded-full text-sm px-5 dark:bg-cyan-600'>Quick Compiler</Badge>
                            <h1 className='font-semibold text-xl md:text-2xl'>Code On-the-Go</h1>
                            <p className='max-w-md'>Push your ideas into action instantly. Whether you’re experimenting with new languages or refining existing code, Quick Compiler streamlines the process — faster, smarter, and developer-friendly.</p>
                            <Button variant={"outline"} className='text-cyan-400 rounded-full'>Let&apos;s Start</Button>
                        </Card>

                        <Card className='p-5 md:w-1/2 h-[500px] gap-1 border border-amber-100 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 rounded-lg shadow space-y-2'>
                            <ReactTyped
                                className='text-amber-500'
                                startWhenVisible
                                contentType="html"
                                strings={[
                                    `
&lt;!DOCTYPE html&gt;<br/>
&lt;html&gt;<br/>
&lt;head&gt;<br/>
  &lt;title&gt;Example&lt;/title&gt;<br/>
  &lt;link rel="stylesheet" href="styles.css"&gt;<br/>
&lt;/head&gt;<br/>
&lt;body&gt;<br/>
&lt;h1&gt;&lt;a href="/"&gt;Header&lt;/a&gt;&lt;/h1&gt;<br/><br/>

&lt;nav&gt;<br/>
  &lt;a href="code/"&gt;Code&lt;/a&gt;<br/>
  &lt;a href="eat/"&gt;Eat&lt;/a&gt;<br/>
  &lt;a href="sleep/"&gt;Sleep&lt;/a&gt;<br/>
  &lt;a href="repeat/"&gt;Repeat&lt;/a&gt;<br/>
&lt;/nav&gt;<br/><br/>

&lt;/body&gt;<br/>
&lt;/html&gt;<br/>
  `                                ]} typeSpeed={2} />
                        </Card>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}

export default CompilerSection
