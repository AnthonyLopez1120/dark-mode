import { useEffect } from "react"
import { useLocalStorage } from "./useLocalStoarage"

export const useDarkMode = (initialValue)=>{
    const [isDarkMode, setDarkMode] = useLocalStorage(initialValue)

    useEffect(()=>{
        isDarkMode ?
        document.body.classList.add("dark-mode")
        : document.body.classList.remove("dark-mode")
    }, [isDarkMode])

    return [isDarkMode, setDarkMode]
}