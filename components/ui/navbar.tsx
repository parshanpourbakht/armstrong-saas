import { Menu } from "lucide-react";
import { Button } from "./button";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <div className="flex items-center p-4">
            <Button className="md:hidden" size="icon" variant="ghost">
                <Menu/>
            </Button>
            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    );
}

export default Navbar;