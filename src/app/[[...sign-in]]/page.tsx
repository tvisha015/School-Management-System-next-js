"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const { isSignedIn, user, isLoaded } = useUser();

  const router = useRouter();
  useEffect(() => {
    const role = user?.publicMetadata.role;
    if(role){
      router.push(`/${role}`)  // Redirect to "/admin" or "/teacher" or "/student" based on role
    }
  }, [user, router])
  
  return (
    <div className="h-screen flex items-center justify-center bg-lamaSky">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-2"
        >
          <h1 className="text-xl font-bold flex items-center gap-2 justify-center">
            <img src="/logo.png" alt="logo" width={24} height={24} />
            Schoolama
          </h1>
          <h2 className="text-gray-400 text-center">Sign in to your account</h2>
          <Clerk.GlobalError className="text-sm text-red-400" />

          <Clerk.Field name={"identifier"} className="flex flex-col gap-2">
            <Clerk.Label className="text-xs text-gray-500">
              Username
            </Clerk.Label>
            <Clerk.Input
              type="text"
              required
              className="p-2 rounded-md ring-1 ring-gray-300"
            />
            <Clerk.FieldError className="text-xs text-red-400" />
          </Clerk.Field>

          <Clerk.Field name={"password"} className="flex flex-col gap-2">
            <Clerk.Label className="text-xs text-gray-500">
              Password
            </Clerk.Label>
            <Clerk.Input
              type="password"
              required
              className="p-2 rounded-md ring-1 ring-gray-300"
            />
            <Clerk.FieldError className="text-xs text-red-400" />
          </Clerk.Field>

          <SignIn.Action
            submit
            className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition text-white my-1 rounded text-sm p-[10px]"
          >
            Sign In
          </SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
}
