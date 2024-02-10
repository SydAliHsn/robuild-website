'use client';

import Avatar from "react-avatar";

import { UserAuth } from "../../app/context/AuthContext";
import { useEffect, useState, useRef, FormEventHandler, MouseEventHandler, ReactEventHandler, EventHandler } from "react";
import { toast } from "react-toastify";

const ThemeToggler = ({ className }: { className?: string }) => {
    const profileRef = useRef(null);

    const [profileMenu, setProfileMenu] = useState(false);
    const { user, logOut } = UserAuth();

    const handleLogOut = () => {
        logOut();
        toast.info("User logged out.");
    };

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {

            if (profileRef?.current.contains(e.target)) {
                return setProfileMenu(!profileMenu);
            }

            setProfileMenu(false);
        };

        document.addEventListener('click', handleClick);

        return () => document.removeEventListener('click', handleClick);
    }, []);

    return (
        <div
            className="relative"
            ref={profileRef}
        >
            <button
                className={`w-9 2xs:w-10 sm:w-12 h-9 2xs:h-10 sm:h-12 border-2 focus:border-primary focus:dark:border-secondary rounded-full ${className}`}
            >
                <Avatar className="!w-full !h-full"
                    round={true}
                    textSizeRatio={2.25}
                    // Only using the first two words of the name.s
                    name={user.displayName.split(' ').slice(0, 2).join(' ')}
                    src={user.photoURL}
                />
            </button>

            <div className={`absolute right-0 rounded-md bg-gray-50 border border-gray-400 dark:border-body-color transition-all duration-300 dark:bg-dark p-2 px-3 lg:p-3
            ${profileMenu ? 'visible opacity-100 top-[110%]' : 'invisible opacity-0 top-[70%]'}`}>
                <p className="text-sm py-1.5 md:py-2 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white flex flex-col">{user.displayName}
                    <span className="text-xs">{user.email}</span>
                </p>

                <button className="text-sm py-1.5 md:py-2 text-dark hover:text-primary dark:text-white/70 dark:hover:text-white" onClick={handleLogOut}>
                    Log Out
                </button>
            </div>
        </div >
    );
};

export default ThemeToggler;
