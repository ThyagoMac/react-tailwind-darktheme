import { useChat } from "@/contexts/ChatContext";
import { useUser } from "@/contexts/UserContext";

export const ChatMessages = () => {
  const chatCtx = useChat();
  const userCtx = useUser();

  return (
    <div className="flex flex-col gap-2">
      {chatCtx?.chat.map(item => (
        <div key={item.id} className={`
          rounded-full px-8 py-2 border border-gray-400 dark:border-gray-50/30
          ${item.user === userCtx?.user ?
            'self-end bg-white/60 dark:bg-white/5' :
            'self-start bg-white/95 dark:bg-white/10'
          }
        `}>
          <div className="font-bold">
            {item.user}:
          </div>
          <p className="">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  )
}