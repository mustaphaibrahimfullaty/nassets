import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { adminOrders } from "@/data/admin"

export default function AdminOrdersPage() {
  return (
    <><AdminPageHeader eyebrow="Operations" title="Orders" description="Track reservations, customer handoffs, delivery stages, and high-value preorder volume." action="Create order" /><Card><CardHeader><CardTitle>Order pipeline</CardTitle><CardDescription>Mock fulfillment queue for demo operations.</CardDescription></CardHeader><CardContent><Table><TableHeader><TableRow><TableHead>Order</TableHead><TableHead>Customer</TableHead><TableHead>Model</TableHead><TableHead>Date</TableHead><TableHead>Status</TableHead><TableHead className="text-right">Total</TableHead></TableRow></TableHeader><TableBody>{adminOrders.map((order) => (<TableRow key={order.id}><TableCell className="font-medium">{order.id}</TableCell><TableCell>{order.customer}</TableCell><TableCell>{order.model}</TableCell><TableCell>{order.date}</TableCell><TableCell><Badge variant="secondary">{order.status}</Badge></TableCell><TableCell className="text-right">₦{order.total.toLocaleString()}</TableCell></TableRow>))}</TableBody></Table></CardContent></Card></>
  )
}
