"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SignIn() {
  const { data: session, status } = useSession();

  if (status === "loading")
    return <div className="text-sm font-medium">Cargando...</div>;

  if (session) {
    return (
      <>
        {session.user?.email} <br />
        <Link
          href=""
          className={buttonVariants({
            variant: "destructive",
            size: "sm",
          })}
          onClick={() => signOut()}
        >
          Desconectar
        </Link>
      </>
    );
  }
  return (
    <>
      <Link
        href=""
        className={buttonVariants({
          size: "sm",
        })}
        onClick={() => signIn()}
      >
        Iniciar <ArrowRight className="ml-1.5 h-5 w-5" />
      </Link>
    </>
  );
}
