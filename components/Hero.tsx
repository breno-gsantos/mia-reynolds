'use client'

import {MouseParallaxContainer, MouseParallaxChild} from 'react-parallax-mouse';
import {motion} from 'framer-motion';
import { fadeIn } from '@/variants/variants';
import Image from 'next/image';
import {TypeAnimation} from 'react-type-animation';
import { Button } from './ui/button';

const locationSequence = [
    'Los Angeles, USA',
    3000,
    'Rio de Janeiro, Brazil',
    3000,
    'Paris, France',
    3000,
    'Berlim, Germany',
    3000,
    'Athens, Greece',
    3000
]

export default function Hero() {
    return (
        <section className='h-[80vh] xl:h-[850px]' id='home'>
            <div className='container mx-auto h-full flex justify-center items-center xl:justify-start '>
                <div className='h-full flex flex-col justify-center xl:items-start z-20 pt-12'>
                    <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.2} resetOnLeave className='relative flex items-center h-[120px] xl:h-max xl:w-[840px]'>
                        <MouseParallaxChild factorX={0.2} factorY={0.4} className='relative'>
                            <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.3}} className='w-[300px] h-[101.37px] xl:w-[725px] xl:h-[244.97px]'>
                                <Image src='/images/hero/typo-1.svg' fill alt='typo' className='object-contain' />
                            </motion.div>
                        </MouseParallaxChild>
                        <MouseParallaxChild factorX={0.9} factorY={0.9} className='absolute xl:left-6 z-30'>
                            <motion.div variants={fadeIn('up', 0.7)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.3}} className='w-[300px] h-[101.37px] xl:w-[625px] xl:h-[244.97px]'>
                                <Image src='/images/hero/typo-2.svg' fill alt='typo' className='object-contain' />
                            </motion.div>
                        </MouseParallaxChild>
                        <MouseParallaxChild factorX={0.3} factorY={0.6} className='hidden xl:flex absolute right-0 z-20 opacity-80'>
                            <motion.div variants={fadeIn('left', 1.4)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.3}} className='w-[150px] h-[100px] xl:w-[248px] xl:h-[200px] mix-blend-luminosity'>
                                <Image src='/images/hero/bird.png' fill alt='typo' className='object-contain' />
                            </motion.div>
                        </MouseParallaxChild>
                    </MouseParallaxContainer>
                    <motion.div variants={fadeIn('up', 1)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.7}} className='min-h-[60px] flex items-center mb-6 text-[26px]'>
                        <div className='hidden xl:flex items-center xl:gap-x-0'>
                            <div>World</div>
                            <div className='relative w-2 h-2 mx-2 flex items-center justify-center'>
                                <Image fill src='/images/hero/dot.svg' alt='Dot svg'/>
                            </div>
                            <div>Tour</div>
                            <div className='relative w-2 h-2 mx-2 flex items-center justify-center'>
                                <Image fill src='/images/hero/dot.svg' alt='Dot svg'/>
                            </div>
                            <div>2024</div>
                        </div>
                        <div className='hidden xl:flex items-center justify-center relative w-7 h-7 mx-4'>
                            <Image src='/images/hero/mic.svg' alt='Mic' width={30} height={30} />
                        </div>
                        <TypeAnimation sequence={locationSequence} wrapper='div' speed={10} deletionSpeed={10} repeat={Infinity} cursor={false} />
                    </motion.div>

                    <motion.div variants={fadeIn('up', 1.3)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.7}}>
                        <Button size='lg' className='btn-accent rounded-full'>Get Tickets</Button>
                    </motion.div>
                </div>
                <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.7}} className='hidden xl:flex absolute right-0 top-0 before:w-[784px] before:h-[893px] before:absolute before:right-0 before:top-0 before:bg-singerOverlay before:z-10'>
                    <Image src='/images/hero/singer.png' alt='Singer' width={617} height={893} quality={100} priority />
                </motion.div>
            </div>
        </section>
    )
}