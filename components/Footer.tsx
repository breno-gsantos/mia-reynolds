'use client'

import SocialIcons from "./SocialIcons"
import Navbar from "./Navbar"

import {motion} from 'framer-motion';
import { fadeIn } from "@/variants/variants";
import Link from "next/link";
import Image from "next/image";

export default function Footer(){
    return (
        <footer className="bg-accent-default section">
            <motion.div variants={fadeIn('up', 0.2)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.3}} className="container mx-auto flex flex-col xl:flex-row gap-y-8 items-center justify-between">
                <Link href='#'>
                    <h2>miareynolds.contact@gmail.com</h2>
                </Link>
                <Navbar containerStyles="flex flex-col xl:flex-row justify-center items-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold" linkStyles="hover:text-primary/80 transition-all" />
                <SocialIcons containerStyles="flex text-[24px] gap-x-8" iconStyles="hover:text-primary/80 transition-all justify-center" />
                <Link href='#' className="relative lg:hidden my-10">
                    <Image src='/images/header/logo.svg' width={250} height={250} alt="Logo" className="object-contain" />
                </Link>
            </motion.div>
        </footer>
    )
}