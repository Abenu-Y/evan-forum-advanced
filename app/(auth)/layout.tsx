import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import '../globals.css'
import { dark } from "@clerk/themes";

const inter  = Inter({ subsets: ['latin'] });


export const metadata:Metadata = {
    title: 'signin',
    description:'Evan forum advanced app'
}

function RootLayout({children}:{children:React.ReactNode}){
    return (
        <ClerkProvider  
            appearance={{
                baseTheme: dark,
            }}>
            <html lang="en">
                <body className={`${inter.className} bg-dark-1`}>
                    <div className="w-full flex justify-center items-center min-h-screen"> 
                      {children}
                    </div>
                </body>
            </html>
        </ClerkProvider>
    )
}


export default RootLayout
