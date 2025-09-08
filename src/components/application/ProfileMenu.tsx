"use client"
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '../ui/button'

const ProfileMenu = () => {

    const [user, setUser] = useState(null)
    return (
        <div>
            {
                user ?
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    :
                    <Button className='' variant={"ghost"} size={"sm"}>Sign In</Button>

            }

        </div>
    )
}

export default ProfileMenu
