"use client";

import { useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";
import DarkMode from "./ui/DarkMode";

export default function Header() {

    const [darkMode, setDarkMode] = useState(true);

    const handleDarkMode = () => setDarkMode(!darkMode);

    return (
        <>
            {/* Dark Mode ui */}
            <DarkMode darkMode={darkMode} />

            {/* Header Desktop */}
            <DesktopHeader handleDarkMode={handleDarkMode} />

            {/* Header Moble */}
            <MobileHeader handleDarkMode={handleDarkMode} />
        </>
    )
}
