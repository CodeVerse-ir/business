"use client";

import { useState } from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {

    const [darkMode, setDarkMode] = useState(true);

    const handleDarkMode = () => setDarkMode(!darkMode);

    return (
        <>
            {/* Header Desktop */}
            <DesktopHeader darkMode={darkMode} handleDarkMode={handleDarkMode} />

            {/* Header Moble */}
            <MobileHeader darkMode={darkMode} handleDarkMode={handleDarkMode} />
        </>
    )
}
