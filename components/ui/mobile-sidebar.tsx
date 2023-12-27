"use client";

import { Menu } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from './button';
import { Sheet, SheetContent, SheetTrigger } from './sheet';
import Sidebar from './sidebar';

const MobileSidebar = () => {

    //handles the hydration error
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

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


