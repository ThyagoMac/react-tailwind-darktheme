import { useUser } from "@/contexts/UserContext"
import { NameInput } from "../name-input/NameInput";
import { ChatInput } from "../chat-input/ChatInput";
import { ChatMessages } from "../chat-messages/ChatMessages";

export const Chat = () => {
  const userCtx = useUser();

  if(!userCtx) return null;
  if(!userCtx.user) return <NameInput />;

  return (
    <div className="border border-gray-400/30 rounded-md p-4 dark:border-gray-50/30">
      <div className="h-96 p-3 overflow-y-auto">
        <ChatMessages />
      </div>
      <div className="flex gap-3 py-3 border-t border-t-gray-400/30 dark:border-gray-50/30">
        <ChatInput name={userCtx?.user} />
      </div>
      <div className="flex gap-3 py-3 border-t border-t-gray-400/30 dark:border-gray-50/30">
        <ChatInput name="Bot" />
      </div>
    </div>
  )
}