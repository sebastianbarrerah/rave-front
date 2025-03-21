'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import clsx from "clsx";
import { useTheme } from "next-themes"
import "atropos/css";
import Atropos from "atropos/react";
import { useRouter } from "next/navigation"



export default function Component() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { theme } = useTheme();
  const router = useRouter()

  return (
    <div className="dark min-h-screen dark:bg-background">
      <div className="container grid min-h-screen min-w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto w-[350px] space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Bienvenido de nuevo!</h1>
              <p className="text-base text-muted-foreground ">
                Ingresa tu usuario y contraseña para acceder al panel de administración
              </p>
            </div>
            <Button variant="outline" className="w-full">
              <svg
                className="mr-2 h-4 w-4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Log in with Google
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="dark:bg-background px-2 text-muted-foreground">O continúa con</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="example@example.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Button className="w-full" type="submit" onClick={() => router.push("/dashboard")}>
                Entrar
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <Link className="text-sm underline" href="#">
                Don&apos;t have account? Sign up
              </Link>
              <Link className="text-sm underline" href="#">
                Forgot your password?
              </Link>
            </div>
          </div>
        </div>
        <div  className={clsx(
        "hidden md:block",
        {
          "dark:bg-muted": theme === "dark",
          "bg-red-600": theme !== "dark",
        }
      
        )}>

          <div className="flex h-full flex-col items-center justify-center space-y-4 p-8">

            <h2 className="text-2xl font-bold text-center ">
              <p className={clsx(
                "text-2xl mb-7",
                {
                  "dark:text-red-600": theme === "dark",
                  "text-white": theme !== "dark",
                }
              )}>Administra concompromiso con Rave y de la mano de Dios, tu mejor experiencia contable</p>
            </h2>

            <div className="relative mt-4 aspect-square  max-w-md">
              <Atropos
              rotateXMax={15}
              rotateYMax={15}
              shadowScale={1.05}
              activeOffset={30}
              highlight={true}
              >
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGi62gMLTv1-VICPYMpqIuTxvUdLFjvp8Sw&s"
                alt="Wheel Widget Preview"
                width={400}
                height={400}
                className="rounded-lg object-fit"
              />

              </Atropos>
            </div>
            <p className="text-base text-muted-foreground text-white">Tu mejor experiencia contable</p>
          </div>
        </div>
      </div>
    </div>
  )
}