import PostThread from "@/components/forms/PostThread";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const page = async() => {

    const user = await currentUser();
    if (!user) return null;
   // fetch organization list created by user
   console.log(user.id)
   const userInfo = await fetchUser(user.id);
   console.log("on", userInfo)
   if (!userInfo?.onboarded) redirect("/onboarding");
 
   return (
     <>
       <h1 className='head-text'>Create Thread</h1>
 
       <PostThread userId={userInfo._id} />
     </>
   );
 
}

export default page