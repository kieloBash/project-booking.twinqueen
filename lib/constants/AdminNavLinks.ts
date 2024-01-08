import { Box, LucideLayoutDashboard, MessageCircle, Users } from "lucide-react";

export interface LinkType {
  href: string;
  label: string;
  icon: any;
}

export const AdminNavLinks: LinkType[] = [
  {
    href: "/dashboard",
    label: "dashboard",
    icon: LucideLayoutDashboard,
  },
  {
    href: "/packages",
    label: "packages",
    icon: Box,
  },
  {
    href: "/inquiries",
    label: "inquiries",
    icon: MessageCircle,
  },
  {
    href: "/users",
    label: "users",
    icon: Users,
  },
];
