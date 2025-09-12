"use client";
import React from 'react'
import { motion } from 'motion/react'
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

type pricingPlanType = {
    id: number;
    title: string;
    price: string;
    duration: string;
    description: string;
    features: string[];
    popular: boolean;
    color: string; // Tailwind ya custom class
};

export const pricingPlans: pricingPlanType[] = [
    {
        id: 1,
        title: "Starter",
        price: "₹4,999",
        duration: "/project",
        description:
            "Perfect for individuals or small businesses starting their online journey.",
        features: [
            "1 Custom Website (up to 5 pages)",
            "Responsive Design (Mobile + Desktop)",
            "Basic SEO Optimization",
            "Contact Form Integration",
            "1 Month Free Support",
        ],
        popular: false,
        color: "border-blue-200 bg-blue-50 dark:border-blue-700 dark:bg-blue-900/20",
    },
    {
        id: 2,
        title: "Professional",
        price: "₹14,999",
        duration: "/project",
        description:
            "Best for growing businesses that need advanced features and scalability.",
        features: [
            "Dynamic Website (up to 15 pages)",
            "Advanced SEO + Analytics",
            "User Authentication & Dashboard",
            "Payment Gateway Integration",
            "3 Months Free Support",
        ],
        popular: true,
        color: "border-purple-200 bg-purple-50 dark:border-purple-700 dark:bg-purple-900/20",
    },
    {
        id: 3,
        title: "Enterprise",
        price: "₹29,999+",
        duration: "/project",
        description:
            "Custom solutions tailored for startups and large-scale businesses.",
        features: [
            "Unlimited Pages & Features",
            "Scalable & Secure Architecture",
            "Custom API Development",
            "Cloud Hosting & Deployment",
            "6 Months Premium Support",
        ],
        popular: false,
        color: "border-green-200 bg-green-50 dark:border-green-700 dark:bg-green-900/20",
    },
];

const PricingSection = () => {

    const textVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: any) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div className='flex flex-col justify-center items-center gap-2 md:gap-5'>
            <motion.h2
                custom={0}
                initial={textVariants.hidden}
                whileInView={textVariants.visible}
                viewport={{ once: true }}
                className='font-bold text-2xl md:text-3xl text-center xl:text-4xl'>
                Flexible Plans for Every Stage of Growth
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 w-full">
                {pricingPlans.map((item, index) => {
                    return (
                        <motion.div
                            key={item.id}
                            custom={1 + index}
                            initial={textVariants.hidden}
                            whileInView={textVariants.visible}
                            viewport={{ once: true }}
                        >
                            <Card
                                className={`h-full ${item.color} flex flex-col border rounded-2xl shadow-md`}
                            >
                                <CardContent className="flex flex-col gap-8 flex-1">
                                    <h1 className="text-3xl font-bold text-center">{item.title}</h1>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm text-center">
                                        {item.description}
                                    </p>
                                    <h2 className="text-2xl font-semibold text-center">{item.price}/onward <span></span></h2>
                                    <div className='flex justify-center'>
                                        <Button size={"lg"} variant="outline">Get Offer</Button>
                                    </div>

                                    <ul className='space-y-4'>
                                        {
                                            item.features.map((item, index) => {
                                                return <li key={index}>{item}</li>
                                            })
                                        }
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>

        </div>
    )
}

export default PricingSection
