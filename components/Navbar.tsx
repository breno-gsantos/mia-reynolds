import {Link} from 'react-scroll';
import {useMediaQuery} from 'react-responsive';

interface NavbarProps{
    containerStyles: string;
    linkStyles: string;
}

export const links = [
    {
        path: 'home',
        label: 'Home'
    },
    {
        path: 'tours',
        label: 'Tours'
    },
    {
        path: 'discography',
        label: 'Discography'
    },
    {
        path: 'blog',
        label: 'Blog'
    },
    {
        path: 'contact',
        label: 'Contact'
    },
]

export default function Navbar({containerStyles, linkStyles}: NavbarProps) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1310px)'
    })

    return (
        <nav className={`${containerStyles}`}>
            {links.map((link) => (
                <Link to={link.path} className={`${linkStyles} cursor-pointer border-b-2 border-transparent`} key={link.label} smooth={!isDesktop ? false : true} spy offset={-50} activeClass='active'>
                    {link.label}
                </Link>
            ))}
        </nav>
    )
}