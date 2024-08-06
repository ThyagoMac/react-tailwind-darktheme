"use client"
import { useTheme } from "@/contexts/ThemeContext"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const Container = ({ children }: Props) => {

  return (
    <div className={
      `w-full h-screen bg-gray-100 text-black dark:bg-black dark:text-white
    `}>
      <div className="container mx-auto p-4 md:p-0">
        {children}
      </div>
    </div>
  )
}