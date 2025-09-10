"use client"
import React from 'react'
import ApplicationLogo from '../common/ApplicationLogo'
import Navbar from './Navbar'
import ProfileMenu from './ProfileMenu'
import HandleSearchBar from './HandleSearchBar'
import { ModeToggle } from '../common/ModeToggle'
import useWindowSize from '@/hook/useWindowSize'

const Header = () => {
    const size = useWindowSize();

    console.log(size)
    return (
        <header className='w-full border-b bg-background fixed top-0 left-0 z-50'>
            <div className='max-w-[1600px] h-18 mx-auto flex items-center justify-between px-5 relative'>
                <div className='flex gap-14 items-center'>
                    <ApplicationLogo />
                    <Navbar />
                </div>
                <div className='flex gap-2 items-center'>
                    <HandleSearchBar />
                    <ModeToggle />
                    <ProfileMenu />
                </div>
            </div>
        </header>
    )
}

export default Header
