"use client"; // Make sure this is a client-side component

import { signIn } from "next-auth/react";

export function SignIn() {
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission
        await signIn("github"); // Trigger GitHub sign-in
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <form
                className="bg-gray-800 p-6 rounded shadow-md"
                onSubmit={handleSubmit} 
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-100">Sign In</h2>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Sign in with GitHub
                </button>
            </form>
        </div>
    );
}
