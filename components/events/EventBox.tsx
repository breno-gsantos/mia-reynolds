'use client'

import Image from "next/image";
import {RiMapPin2Fill} from 'react-icons/ri';
import { Button } from "../ui/button";
import {motion} from 'framer-motion';
import { fadeIn } from "@/variants/variants";

interface Event {
    id: number;
    date: {
        day: string;
        month: string;
    },
    location: {
        city: string;
        country: string;
        address: string;
    },
    priceRange: string;
}

interface EventBoxProps{
    events: Event[]
}

const EventBox: React.FC<EventBoxProps> = ({events}) => {
    return (
        <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.3}} className="bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative">
            <div className="flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4">
                <div className="hidden xl:flex w-[400px]">
                    <Image src='/images/events/singer.png' alt="Singer Image" width={358} height={489} priority quality={100} />
                </div>
                <div className="flex-1 h-[500px] flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-thumb-accent-default scrollbar-track-white/10 xl:pr-6">
                    {events.map((event) => (
                        <div key={event.id} className="flex flex-col xl:flex-row items-center justify-between gap-y-4 xl:gap-y-0 text-center xl:text-left my-4 xl:my-0 border-b border-white/10 pb-10 xl:py-3 last-of-type:border-none first-of-type:pt-0">
                            <div className="flex flex-col xl:flex-row items-center gap-x-4">
                                <div className="flex flex-col justify-center items-center leading-tight w-[80px] mb-4 xl:mb-0">
                                    <div className="text-[44px] font-black text-accent-default">{event.date.day}</div>
                                    <div className="text-[20px] font-extrabold">{event.date.month}</div>
                                </div>
                                <div className="w-64 flex flex-col gap-y-2">
                                    <div className="text-lg leading-none font-bold">{`${event.location.city}, ${event.location.country}`}</div>
                                    <div className="flex items-center gap-x-1 justify-center xl:justify-start">
                                        <div><RiMapPin2Fill className='text-accent-default text-lg' /></div>
                                        <div className="font-light">{event.location.address}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[100px] text-[17px] text-center text-accent-default">{event.priceRange}</div>
                            <Button size='lg' className='btn-accent rounded-full'>Get Tickets</Button>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default EventBox;