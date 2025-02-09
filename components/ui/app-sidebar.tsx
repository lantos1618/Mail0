"use client";

import {
  Inbox,
  FileText,
  SendHorizontal,
  Trash2,
  Archive,
  Users2,
  Bell,
  ArchiveX,
  MessageSquare,
  ShoppingCart,
  Tag,
  Code,
  ChartLine,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useOpenComposeModal } from "@/hooks/use-open-compose-modal";
import { Gmail, Outlook, Vercel } from "@/components/icons/icons";
import { MailCompose } from "../mail/mail-compose";
import React, { Suspense } from "react";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
  navMain: [
    {
      title: "",
      items: [
        {
          title: "Inbox",
          url: "/mail",
          icon: Inbox,
          badge: 128,
        },
        {
          title: "Drafts",
          url: "/draft",
          icon: FileText,
          badge: 9,
        },
        {
          title: "Sent",
          url: "/mail/under-construction/sent",
          icon: SendHorizontal,
        },
        {
          title: "Junk",
          url: "/mail/under-construction/junk",
          icon: ArchiveX,
          badge: 23,
        },
        {
          title: "Trash",
          url: "/mail/under-construction/trash",
          icon: Trash2,
        },
        {
          title: "Archive",
          url: "/mail/under-construction/archive",
          icon: Archive,
        },
      ],
    },
    {
      title: "Categories",
      items: [
        {
          title: "Social",
          url: "/mail/under-construction/social",
          icon: Users2,
          badge: 972,
        },
        {
          title: "Updates",
          url: "/mail/under-construction/updates",
          icon: Bell,
          badge: 342,
        },
        {
          title: "Forums",
          url: "/mail/under-construction/forums",
          icon: MessageSquare,
          badge: 128,
        },
        {
          title: "Shopping",
          url: "/mail/under-construction/shopping",
          icon: ShoppingCart,
          badge: 8,
        },
        {
          title: "Promotions",
          url: "/mail/under-construction/promotions",
          icon: Tag,
          badge: 21,
        },
      ],
    },
    {
      title: "Advanced",
      items: [
        {
          title: "Analytics",
          url: "/mail/under-construction/analytics",
          icon: ChartLine,
        },
        {
          title: "Developers",
          url: "/mail/under-construction/developers",
          icon: Code,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader className="mt-2 flex items-center justify-between gap-2">
          <NavUser />
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
    </>
  );
}
