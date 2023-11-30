import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { links } from "./Navbar"
import { Link } from "react-scroll"

export default function MobileNav() {
  return (
    <div className="lg:hidden mb-5">
    <Sheet>
      <SheetTrigger asChild>
        <Button><Menu/></Button>
      </SheetTrigger>
      <SheetContent>
        {links.map((link) => (
            <Link to={link.path} className={`flex text-xl font-semibold flex-col text-center mt-32 cursor-pointer`} key={link.label} smooth spy offset={-50} activeClass='active'>
                {link.label}
            </Link>
        ))}
      </SheetContent>
    </Sheet>
    </div>
  )
}
