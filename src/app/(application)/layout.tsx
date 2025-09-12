import Footer from '@/components/application/Footer'
import Header from '@/components/application/Header'
import React from 'react'

type ApplicationLayoutProps = {
    children: React.ReactNode
}

const ApplicationLayout = ({ children }: ApplicationLayoutProps) => {
    return (
        <div >
            <Header />
            <main className='max-w-[1600px] mx-auto pt-18'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default ApplicationLayout
