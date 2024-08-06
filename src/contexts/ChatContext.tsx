import { ChatActions, chatReducer } from '@/reducers/chatReducer';
import { Message } from '@/types/Message';
import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react';

type ChatContextType = {
  chat: Message[];
  dispatch: Dispatch<ChatActions>;
  //addMessage: (user: string, text: string) => void;
}

export const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [chat, dispatch] = useReducer(chatReducer, []);

  return (
    <ChatContext.Provider value={{ chat, dispatch }}>{children}</ChatContext.Provider>
  );
}

export const useChat = () => useContext(ChatContext);