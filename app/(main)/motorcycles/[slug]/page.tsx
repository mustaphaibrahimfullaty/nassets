import { notFound } from "next/navigation";
import { motorcycles } from "@/data/motorcycles";
import { ImageGallery } from "@/components/product/image-gallery";
import { PurchaseCard } from "@/components/product/purchase-card";
import { SpecsTable } from "@/components/product/specs-table";
import { RelatedProducts } from "@/components/product/related-products";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function MotorcycleDetailsPage(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

  const motorcycle = motorcycles.find((m) => m.slug === slug);

  if (!motorcycle) {
    notFound();
  }

  // Find related products (same category, excluding this one)
  const relatedMotorcycles = motorcycles
    .filter((m) => m.category === motorcycle.category && m.id !== motorcycle.id)
    .slice(0, 3);

  // Fallback to random if no related ones found in the same category
  const fallbackRelated = relatedMotorcycles.length > 0
    ? relatedMotorcycles
    : motorcycles.filter((m) => m.id !== motorcycle.id).slice(0, 3);

  return (
    <div className="container px-4 pt-10  max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-muted-foreground mb-8 animate-fade-in-up">
        <Link href="/" className="hover:text-primary transition-colors flex items-center">
          <Home className="w-4 h-4 mr-1" />
        </Link>
        <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
        <Link href="/motorcycles" className="hover:text-primary transition-colors">
          Motorcycles
        </Link>
        <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
        <span className="text-foreground font-medium capitalize">{motorcycle.category}</span>
        <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
        <span className="text-foreground font-bold">{motorcycle.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column (Images, Details, Specs) */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-12 animate-fade-in-up-delay-1">
          <ImageGallery images={motorcycle.images} motorcycleName={motorcycle.name} />

          <section>
            <h2 className="text-2xl font-bold tracking-tight mb-4">Overview</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed text-lg">
              <p>{motorcycle.description}</p>
            </div>
          </section>

          <section>
            <SpecsTable specs={motorcycle.specs} />
          </section>
        </div>

        {/* Right Column (Purchase Card) */}
        <div className="lg:col-span-5 xl:col-span-4 relative animate-fade-in-up-delay-2">
          <PurchaseCard motorcycle={motorcycle} />
        </div>
      </div>

      <RelatedProducts products={fallbackRelated} />
    </div>
  );
}
