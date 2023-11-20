import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export default function MobileNav(){
    return (
        <nav className="lg:hidden bg-red-500">
            <Sheet>
                <SheetTrigger>Open</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                        <SheetDescription>qualquer coisa</SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    )
}
  