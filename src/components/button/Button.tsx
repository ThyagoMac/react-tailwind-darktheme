import { useTheme } from "@/contexts/ThemeContext";

type Props = {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: Props) => {

  return (
    <button
      className={`
        border rounded-md px-4 py-2 bg-blue-600 text-white
      dark:bg-white dark:text-black
      `}
      onClick={onClick}
    >
      {label}
    </button>
  )

}