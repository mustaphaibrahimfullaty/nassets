import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { adminUsers } from "@/data/admin"

export default function AdminUsersPage() {
  return (
    <><AdminPageHeader eyebrow="Customers" title="Users" description="Review buyers, demo accounts, roles, and customer value signals." action="Invite user" /><Card><CardHeader><CardTitle>User directory</CardTitle><CardDescription>Buyer and staff identities available in mock data.</CardDescription></CardHeader><CardContent><Table><TableHeader><TableRow><TableHead>User</TableHead><TableHead>Role</TableHead><TableHead>Status</TableHead><TableHead>Orders</TableHead><TableHead className="text-right">Lifetime value</TableHead></TableRow></TableHeader><TableBody>{adminUsers.map((user) => (<TableRow key={user.id}><TableCell><div className="flex items-center gap-3"><Avatar><AvatarImage src={user.avatar} alt={user.name} /><AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback></Avatar><div><p className="font-medium">{user.name}</p><p className="text-sm text-muted-foreground">{user.email}</p></div></div></TableCell><TableCell className="capitalize">{user.role}</TableCell><TableCell><Badge variant="secondary">{user.status}</Badge></TableCell><TableCell>{user.orders}</TableCell><TableCell className="text-right">${user.lifetimeValue.toLocaleString()}</TableCell></TableRow>))}</TableBody></Table></CardContent></Card></>
  )
}
