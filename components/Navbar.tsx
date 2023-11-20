import {Link} from 'react-scroll';

interface NavbarProps{
    containerStyles: string;
    linkStyles: string;
}

const links = [
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
        path: 'contact',
        label: 'Contact'
    },
]

export default function Navbar({containerStyles, linkStyles}: NavbarProps) {
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link) => (
                <Link to={link.path} className={`${linkStyles} cursor-pointer border-b-2 border-transparent`} key={link.label} smooth spy offset={-50} activeClass='active'>
                    {link.label}
                </Link>
            ))}
        </nav>
    )
}