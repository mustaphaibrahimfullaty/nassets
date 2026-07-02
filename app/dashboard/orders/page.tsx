import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const orders = [
  {
    id: "ORD-2931",
    date: "2026-06-28",
    product: "Nassets Quantum",
    status: "Processing",
    total: "₦15,000",
  },
  {
    id: "ORD-2920",
    date: "2026-06-15",
    product: "Nassets Explorer",
    status: "Processing",
    total: "₦12,500",
  },
  {
    id: "ORD-2810",
    date: "2026-05-02",
    product: "Nassets Genesis",
    status: "Delivered",
    total: "₦18,000",
  },
]

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
        <p className="text-muted-foreground mt-1">
          Manage and track your recent orders.
        </p>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>
                  <Badge
                    variant={order.status === "Delivered" ? "default" : "secondary"}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{order.total}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
