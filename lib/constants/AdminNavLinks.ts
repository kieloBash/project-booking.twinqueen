import { LucideLayoutDashboard, MessageCircle, Users } from "lucide-react";
import Box from "next-auth/providers/box";

export interface LinkType {
  href: string;
  label: string;
  icon: any;
}

export const AdminNavLinks: LinkType[] = [
  {
    href: "/admin/dashboard",
    label: "dashboard",
    icon: LucideLayoutDashboard,
  },
  {
    href: "/admin/packages",
    label: "packages",
    icon: Box,
  },
  {
    href: "/admin/inquiries",
    label: "inquiries",
    icon: MessageCircle,
  },
  {
    href: "/admin/users",
    label: "users",
    icon: Users,
  },
];
