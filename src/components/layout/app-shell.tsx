// src/components/layout/app-shell.tsx
"use client";

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Briefcase, LayoutDashboard, Users, CalendarDays, ListChecks, Menu as MenuIcon, UserPlus, TrendingUp, Headphones } from 'lucide-react';
import { Toaster } from "@/components/ui/toaster";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, dataAiHint: "dashboard overview" },
  { href: '/customers', label: 'Customers', icon: Users, dataAiHint: "customer list" },
  { href: '/leads', label: 'Leads', icon: UserPlus, dataAiHint: "lead management" },
  { href: '/opportunities', label: 'Opportunities', icon: TrendingUp, dataAiHint: "sales pipeline" },
  { href: '/appointments', label: 'Appointments', icon: CalendarDays, dataAiHint: "schedule calendar" },
  { href: '/cases', label: 'Cases', icon: Headphones, dataAiHint: "support cases" },
  { href: '/todos', label: 'To-Do List', icon: ListChecks, dataAiHint: "task manager" },
];

function SidebarNavigation({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();
  return (
    <>
      <SidebarHeader className="p-4">
        <Link href="/dashboard" className="flex items-center gap-2 group" onClick={onLinkClick}>
          <Briefcase className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
          <h1 className="text-xl font-semibold text-foreground">BizFlow</h1>
        </Link>
      </SidebarHeader>
      <ScrollArea className="flex-1">
        <SidebarContent className="p-2">
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label}>
                <Link href={item.href} legacyBehavior passHref>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))}
                    onClick={onLinkClick}
                    className="w-full justify-start text-sm"
                    tooltip={{content: item.label, side: 'right', className: 'md:hidden group-data-[state=collapsed]:md:block'}}
                    data-ai-hint={item.dataAiHint}
                  >
                    <a>
                      <item.icon className="h-5 w-5 mr-2" />
                      <span className="group-data-[state=expanded]:md:inline hidden">{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </ScrollArea>
    </>
  );
}


export function AppShell({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  
  // The useSidebar hook can only be used within SidebarProvider.
  // For controlling desktop sidebar, we can rely on SidebarTrigger or defaultOpen.
  // For mobile, Sheet is better.

  if (isMobile === undefined) { // Avoid SSR mismatch for isMobile
    return null; // Or a loading skeleton
  }

  return (
    <SidebarProvider defaultOpen={true}> {/* DefaultOpen for desktop expanded */}
      <div className="flex min-h-screen bg-background">
        {isMobile ? (
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetContent side="left" className="w-[280px] p-0 border-r-0">
               <Sidebar className="h-full border-0 data-[collapsible=icon]:hidden"> {/* Force expanded view in sheet */}
                <SidebarNavigation onLinkClick={() => setMobileNavOpen(false)} />
              </Sidebar>
            </SheetContent>
          </Sheet>
        ) : (
          <Sidebar 
            collapsible="icon" 
            className="border-r transition-all duration-300 ease-in-out"
            style={{ '--sidebar-width': '260px', '--sidebar-width-icon': '64px' } as React.CSSProperties}
          >
            <SidebarNavigation />
          </Sidebar>
        )}

        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/90 px-4 backdrop-blur-sm sm:px-6">
            <div className="flex items-center gap-2">
              {isMobile ? (
                 <Button variant="ghost" size="icon" onClick={() => setMobileNavOpen(true)} aria-label="Open menu">
                   <MenuIcon className="h-6 w-6" />
                 </Button>
              ) : (
                 <SidebarTrigger aria-label="Toggle sidebar">
                    <MenuIcon className="h-6 w-6" />
                 </SidebarTrigger>
              )}
               <Link href="/dashboard" className="flex items-center gap-2 sm:hidden ml-2">
                 <Briefcase className="h-7 w-7 text-primary" />
                 <h1 className="text-lg font-semibold">BizFlow</h1>
               </Link>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Placeholder for other actions like search or notifications */}
              <Avatar className="h-9 w-9 cursor-pointer">
                <AvatarImage src="https://placehold.co/100x100/667EEA/FFFFFF.png?text=U" alt="User" data-ai-hint="user avatar" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto p-4 sm:p-6">
            {children}
          </main>
        </div>
      </div>
      <Toaster />
    </SidebarProvider>
  );
}
