import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs"
import { dark } from "@clerk/themes";
import Image from "next/image"
import Link from "next/link"

function TopBar(){
    return (
         <nav className="topbar">
              <Link href='' className='flex items-center gap-4'>
                  <Image src='/logo.png' alt='logo' width={40} height={30} />
                  <p className='text-heading3-bold text-light-1 max-xs:hidden'>Evan-Forum</p>
              </Link>

              <div className='flex items-center gap-1'>
                    <div className='block md:hidden'>
                        <SignedIn>
                            <SignOutButton redirectUrl="/sign-in">
                                <div className='flex cursor-pointer'>
                                    <Image
                                    src='/assets/logout.svg'
                                    alt='logout'
                                    width={24}
                                    height={24}
                                    title="logout"
                                    />
                                </div>
                            </SignOutButton>
                        </SignedIn>
                    </div>

                    <OrganizationSwitcher
                    appearance={{
                        baseTheme: dark,
                        elements: {
                        organizationSwitcherTrigger: "py-2 px-4",
                        },
                    }}
                    />
              </div>
         </nav>
    )
}

export default TopBar