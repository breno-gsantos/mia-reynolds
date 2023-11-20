'use client'

import {AudioPlayer} from 'react-audio-play';
import {motion} from 'framer-motion';
import { fadeIn } from '@/variants/variants';
import Image from 'next/image';

export default function Player(){
    return (
        <>
            <motion.div variants={fadeIn('up', 0.1)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.1}} className='bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-[15px] h-[112px] flex items-center relative z-40'>
                <div className='container mx-auto flex flex-col justify-between items-center xl:flex-row'>
                    <div className='hidden w-[300px] xl:flex items-center gap-x-4'>
                        <div className='relative w-16 h-16'>
                          <Image src='/images/player/avatar.png' alt='avatar' fill priority />  
                        </div>
                        <div className='leading-none text-white'>
                            <div className='text-lg font-medium'>Mia Reynolds</div>
                            <div className='text-sm font-light'>Freedom</div> 
                        </div>
                    </div>
                    <div className='w-full max-w-4xl'>
                        <AudioPlayer src='/images/freedom.mp3' loop preload='none' color='#fff' volume={40} volumePlacement='top' style={{background: 'transparent', boxShadow: 'none', width: '100%'}}    />
                    </div>
                </div>
            </motion.div>
        </>
    )
}