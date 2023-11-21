'use client'

import SectionHeader from "./events/SectionHeader";
import {motion} from 'framer-motion';
import { fadeIn } from "@/variants/variants";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import toast, {Toaster} from 'react-hot-toast'

const notify = () => toast.success('Submitted!')

export default function Newsletter() {
    return (
        <section className="bg-newsletter bg-fixed h-[480px] section bg-cover w-full bg-center bg-no-repeat" id="contact">
            <div className="container mx-auto h-full">
                <div className="flex flex-col h-full items-center">
                    <SectionHeader pretitle="Get in touch" title="Sign up to our newsletter" />
                    <motion.div variants={fadeIn('up', 0.4)} initial='hidden' whileInView='show' viewport={{once: false, amount: 0.3}} className="relative flex items-center w-full max-w-xl">
                       <Input type="text" placeholder="Email Address" className="w-full h-[64px] rounded-full bg-primary/60 outline-none" />
                       <Button size='lg' className="absolute right-2 btn-accent hover:bg-accent-hover rounded-full" type="submit" onClick={notify}>Subscribe</Button>
                       <Toaster />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}