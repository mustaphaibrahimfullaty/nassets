import type { ElementType } from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AdminStatCardProps {
  title: string
  value: string
  description: string
  trend: string
  icon: ElementType
}

export function AdminStatCard({ title, value, description, trend, icon: Icon }: AdminStatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between gap-4 pb-3">
        <div className="flex flex-col gap-1">
          <CardDescription>{title}</CardDescription>
          <CardTitle className="text-3xl">{value}</CardTitle>
        </div>
        <div className="rounded-2xl bg-primary/10 p-3 text-primary">
          <Icon aria-hidden="true" />
        </div>
      </CardHeader>
      <CardContent className="flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">{description}</p>
        <Badge variant="secondary">{trend}</Badge>
      </CardContent>
    </Card>
  )
}
