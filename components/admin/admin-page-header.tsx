import { Button } from "@/components/ui/button"

interface AdminPageHeaderProps {
  eyebrow: string
  title: string
  description: string
  action?: string
}

export function AdminPageHeader({ eyebrow, title, description, action }: AdminPageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="flex max-w-3xl flex-col gap-2">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {action ? <Button>{action}</Button> : null}
    </div>
  )
}
