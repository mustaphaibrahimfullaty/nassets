"use client";

import { MotorcycleSpecs } from "@/types";
import { Battery, Zap, Gauge, Timer, Weight, Ruler, Settings } from "lucide-react";

interface SpecsTableProps {
  specs: MotorcycleSpecs;
}

export function SpecsTable({ specs }: SpecsTableProps) {
  const specsList = [
    { label: "Range", value: specs.range, icon: Battery },
    { label: "Top Speed", value: specs.topSpeed, icon: Gauge },
    { label: "Horsepower", value: `${specs.horsepower} HP`, icon: Zap },
    { label: "Torque", value: specs.torque, icon: Settings },
    { label: "0-60 mph", value: specs.zeroToSixty, icon: Timer },
    { label: "Battery", value: specs.battery, icon: Battery },
    { label: "Charge Time", value: specs.chargeTime, icon: Zap },
    { label: "Weight", value: specs.weight, icon: Weight },
    { label: "Seat Height", value: specs.seatHeight, icon: Ruler },
    { label: "Motor Type", value: specs.motorType, icon: Settings },
  ];

  return (
    <div className="rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden">
      <div className="p-6 bg-muted/30 border-b border-border/50">
        <h3 className="text-xl font-bold">Technical Specifications</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-border/50 md:gap-px md:bg-border/50">
        {specsList.map((spec, index) => {
          const Icon = spec.icon;
          return (
            <div 
              key={index} 
              className="flex items-center justify-between p-4 bg-card hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-3 text-muted-foreground">
                <Icon className="w-5 h-5 text-primary/70" />
                <span className="font-medium">{spec.label}</span>
              </div>
              <span className="font-semibold text-right">{spec.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
