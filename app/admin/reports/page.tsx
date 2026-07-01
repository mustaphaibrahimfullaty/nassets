import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const reports = [
  { title: "Investor KPI packet", cadence: "Weekly", status: "Ready", detail: "Revenue, conversion, waitlist, and catalog health." },
  { title: "Marketplace trust report", cadence: "Daily", status: "Live", detail: "Review verification, moderation outcomes, and response SLAs." },
  { title: "Inventory readiness", cadence: "Monthly", status: "Draft", detail: "SKU launch status, stock depth, and preorder risk." },
]

export default function AdminReportsPage() {
  return (
    <><AdminPageHeader eyebrow="Insights" title="Reports" description="Package demo-ready operational narratives for investors, leadership, and future backend teams." action="Schedule report" /><div className="grid gap-4 md:grid-cols-3">{reports.map((report) => (<Card key={report.title}><CardHeader><div className="flex items-center justify-between gap-3"><CardTitle className="text-xl">{report.title}</CardTitle><Badge variant="secondary">{report.status}</Badge></div><CardDescription>{report.cadence}</CardDescription></CardHeader><CardContent><p className="text-sm text-muted-foreground">{report.detail}</p></CardContent></Card>))}</div></>
  )
}
