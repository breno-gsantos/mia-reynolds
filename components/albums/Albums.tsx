'use client'

import AlbumSlider from "./AlbumSlider";
import {motion} from 'framer-motion';
import { fadeIn } from "@/variants/variants";

import SectionHeader from "../events/SectionHeader";

export default function Albums(){
    return (
        <section id="discography">
            <div className="container mx-auto">
                <SectionHeader pretitle="Discography" title="Popular Albums" />
                <div>
                    <AlbumSlider />
                </div>
            </div>
        </section>
    )
}