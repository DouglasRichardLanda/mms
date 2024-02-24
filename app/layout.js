import '../styles/globals.css'
import { Inter } from 'next/font/google'
import {NavBar, SideBar, Cookies, Bottomline} from "@/components/index";
import {cn} from "@/lib/utils";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, `flex flex-col justify-between overflow-x-hidden`)}>
        <NavBar />
        <SideBar />
        <div className={`mt-16 mx-5 lg:mx-32 xl:mx-40`}>
          {children}

        </div>
        <Cookies />
        <Bottomline />
      </body>
    </html>
  )
}
