import React from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { APPLICATION_ROUTES } from '@/lib/client/routesConfig'
const Navbar = () => {
    return (
        <nav className='font-medium'>
            <NavigationMenu>
                <NavigationMenuList >
                    <NavigationMenuItem className='px-4 py-1.5' asChild>
                        <NavigationMenuLink asChild>
                            <Link href="/docs">Projects</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem className='px-4 py-1.5' asChild>
                        <NavigationMenuLink asChild>
                            <Link href="/docs">Pricing</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='px-4 py-1.5' asChild>
                        <NavigationMenuLink asChild>
                            <Link href={APPLICATION_ROUTES.services}>Service</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='px-4 py-1.5' asChild>
                        <NavigationMenuLink asChild>
                            <Link href="/docs">Blogs</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='px-4 py-1.5' asChild>
                        <NavigationMenuLink asChild>
                            <Link href={APPLICATION_ROUTES.about}>About</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='px-4 py-1.5' asChild>
                        <NavigationMenuLink asChild>
                            <Link href={APPLICATION_ROUTES.contact}>Contact</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
}

export default Navbar
