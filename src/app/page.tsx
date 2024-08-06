"use client"

import { Chat } from "@/components/chat/Chat";
import { Container } from "@/components/container/Container";
import { ThemeSwitch } from "@/components/themeswitch/ThemeSwitch";
import { ChatProvider } from "@/contexts/ChatContext";
import { ThemeProvider } from "@/contexts/ThemeContext"
import { UserProvider } from "@/contexts/UserContext";

const Page = () => {
  return (
    <ThemeProvider>
      <ThemeSwitch />
      <Container>
        <header>
          <h1 className="text-4xl font-bold my-6 text-center">Talk To Yourself</h1>
        </header>
        <section>
          <div className="mx-auto max-w-lg">
            <UserProvider>
              <ChatProvider>
                <Chat />
              </ChatProvider>
            </UserProvider>
          </div>
        </section>
      </Container>
    </ThemeProvider>
  )
}

export default Page;