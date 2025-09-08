import { ServiceType } from '@/app/(application)/services/page'
import React from 'react'
import { Card, CardContent } from '../ui/card'

const ServiceCard = ({ service }: { service: ServiceType }) => {
    return (
        <Card className={`${service.color} hover:-translate-y-1 transition-all duration-700 h-full`}>
            <CardContent className='flex text-center justify-center items-center flex-col gap-5'>
                <div className='mb-3'>{<service.icon className="h-14! w-14!" />}</div>
                <h2 className='font-bold text-3xl'>{service.title}</h2>
                <p className=''>{service.desc}</p>
            </CardContent>
        </Card>
    )
}

export default ServiceCard
