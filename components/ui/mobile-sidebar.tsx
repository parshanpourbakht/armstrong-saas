
import { Menu } from 'lucide-react';
import React from 'react';
import { Button } from './button';
import { Sheet, SheetContent, SheetTrigger } from './sheet';
import Sidebar from './sidebar';

const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button className="md:hidden" size="icon" variant="ghost">
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className='p-0'>
                <Sidebar/>
            </SheetContent>
           
        </Sheet>
        
    );
};

export default MobileSidebar;


