"use client";

import "@/app/globals.css";
import { ArrowTurnBackwardIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import DashboardNav from "@/components/layout/dashboardNav";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="hidden lg:flex">
          <TooltipProvider>
            <DashboardNav />
            <main className="ml-[20%] h-screen w-full overscroll-y-auto">{children}</main>
          </TooltipProvider>
        </div>
        <div className="flex h-screen items-center justify-center lg:hidden">
          <div className="flex w-[70%] flex-col justify-center gap-5">
            <h1 className="text-center text-3xl font-bold">Mobile view is not supported</h1>
            <Button
              size="normal"
              className="flex items-center gap-2"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Back to Lumina
              <HugeiconsIcon icon={ArrowTurnBackwardIcon} />
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
