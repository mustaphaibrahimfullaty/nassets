import Image from "next/image"

import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { motorcycles } from "@/data/motorcycles"

export default function AdminProductsPage() {
  return (
    <>
      <AdminPageHeader eyebrow="Catalog" title="Products" description="Manage the launch catalog, stock readiness, pricing, and merchandising flags." action="Add product" />
      <Card>
        <CardHeader>
          <CardTitle>Motorcycle catalog</CardTitle>
          <CardDescription>{motorcycles.length} electric motorcycle SKUs prepared for the investor demo.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow><TableHead>Model</TableHead><TableHead>Category</TableHead><TableHead>Price</TableHead><TableHead>Inventory</TableHead><TableHead>Merchandising</TableHead></TableRow>
            </TableHeader>
            <TableBody>
              {motorcycles.map((motorcycle) => (
                <TableRow key={motorcycle.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="relative size-12 overflow-hidden rounded-xl bg-muted">
                        <Image src={motorcycle.thumbnail} alt={motorcycle.name} fill className="object-cover" />
                      </div>
                      <div><p className="font-medium">{motorcycle.name}</p><p className="text-sm text-muted-foreground">{motorcycle.brand}</p></div>
                    </div>
                  </TableCell>
                  <TableCell className="capitalize">{motorcycle.category}</TableCell>
                  <TableCell>₦{motorcycle.price.toLocaleString()}</TableCell>
                  <TableCell><Badge variant={motorcycle.inStock ? "secondary" : "outline"}>{motorcycle.inStock ? "In stock" : "Limited"}</Badge></TableCell>
                  <TableCell><div className="flex gap-2">{motorcycle.isFeatured ? <Badge>Featured</Badge> : null}{motorcycle.isNew ? <Badge variant="outline">New</Badge> : null}</div></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}
