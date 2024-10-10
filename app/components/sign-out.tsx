
"use client"
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function SignOut() {
    const router = useRouter()
    const handleSignOut = async () => {
        await signOut()
        router.push("./signin")
    }
    return (
        <div className="">
            <button className="" onClick={handleSignOut}>Sign Out</button>
        </div >
    );
}
