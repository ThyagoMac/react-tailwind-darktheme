import { useTheme } from "@/contexts/ThemeContext"

export const ThemeSwitch = () => {
  const themeCtx = useTheme()
  const handleThemeSwitch = () => {
    if(themeCtx?.theme === 'dark') {
      themeCtx?.setTheme('light');
      return
    }
    themeCtx?.setTheme('dark');
  }
  return (
    <div className={`
      fixed top-0 right-0 p-3 cursor-pointer font-bold
        ${themeCtx?.theme === 'dark' ?
          'text-white' :
          'text-black'
        }
      `}
      onClick={handleThemeSwitch}
    >
      {themeCtx?.theme === 'dark' && 'Light'}
      {themeCtx?.theme === 'light' && 'Dark'}
    </div>
  )
}