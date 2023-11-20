'use client'

import {motion} from 'framer-motion';
import { fadeIn } from '@/variants/variants';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import MobileNav from './MobileNav';
import Navbar from './Navbar';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import SocialIcons from './SocialIcons';

export default function Header(){
    const [active, setActive] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 100);
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <header className={`fixed z-50 w-full transition-all ${active ? 'bg-[#030315] py-6' : 'bg-transparent py-8'}`}>
            <div className='container mx-auto flex flex-col xl:flex-row justify-between items-center'>
                <Link href='#' className='relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0'>
                    <Image src='/images/header/logo.svg' alt='logo' fill className='object-contain' />
                </Link>
                <Navbar containerStyles='hidden xl:flex items-center gap-x-8' linkStyles='' />
                {/* nav mobile */}
                <MobileNav />
                {/* socials */}
                <SocialIcons containerStyles='flex items-center text-[24px] gap-x-4' iconStyles='hover:text-accent-default transition-all' />
            </div>
        </header>
    )
}