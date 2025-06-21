import { useState, useEffect } from "react";

const useAccent = () => {
const [colorTheme, setColorTheme] = useState(() => {
        return localStorage.getItem("colorTheme") || "blue"; // blue is default
    });

    useEffect(() => {
        const root = document.documentElement;

        // Remove old theme classes
        root.classList.remove("theme-green", "theme-purple", "theme-blue", "theme-pink", "theme-orange", "theme-cyan");

        // Add the current theme class
        if (colorTheme === "green") {
            root.classList.add("theme-green");
        } else if (colorTheme === "purple") {
            root.classList.add("theme-purple");
        } else if (colorTheme === "pink") {
            root.classList.add("theme-pink");
        } else if (colorTheme === "cyan") {
            root.classList.add("theme-cyan");
        } else if (colorTheme === "orange") {
            root.classList.add("theme-orange");
        } else {
            root.classList.add("theme-blue")
        }

        localStorage.setItem("colorTheme", colorTheme);
    }, [colorTheme]);

    return [colorTheme, setColorTheme];
}


export default useAccent