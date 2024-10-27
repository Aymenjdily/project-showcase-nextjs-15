import Image from "next/image";
import Link from "next/link";

import { IconKeyFilled, IconLogout, IconPlus } from "@tabler/icons-react";

import { auth, signIn, signOut } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import { ThemeSwitch } from "./theme-switch";

const GlobalNavbar = async () => {
  const session = await auth();

  return (
    <header className="font-work-sans border-b px-5 py-3 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="logo" width={50} height={50} />
          <span className="text-sm font-bold">Project Showcase</span>
        </Link>

        <div className="flex items-center gap-5">
          {session && session.user ? (
            <>
              <Link href="/project/create">
                <Button variant={"link"}>
                  <IconPlus /> Create
                </Button>
              </Link>
              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <Button type="submit" variant={"destructive"} size={"lg"}>
                  <IconLogout /> Log Out
                </Button>
              </form>
              <Link href={`/profile/${session.user.id}`}>
                <Avatar>
                  <AvatarImage src={session.user.image!} />
                  <AvatarFallback>
                    {session.user.name?.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("google");
              }}
            >
              <Button type="submit" variant={"primary"} size={"lg"}>
                <IconKeyFilled /> Log In
              </Button>
            </form>
          )}
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
};

export default GlobalNavbar;
