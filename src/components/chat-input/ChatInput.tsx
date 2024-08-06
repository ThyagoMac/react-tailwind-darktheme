import { useChat } from "@/contexts/ChatContext";
import { KeyboardEvent, useState } from "react"
import { Button } from "../button/Button";

type Props = {
  name: string,
}

export const ChatInput = ({ name }: Props) => {
  const chatCtx = useChat();
  const [textInput, setTextInput] = useState('');

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if(
      event.code.toLowerCase() === 'enter'
      || event.code.toLowerCase() === 'numpadenter'
    ) {
      saveMessage();
    }
  }

  const saveMessage = () => {
    if(textInput.trim() !== '') {
      chatCtx?.dispatch({type: "add", payload: { user: name, text: textInput }});
      setTextInput('');
    }
  }

  return (
    <>
      <input
        type="text"
        className="outline-none rounded-md flex-1 px-4 bg-white/10 py-2"
        placeholder={`${name}, type your message and press enter`}
        value={textInput}
        onChange={e => setTextInput(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <Button label="Send" onClick={saveMessage} />
    </>
  )
}