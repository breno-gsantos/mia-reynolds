'use client'

import {BsArrowRight} from 'react-icons/bs'

import {motion} from "framer-motion";
import { fadeIn } from '@/variants/variants';
import Link from 'next/link';
import { Button } from '../ui/button';

interface Post{
    id: number;
    date: string;
    title: string;
    description: string;
}

export default function PostList({posts}: any) {
    const firstThreePosts = posts.slice(0, 3);

    return (
        <motion.div variants={fadeIn('up', 0.5)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.3}} className='flex flex-col items-center ml-4 lg:ml-auto'>
            <div className='flex flex-col xl:flex-row justify-between gap-12 py-10 xl:pt-16 xl:pb-24 border-white/10'>
                {firstThreePosts.map((post: Post) => {
                    const {id, date, title, description} = post;
                    return (
                    <div className='flex-1' key={id}>
                        <div className='text-accent-default font-bold mb-1'>{date}</div>
                        <h1 className='text-xl font-medium mb-4'>{title}</h1>
                        <p className='text-white/30 mb-6 font-light'>{description}</p>
                        <Link href='#' className='flex items-center gap-x-2 group'>
                            Read More
                            <BsArrowRight className='text-xl group-hover:ml-1 transition-all' />
                        </Link>
                    </div>
                    )
                })}
            </div>
            <Button size='lg' className='btn-accent rounded-full'>View all Posts</Button>
        </motion.div>
    )
}