"use client"

import { Button } from "@/components/button/Button";
import { Container } from "@/components/container/Container";
import { ThemeSwitch } from "@/components/themeswitch/ThemeSwitch";
import { ThemeProvider } from "@/contexts/ThemeContext"

const Page = () => {
  const handleClick = () => {
    console.log('click')
  }
  return (
    <ThemeProvider>
      <ThemeSwitch />
      <Container>
        <header>
          <h1 className="text-4xl font-bold">Page Title</h1>
        </header>
        <section>
          <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil beatae assumenda, nam optio maiores neque, aut perspiciatis esse incidunt laborum provident minima. Nihil facilis cum quibusdam aliquam similique quisquam at!</p>
        </section>
        <Button label="Theme" onClick={handleClick} />
      </Container>
    </ThemeProvider>
  )
}

export default Page;