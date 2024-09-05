import { fetchPosts } from '@/lib/actions/thread.actions'
import { fetchUser } from '@/lib/actions/user.actions'
import ThreadCard from '@/components/cards/ThreadCard'
import {  SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from "next/navigation";

async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {

  const result = await fetchPosts(
    searchParams.page ? +searchParams.page : 1,
    30
  );
  const user = await currentUser()
  if(!user) return null

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  // console.log(result)
  return (
    <>
       {/* <Image src='/logo.png' width={80} height={50} alt='' /> */}
       <h1 className='head-text text-left'>Home</h1>
       <section className='mt-9 flex flex-col gap-10'>
          {result.posts.length === 0 ? (
              <p className='no-result'>No threads found</p>
            ) : (
              <>
                   {
                      result.posts.map((post) => (
                          <ThreadCard
                            key={post._id}
                            id={post._id}
                            currentUserId={user.id}
                            parentId={post.parentId}
                            content={post.text}
                            author={post.author}
                            community={post.community}
                            createdAt={post.createdAt}
                            comments={post.children}
                          />
                  ))}
              </>
            )}
       </section>
    
    </>
  )
}


{/* <SignedIn>
Mount the UserButton component
<UserButton />
</SignedIn>
<SignedOut>
Signed out users get sign in button
<SignInButton />
</SignedOut> */}

export default Home