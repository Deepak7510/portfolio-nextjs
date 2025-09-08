
import { Button } from '@/components/ui/button'
import React from 'react'
import HeroSection from '@/components/application/HeroSection'
import CompilerSection from '@/components/application/CompilerSection'
import FeaturesProjectSection from '@/components/application/FeaturesProjectSection'
import FeaturesProjects from '@/components/application/FeaturesProjects'
import AboutMe from '@/components/application/AboutMe'
const HomePage = () => {


    return (
        <>
            {/* hero section  */}
            <section className='w-full px-2 md:px-20 py-16 relative'>
                <Button variant={"secondary"} className='dark:border-slate-700 animate-bounce rounded-full absolute top-4 right-4'>Download CV</Button>
                <HeroSection />
            </section>

            <section className='w-full px-2 md:px-20 mb-15 mt-10 relative'>
                <CompilerSection />
            </section>
            <section className='w-full px-2 md:px-20 my-15 relative'>
                <FeaturesProjectSection>
                    <FeaturesProjects />
                </FeaturesProjectSection>
            </section>

            <section className='w-full px-2 md:px-20 my-15 relative'>
                <AboutMe />
            </section>
        </>
    )
}

export default HomePage
