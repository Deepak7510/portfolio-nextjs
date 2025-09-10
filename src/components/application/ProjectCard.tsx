import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import project1 from '../../../public/project1.png'
import { Button } from '../ui/button'
import { GithubIcon, Globe, } from 'lucide-react'
import { Badge } from '../ui/badge'

const ProjectCard = () => {
    return (
        <Card className='border-slate-200 bg-slate-50 dark:bg-slate-900/20 dark:border-slate-700  py-2 hover:-translate-y-1 transition-all duration-700'>
            <CardContent className='px-2'>
                <div className='h-60 rounded-t-md overflow-hidden'>
                    <Image src={project1} alt='project image' className='object-cover h-full' />
                </div>
                <div className='mt-2 space-y-1'>
                    <h2 className='font-bold text-base'>Recap AI</h2>
                    <p className='text-sm font-medium'>Mar 2025 - Apr 2025</p>
                    <p className='text-sm'>Recap AI is an AI-powered meeting assistant that records, transcribes, and summarizes meetings, helping teams stay organized and never miss key points. Designed for Zoom, Google Meet, Microsoft Teams, and more.</p>
                    <div className='flex flex-wrap gap-2'>
                        <Badge className='text-xs px-4' variant={"outline"}>
                            Next.js
                        </Badge>
                        <Badge className='text-xs px-4' variant={"outline"}>
                            Next.js
                        </Badge>
                        <Badge className='text-xs px-4' variant={"outline"}>
                            Next.js
                        </Badge>
                        <Badge className='text-xs px-4' variant={"outline"}>
                            Next.js
                        </Badge>
                    </div>
                    <div className='flex gap-4 mt-2'>
                        <Button size={"sm"}>
                            <Globe />
                            <span>Website</span>
                        </Button>
                        <Button size={"sm"}>
                            <GithubIcon />
                            <span>Source</span>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ProjectCard
