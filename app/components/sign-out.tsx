"use client"
import { signOut } from "next-auth/react"
export default function SignOut() {

    return (
        <div className="">
            <button className="" onClick={() => signOut}>Sign Out</button>
        </div>
    )
}