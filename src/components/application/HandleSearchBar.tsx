"use client"

import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { XIcon } from 'lucide-react'

const HandleSearchBar = () => {

    const [openSearchBar, setOpenSearchBar] = useState<boolean>(false)

    function handleOpenSearchBar() {
        setOpenSearchBar(pre => !pre)
    }

    useEffect(() => {
        window.addEventListener("keydown", (e: KeyboardEvent) => {
            if (e.ctrlKey === true && e.key === "k") {
                e.preventDefault();
                setOpenSearchBar(true)
            }
        })

        return () => {
            window.addEventListener("keydown", () => { })
        }
    }, [])

    return (
        <div>
            <Button className='text-xs flex items-center gap-8' variant={"outline"} size={"sm"} onClick={handleOpenSearchBar}>
                <span> Search project...</span>
                <div className='flex gap-2 items-center'>
                    <span className='text-xs border px-1 rounded'>Ctrl</span>
                    <span className='text-xs border px-1 rounded'>K</span>
                </div>
            </Button>
            {
                openSearchBar &&
                <div className='absolute left-0 top-[100%] w-full  border-b z-50 bg-background pb-4'>
                    <div className='flex  justify-center gap-2'>
                        <Input className='md:max-w-md' />
                        <Button onClick={handleOpenSearchBar} size={"icon"} variant={"secondary"}><XIcon /></Button>
                    </div>
                </div>
            }
        </div>
    )
}

export default HandleSearchBar
