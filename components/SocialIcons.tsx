import Link from 'next/link';
import {RiYoutubeFill, RiInstagramFill, RiSpotifyFill, RiSoundcloudFill} from 'react-icons/ri'

interface SocialIconsProps{
    containerStyles: string;
    iconStyles: string;
}

const socials = [
    {
        path: '#',
        icon: <RiYoutubeFill />
    },
    {
        path: '#',
        icon: <RiInstagramFill />
    },
    {
        path: '#',
        icon: <RiSpotifyFill />
    },
    {
        path: '#',
        icon: <RiSoundcloudFill />
    },
]

export default function SocialIcons({containerStyles, iconStyles}: SocialIconsProps){
    return (
        <div className={`${containerStyles}`}>
            {socials.map((social) => (
                <Link href={social.path} key={social.path}>
                    <div className={`${iconStyles}`}>
                        {social.icon}
                    </div>
                </Link>
            ))}
        </div>
    )
}