"use client"
import React, { useState } from 'react'
import ApplicationLogo from '../common/ApplicationLogo'
import Navbar from './Navbar'
import ProfileMenu from './ProfileMenu'
import HandleSearchBar from './HandleSearchBar'
import { ModeToggle } from '../common/ModeToggle'
import useWindowSize from '@/hook/useWindowSize'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
} from "@/components/ui/sheet"
import { AlignJustify } from 'lucide-react'

const Header = () => {
    const size = useWindowSize();
    const [openSideNavbar, setOpenSideNavbar] = useState<boolean>(false)

    return (
        <header className='w-full border-b bg-background fixed top-0 left-0 z-50'>
            <div className='max-w-[1600px] h-16 md:h-18 mx-auto flex items-center justify-between px-5 relative'>
                <div className='flex gap-14 items-center'>
                    <ApplicationLogo />
                    {
                        size.width > 768 &&
                        <Navbar />
                    }
                </div>
                <div className='flex gap-2 items-center'>
                    <HandleSearchBar />
                    <ModeToggle />
                    {
                        size.width > 768 &&
                        <ProfileMenu />
                    }
                    {
                        size.width < 768 &&
                        <>
                            <Button onClick={() => setOpenSideNavbar(pre => !pre)} variant={"ghost"} size={"icon"}>
                                <AlignJustify className='h-6! w-6!' />
                                <span className='read-only hidden'>AlignJustify</span>
                            </Button>

                            <Sheet open={openSideNavbar} onOpenChange={setOpenSideNavbar}>
                                <SheetContent side="left">
                                    <SheetHeader className='hidden'></SheetHeader>
                                    <div className='ps-1 mt-5'>
                                        <Navbar />
                                    </div>
                                    <SheetFooter>
                                        <ProfileMenu />
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </>


                    }
                </div>
            </div>
        </header>
    )
}

export default Header
