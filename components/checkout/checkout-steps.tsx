"use client";

import { useState } from "react";
import { useCartStore } from "@/store/use-cart-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, ShoppingBag, Truck, CreditCard, ChevronRight, Plus, Minus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Empty } from "@/components/ui/empty";

const steps = [
  { id: 1, name: "Cart", icon: ShoppingBag },
  { id: 2, name: "Shipping", icon: Truck },
  { id: 3, name: "Payment", icon: CreditCard },
  { id: 4, name: "Success", icon: CheckCircle2 },
];

export function CheckoutSteps() {
  const [currentStep, setCurrentStep] = useState(1);
  const { getEnrichedItems, getTotalPrice, updateQuantity, removeItem, clearCart } = useCartStore();
  const items = getEnrichedItems();
  const total = getTotalPrice();

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const handleBack = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  if (items.length === 0 && currentStep !== 4) {
    return (
      <Empty className="py-20 border border-dashed border-border/50 rounded-2xl bg-card/20">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <ShoppingBag className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Your cart is empty</h3>
        <p className="text-muted-foreground mb-8">Browse our collection and find your perfect ride.</p>
        <Button asChild size="lg">
          <Link href="/motorcycles">Explore Motorcycles</Link>
        </Button>
      </Empty>
    );
  }

  return (
    <div className="space-y-8">
      {/* Step Indicator */}
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-muted rounded-full -z-10" />
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full -z-10 transition-all duration-300"
          style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
        />
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = currentStep >= step.id;
          return (
            <div key={step.id} className="flex flex-col items-center gap-2 bg-background p-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${isActive
                  ? "bg-primary border-primary text-primary-foreground"
                  : "bg-muted border-muted text-muted-foreground"
                  }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className={`text-sm font-medium ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                {step.name}
              </span>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Step 1: Cart */}
          {currentStep === 1 && (
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Review Your Cart</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.motorcycleId}-${item.color}`} className="flex flex-col sm:flex-row gap-4 p-4 bg-muted/20 rounded-xl border border-border/50">
                    <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-muted">
                      <Image src={item.motorcycle.thumbnail} alt={item.motorcycle.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-lg">{item.motorcycle.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.motorcycle.brand}</p>
                          <p className="text-sm mt-1">Color: <span className="font-medium capitalize">{item.color}</span></p>
                        </div>
                        <span className="font-bold text-lg">₦\{(item.motorcycle.price * item.quantity).toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-3 bg-background border border-border/50 rounded-full p-1">
                          <Button
                            variant="ghost" size="icon" className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.motorcycleId, item.color, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-4 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="ghost" size="icon" className="h-8 w-8 rounded-full"
                            onClick={() => updateQuantity(item.motorcycleId, item.color, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-500/10"
                          onClick={() => removeItem(item.motorcycleId, item.color)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Step 2: Shipping */}
          {currentStep === 2 && (
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Alex" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Vance" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address Line 1</Label>
                  <Input id="address" defaultValue="123 Electric Ave" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" defaultValue="San Francisco" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" defaultValue="94105" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Payment */}
          {currentStep === 3 && (
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input id="cardName" defaultValue="Alex Vance" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="4111 1111 1111 1111" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="exp">Expiry Date</Label>
                    <Input id="exp" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Success */}
          {currentStep === 4 && (
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center py-12">
              <CardContent className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Order Confirmed!</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-md">
                  Thank you for your purchase. We've sent a confirmation email to your inbox. Get ready to ride!
                </p>
                <Button asChild size="lg" onClick={clearCart}>
                  <Link href="/dashboard">View Dashboard</Link>
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons (for steps 1-3) */}
          {currentStep < 4 && (
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                Back
              </Button>
              <Button onClick={handleNext} className="gap-2">
                {currentStep === 3 ? "Complete Purchase" : "Continue"}
                {currentStep < 3 && <ChevronRight className="w-4 h-4" />}
              </Button>
            </div>
          )}
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-1">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal ({items.reduce((acc, i) => acc + i.quantity, 0)} items)</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping (Freight)</span>
                <span>₦499</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated Tax</span>
                <span>₦{(total * 0.08).toLocaleString()}</span>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-primary">₦{(total + 499 + (total * 0.08)).toLocaleString()}</span>
              </div>
            </CardContent>
            {currentStep < 3 && (
              <CardFooter>
                <Button className="w-full" size="lg" onClick={handleNext}>
                  Proceed to {steps[currentStep].name}
                </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
