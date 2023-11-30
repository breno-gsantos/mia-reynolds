'use client'

import useSWR from 'swr';
import { AudioPlayer } from 'react-audio-play';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, FreeMode, Navigation, Thumbs} from 'swiper/modules';

import axios from 'axios';
import Image from 'next/image';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { useState } from 'react';

interface Track{
    name: string;
    src: string;
}

interface Album{
    id: number;
    img: string;
    name: string;
    tracks: Track[];
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export default function AlbumSlider(){
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    const {data, error} = useSWR('http://localhost:4000/albums', fetcher);

    if(error) {
        return 'Failed to fetch data'
    };
    
    if(!data) {
        return <LoadingSpinner />
    }

    return (
        <>
            <Swiper effect={'coverflow'} speed={1000} spaceBetween={80}  thumbs={{swiper: thumbsSwiper && !thumbsSwiper ? thumbsSwiper : null}} coverflowEffect={{rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true}} className='album-slider'>
                {data.map((album: Album) => (
                    <SwiperSlide key={album.id} className='mb-12'>
                        <div className='w-full bg-secondary/80 rounded-[10px] flex flex-col xl:flex-row items-center p-6 xl:p-12 gap-x-12'>
                            <div className='hidden xl:flex w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] relative cursor-pointer rounded-[10px] overflow-hidden'>
                                <Image src={album.img} fill priority alt='Album Image' className='object-contain' />
                            </div>
                            <div className='flex flex-1 w-full h-[500px]'>
                                <div className='flex-1 flex flex-col xl:px-12'>
                                    {album.tracks?.map((track: Track, index) => (
                                        <div key={index} className='flex flex-1 w-full h-[500px]'>
                                            <div className='flex flex-1 items-center gap-x-2 capitalize font-semibold xl:font-extrabold'>
                                                <div className='text-accent-default text-sm xl:text-lg'>0{index + 1}.</div>
                                                <div className='text-sm xl:text-base'>{track.name}</div>
                                            </div>
                                            <div>
                                                <AudioPlayer style={{background: 'transparent', boxShadow: 'none', width: '100%'}} src={track.src} loop preload='none' color='#fff' volume={40} volumePlacement='bottom' className='album-player' />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}