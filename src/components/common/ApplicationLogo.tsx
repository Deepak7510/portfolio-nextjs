import { Code } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ApplicationLogo = () => {
    return (
        <div>
            <Link href={'/'} className='text-xl md:text-2xl font-bold flex items-center gap-2'>
                <Code className='h-6 w-6 md:h-7 md:w-7' />
                <span>DevNexa</span>
            </Link>
        </div>
    )
}

export default ApplicationLogo
