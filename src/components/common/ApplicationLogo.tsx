// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ApplicationLogo = () => {
    return (
        <div>
            {/* <div className='h-10 w-40'>
                <Image src={ } fill />
            </div> */}
            <Link href={'/'} className='text-2xl font-bold'>
                DevNexa
            </Link>
        </div>

    )
}

export default ApplicationLogo
