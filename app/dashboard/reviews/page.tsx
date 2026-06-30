import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StarIcon } from "lucide-react"

const myReviews = [
  {
    id: 1,
    product: "Nassets Genesis",
    rating: 5,
    date: "2026-06-20",
    content: "Absolutely phenomenal machine. The torque is instant, and the ride is incredibly smooth. Best purchase I've made this year.",
  },
  {
    id: 2,
    product: "Nassets Quantum",
    rating: 4,
    date: "2026-05-10",
    content: "Great performance, though I wish the charging port was located slightly higher up on the chassis. Otherwise, a stellar ride.",
  },
]

export default function DashboardReviewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Reviews</h1>
        <p className="text-muted-foreground mt-1">
          Reviews you've left for products you've purchased.
        </p>
      </div>

      <div className="grid gap-6">
        {myReviews.map((review) => (
          <Card key={review.id}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{review.product}</CardTitle>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{review.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
