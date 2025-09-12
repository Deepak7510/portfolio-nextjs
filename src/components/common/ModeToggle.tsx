"use client"
import * as React from "react"
import { Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    function handleTheme() {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <Button onClick={handleTheme} variant="ghost" size="icon">
            <Sun className="h-[1.2raem] w-[1.2rem]" />
            <span className="sr-only">Toggle theme</span>
        </Button >
    )
}
