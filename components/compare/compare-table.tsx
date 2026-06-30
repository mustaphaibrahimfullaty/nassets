import { Motorcycle } from "@/types";
import { useCompareStore } from "@/store/use-compare-store";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { X, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface CompareTableProps {
  motorcycles: Motorcycle[];
}

export function CompareTable({ motorcycles }: CompareTableProps) {
  const { removeMotorcycle } = useCompareStore();

  const specsRows = [
    { label: "Price", key: "price", format: (v: number) => `$${v.toLocaleString()}` },
    { label: "Range", key: "specs.range" },
    { label: "Top Speed", key: "specs.topSpeed" },
    { label: "0-60 mph", key: "specs.zeroToSixty" },
    { label: "Horsepower", key: "specs.horsepower", format: (v: number) => `${v} hp` },
    { label: "Torque", key: "specs.torque" },
    { label: "Battery", key: "specs.battery" },
    { label: "Charge Time", key: "specs.chargeTime" },
    { label: "Weight", key: "specs.weight" },
    { label: "Seat Height", key: "specs.seatHeight" },
    { label: "Motor", key: "specs.motorType" },
  ];

  const getNestedValue = (obj: any, path: string) => {
    return path.split(".").reduce((acc, part) => acc && acc[part], obj);
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm">
      <Table className="min-w-[800px]">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[200px] font-semibold text-lg p-6">Features</TableHead>
            {motorcycles.map((mc) => (
              <TableHead key={mc.id} className="min-w-[250px] p-6 align-top">
                <div className="relative group">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute -top-2 -right-2 h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-background border shadow-sm z-10"
                    onClick={() => removeMotorcycle(mc.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <Link href={`/motorcycles/${mc.slug}`} className="block">
                    <div className="relative h-40 w-full mb-4 overflow-hidden rounded-xl bg-muted group-hover:ring-2 ring-primary transition-all">
                      <Image
                        src={mc.thumbnail}
                        alt={mc.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-xl truncate">{mc.name}</h3>
                    <p className="text-muted-foreground text-sm">{mc.brand}</p>
                    <div className="mt-2 flex gap-2">
                      <Badge variant="secondary" className="capitalize">{mc.category}</Badge>
                      {mc.isNew && <Badge>New</Badge>}
                    </div>
                  </Link>
                </div>
              </TableHead>
            ))}
            {/* Fill empty columns up to 4 */}
            {Array.from({ length: 4 - motorcycles.length }).map((_, i) => (
              <TableHead key={`empty-head-${i}`} className="min-w-[250px] p-6">
                <div className="h-40 w-full mb-4 rounded-xl border-2 border-dashed border-border/50 flex items-center justify-center bg-muted/20">
                  <span className="text-muted-foreground text-sm font-medium">Empty Slot</span>
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {specsRows.map((row) => (
            <TableRow key={row.label} className="group">
              <TableCell className="font-medium p-4 bg-muted/30">{row.label}</TableCell>
              {motorcycles.map((mc) => {
                const rawValue = getNestedValue(mc, row.key);
                const value = row.format ? row.format(rawValue) : rawValue;
                return (
                  <TableCell key={`${mc.id}-${row.label}`} className="p-4 group-hover:bg-muted/10 transition-colors">
                    {value}
                  </TableCell>
                );
              })}
              {Array.from({ length: 4 - motorcycles.length }).map((_, i) => (
                <TableCell key={`empty-cell-${row.label}-${i}`} className="p-4" />
              ))}
            </TableRow>
          ))}
          <TableRow>
            <TableCell className="font-medium p-4 bg-muted/30">Action</TableCell>
            {motorcycles.map((mc) => (
              <TableCell key={`action-${mc.id}`} className="p-4">
                <Button className="w-full" asChild>
                  <Link href={`/motorcycles/${mc.slug}`}>View Details</Link>
                </Button>
              </TableCell>
            ))}
            {Array.from({ length: 4 - motorcycles.length }).map((_, i) => (
              <TableCell key={`empty-action-${i}`} className="p-4" />
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
