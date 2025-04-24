"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button
          variant="outline"
          className="w-full"
          type="button"
          onClick={() =>
            signIn("github", {
              callbackUrl: "http://localhost:3000/dashboard",
            })
          }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              fill="currentColor"
            />
          </svg>
          Login with GitHub
        </Button>
        <Button
          variant="outline"
          className="w-full cursor-pointer"
          type="button"
          onClick={() =>
            signIn("uaepass", {
              callbackUrl: "http://localhost:3000/dashboard",
            })
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="49px"
            height="49px"
            viewBox="0 0 49 49"
          >
            <defs>
              <path
                id="path-1"
                d="M12,0 L32,0 C38.627417,0 44,5.372583 44,12 L44,32 C44,38.627417 38.627417,44 32,44 L12,44 C5.372583,44 0,38.627417 0,32 L0,12 C0,5.372583 5.372583,0 12,0 Z"
              />
              <filter
                id="filter-2"
                x="-9.1%"
                y="-9.1%"
                width="118.2%"
                height="122.7%"
                filterUnits="objectBoundingBox"
              >
                <feOffset
                  dx="0"
                  dy="2"
                  in="SourceAlpha"
                  result="shadowOffsetOuter1"
                />
                <feGaussianBlur
                  stdDeviation="1"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.12 0"
                  in="shadowBlurOuter1"
                  result="shadowMatrixOuter1"
                />
                <feMerge>
                  <feMergeNode in="shadowMatrixOuter1" />
                </feMerge>
              </filter>
            </defs>
            <g fill="none" fillRule="evenodd">
              <g transform="translate(3, 3)">
                <g>
                  <use
                    fill="black"
                    fillOpacity="1"
                    filter="url(#filter-2)"
                    xlinkHref="#path-1"
                  />
                  <use fill="#000000" xlinkHref="#path-1" />
                </g>
                <g transform="translate(8, 8)">
                  <circle cx="13" cy="13" r="12" fill="#E82227" />
                  <circle cx="13" cy="13" r="6" fill="#FFFFFF" />
                </g>
              </g>
            </g>
          </svg>
          Login with UAEPASS
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
}
