
"use client"
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignOut() {
    const router = useRouter()
    const handleSignOut = async () => {
        await signOut()
        router.push("./signin")
    }
    return (
        <div className="">
            <button className="m-1" onClick={handleSignOut}>Sign Out</button>
        </div >
    );
}
