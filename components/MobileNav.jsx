"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';
import { motion } from "framer-motion";
import { useState } from "react";

const links = [
    { name: 'home', path: '/' },
    { name: 'services', path: '/services' },
    { name: 'resume', path: '/resume' },
    { name: 'work', path: '/work' },
    { name: 'contact', path: '/contact' },
];

const MobileNav = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <button 
                    className="flex justify-center items-center p-2 hover:bg-accent/10 rounded-full transition-colors"
                    aria-label="Open Menu"
                >
                    <CiMenuFries className="text-[32px] text-accent" />
                </button>
            </SheetTrigger>
            <SheetContent className="flex flex-col bg-primary border-l border-accent/20">
                {/* logo */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-32 mb-40 text-center"
                >
                    <Link href="/" className="inline-block">
                        <h1 className="text-4xl font-semibold hover:text-accent transition-colors">
                            Akshat<span className="text-accent"> .</span>
                        </h1>
                    </Link>
                </motion.div>

                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8" aria-label="Mobile Navigation">
                    {links.map((link, index) => {
                        const isActive = link.path === pathname;
                        
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: index * 0.1 }}
                            >
                                <Link 
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`relative text-xl capitalize transition-all
                                        hover:text-accent focus-visible:outline-none focus-visible:ring-2 
                                        focus-visible:ring-accent rounded-md px-2 py-1
                                        ${isActive ? 'text-accent' : 'text-white/80'}
                                    `}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.span 
                                            layoutId="underline"
                                            className="absolute left-0 -bottom-1 w-full h-[2px] bg-accent"
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;