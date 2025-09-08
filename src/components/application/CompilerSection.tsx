"use client"
import React from 'react'

import { motion } from 'motion/react'
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

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
        <div className='flex flex-col justify-center items-center gap-5'>
            <motion.h2
                custom={0}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='font-bold text-4xl'>
                FruitboxFlex & Quick Compiler
            </motion.h2>
            <motion.div
                custom={1}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='w-full'>
                <Card className='border-green-100 dark:border-slate-700'>
                    <CardContent className='flex justify-between w-full gap-4'>
                        <Card className='p-5 w-1/2 border border-cyan-100 dark:border-cyan-700 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg shadow space-y-4'>
                            <Badge className='font-bold rounded-full text-sm px-5 dark:bg-cyan-600'>Quick Compiler</Badge>
                            <h1 className='font-semibold text-2xl'>Code On-the-Go</h1>
                            <p className='max-w-md'>Push your ideas into action instantly. Whether you’re experimenting with new languages or refining existing code, Quick Compiler streamlines the process — faster, smarter, and developer-friendly.</p>
                            <Button variant={"outline"} className='text-cyan-400 rounded-full'>Let&apos;s Connect</Button>
                        </Card>

                        <Card className='p-5 w-1/2 gap-1 border border-amber-100 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 rounded-lg shadow space-y-2'>
                            <p className='whitespace-pre-line text-sm'>
                                {`<!DOCTYPE html>
                                <html>
                                <head>
  <title>Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
<h1><a href="/">Header</a></h1>

<nav>
  <a href="code/">Code</a>
  <a href="eat/">Eat</a>
  <a href="sleep/">Sleep</a>
  <a href="repeat/">Repeat</a>
</nav>

</body>
</html>`}
                            </p>
                        </Card>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}

export default CompilerSection
