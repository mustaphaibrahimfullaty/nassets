"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { ActivityIcon, PackageIcon, ShoppingBagIcon, UsersIcon } from "lucide-react"

import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { AdminStatCard } from "@/components/admin/admin-stat-card"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { adminMetrics, adminOrders, moderationQueue, revenueSeries } from "@/data/admin"

const metricIcons = [ActivityIcon, ShoppingBagIcon, PackageIcon, UsersIcon]

const chartConfig = {
  revenue: { label: "Revenue", color: "var(--primary)" },
  orders: { label: "Orders", color: "var(--accent-cyan)" },
} satisfies ChartConfig

export default function AdminAnalyticsPage() {
  return (
    <>
      <AdminPageHeader
        eyebrow="Command center"
        title="Analytics overview"
        description="Monitor marketplace demand, operational health, catalog readiness, and community quality from one investor-ready control surface."
        action="Export snapshot"
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" aria-label="Admin metrics">
        {adminMetrics.map((metric, index) => (
          <AdminStatCard
            key={metric.label}
            title={metric.label}
            value={metric.value}
            description={metric.detail}
            trend={metric.trend}
            icon={metricIcons[index]}
          />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Revenue momentum</CardTitle>
            <CardDescription>Mock monthly GMV and order growth for the investor prototype.</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-80 w-full">
              <AreaChart data={revenueSeries} accessibilityLayer margin={{ left: 12, right: 12 }}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
                <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                <Area dataKey="revenue" type="natural" fill="var(--color-revenue)" fillOpacity={0.18} stroke="var(--color-revenue)" />
                <Area dataKey="orders" type="natural" fill="var(--color-orders)" fillOpacity={0.12} stroke="var(--color-orders)" />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Moderation queue</CardTitle>
            <CardDescription>Content signals that protect marketplace trust.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {moderationQueue.map((item) => (
              <div key={item.id} className="rounded-2xl border bg-background p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium">{item.subject}</p>
                  <Badge variant={item.risk === "medium" ? "secondary" : "outline"}>{item.risk}</Badge>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{item.type} by {item.author}</p>
                <p className="mt-3 text-sm font-medium text-primary">{item.status}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Recent commerce activity</CardTitle>
          <CardDescription>High-value mock orders used across the admin demo.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Model</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {adminOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.model}</TableCell>
                  <TableCell><Badge variant="secondary">{order.status}</Badge></TableCell>
                  <TableCell className="text-right">₦{order.total.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )
}
