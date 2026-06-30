import { CheckoutSteps } from "@/components/checkout/checkout-steps";

export default function CheckoutPage() {
  return (
    <div className="container py-10 px-4 md:px-8 max-w-5xl mx-auto min-h-[calc(100vh-200px)]">
      <div className="mb-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          Secure <span className="gradient-text">Checkout</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          Complete your purchase of premium electric motorcycles.
        </p>
      </div>

      <div className="animate-fade-in-up-delay-1">
        <CheckoutSteps />
      </div>
    </div>
  );
}
