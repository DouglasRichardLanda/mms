import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Menubar from "./_components/menubar";
import Bottomline from "./_components/bottomline"
import Cookies from "./_components/cookies"
import Sidebar from "./_components/sidebar"
import {cn} from "@/lib/utils";
import Head from 'next/head';
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mad Mans Spirit',
  description: 'Rock music',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="facebook-domain-verification" content="gzrzv0tsel1uzzf62g8sy463pq1byr" />
      </Head>
      <body className={cn(inter.className, `flex flex-col justify-between overflow-x-hidden`)}>
        <Menubar />
        <Sidebar />
        <div className={`mt-16 mx-5 lg:mx-32 xl:mx-40`}>
          {children}
        </div>
        <Cookies />
        <Bottomline />
        <Toaster />
      </body>
    </html>
  )
}
