import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css'

import TopBar from "@/components/shared/Topbar";
import LeftSideBar from "@/components/shared/LeftSidebar";
import RightSideBar from "@/components/shared/RightSidebar";
import BottomBar from "@/components/shared/Bottombar";
import { dark } from "@clerk/themes";

const inter  = Inter({ subsets: ['latin'] });


export const metadata:Metadata = {
    title: 'Forum',
    description:'Evan forum advanced app1'
}

function RootLayout({children}:{children:React.ReactNode}){
    return (
        <ClerkProvider 
            appearance={{
                baseTheme: dark,
            }}>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    <TopBar />

                    <main className='flex flex-row'>
                        <LeftSideBar />
                        <section className='main-container'>
                              <div className='w-full max-w-4xl'>{children}</div>
                        </section>
                        {/* @ts-ignore */}
                        <RightSideBar />
                   </main>

                   <BottomBar />

                </body>
            </html>
        </ClerkProvider>
    )
}


export default RootLayout
