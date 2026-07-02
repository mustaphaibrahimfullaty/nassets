import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { TrashIcon, ShoppingCartIcon } from "lucide-react"

const wishlist = [
  {
    id: 1,
    name: "Nassets Quantum",
    price: "₦15,000",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop",
    available: true,
  },
  {
    id: 2,
    name: "Nassets Explorer",
    price: "₦12,500",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop",
    available: true,
  },
  {
    id: 3,
    name: "Nassets Genesis",
    price: "₦18,000",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=800&auto=format&fit=crop",
    available: false,
  },
]

export default function WishlistPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Wishlist</h1>
        <p className="text-muted-foreground mt-1">
          Your saved motorcycles for future purchase.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {wishlist.map((item) => (
          <Card key={item.id} className="overflow-hidden flex flex-col group relative">
            <div className="relative aspect-4/3 w-full bg-muted overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <TrashIcon className="h-4 w-4" />
                <span className="sr-only">Remove</span>
              </Button>
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{item.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-2xl font-bold text-primary">{item.price}</div>
              <p className="text-sm text-muted-foreground mt-2">
                {item.available ? "In Stock - Available to order" : "Out of Stock - Pre-order available"}
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={item.available ? "default" : "secondary"}>
                <ShoppingCartIcon className="h-4 w-4 mr-2" />
                {item.available ? "Add to Cart" : "Pre-order"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
