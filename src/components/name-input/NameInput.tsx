import { useUser } from "@/contexts/UserContext";
import { useState, KeyboardEvent } from "react"
import { Button } from "../button/Button";

export const NameInput = () => {
  const userCtx = useUser();
  const [nameInput, setNameInput] = useState('');

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if(
      event.code.toLowerCase() === 'enter'
      || event.code.toLowerCase() === 'numpadenter'
    ) {
      saveUserName();
    }
  }

  const saveUserName = () => {
    if(nameInput.trim() !== '' && nameInput !== 'bot') {
      userCtx?.setUser(nameInput.trim());
      setNameInput('');
    }
  }

  return (
    <div>
      <p className="text-xl mb-4">Your name:</p>
      <div className="flex gap-3 items-center text-lg">
        <input
          type="text"
          className="outline-none flex-1 border rounded-md px-4 bg-white/10 py-2 border-gray-400 dark:border-gray-50/30"
          value={nameInput}
          onChange={e => setNameInput(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <Button label="Save" onClick={saveUserName} />
      </div>
    </div>
  )
}