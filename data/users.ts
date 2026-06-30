import { User } from "@/types";

export const users: User[] = [
  {
    id: "usr_1",
    name: "Alex Vance",
    email: "alex@example.com",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    role: "buyer",
    joinedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "usr_2",
    name: "Sarah Chen",
    email: "sarah@example.com",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    role: "buyer",
    joinedAt: "2024-02-20T14:30:00Z",
  },
  {
    id: "usr_3",
    name: "Nassets Admin",
    email: "admin@nassets.com",
    avatar: "https://i.pravatar.cc/150?u=nassets_admin",
    role: "admin",
    joinedAt: "2023-11-01T08:00:00Z",
  },
  {
    id: "usr_4",
    name: "David Miller",
    email: "david@example.com",
    avatar: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
    role: "buyer",
    joinedAt: "2024-03-05T09:15:00Z",
  },
];
