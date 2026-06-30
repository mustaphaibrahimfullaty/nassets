import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cmsEntries } from "@/data/admin"

export default function AdminCmsPage() {
  return (
    <><AdminPageHeader eyebrow="Content" title="CMS" description="Prepare campaign modules, landing page copy, and educational content without a backend dependency." action="New entry" /><Card><CardHeader><CardTitle>Content workspace</CardTitle><CardDescription>Mock CMS entries demonstrate future editorial workflows.</CardDescription></CardHeader><CardContent><Table><TableHeader><TableRow><TableHead>Entry</TableHead><TableHead>Section</TableHead><TableHead>Status</TableHead><TableHead>Updated</TableHead></TableRow></TableHeader><TableBody>{cmsEntries.map((entry) => (<TableRow key={entry.title}><TableCell className="font-medium">{entry.title}</TableCell><TableCell>{entry.section}</TableCell><TableCell><Badge variant="secondary">{entry.status}</Badge></TableCell><TableCell>{entry.updated}</TableCell></TableRow>))}</TableBody></Table></CardContent></Card></>
  )
}
