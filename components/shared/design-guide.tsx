"use client";
import { ThemeToggle } from "./theme-toggle";

export function DesignGuide() {
  return (
    <div className="container mx-auto p-8 space-y-16 relative">
      <div className="sticky top-3 right-3 bg-foreground w-fit rounded-full text-background border-2 border-ring">
        <ThemeToggle />
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-4 font-heading">Nassets Design System</h1>
        <p className="text-muted-foreground text-lg mb-8">
          A comprehensive guide to the design language, components, and patterns used in the Nassets application.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Brand Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <ColorSwatch name="Background" variable="var(--background)" />
          <ColorSwatch name="Foreground" variable="var(--foreground)" />
          <ColorSwatch name="Card" variable="var(--card)" />
          <ColorSwatch name="Card Foreground" variable="var(--card-foreground)" />
          <ColorSwatch name="Primary" variable="var(--primary)" />
          <ColorSwatch name="Primary Foreground" variable="var(--primary-foreground)" />
          <ColorSwatch name="Secondary" variable="var(--secondary)" />
          <ColorSwatch name="Secondary Foreground" variable="var(--secondary-foreground)" />
          <ColorSwatch name="Muted" variable="var(--muted)" />
          <ColorSwatch name="Muted Foreground" variable="var(--muted-foreground)" />
          <ColorSwatch name="Destructive" variable="var(--destructive)" />
          <ColorSwatch name="Destructive Foreground" variable="var(--destructive-foreground)" />
          <ColorSwatch name="Border" variable="var(--border)" />
          <ColorSwatch name="Input" variable="var(--input)" />
          <ColorSwatch name="Ring" variable="var(--ring)" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Typography</h2>
        <div className="space-y-8">
          <div>
            <div className="text-sm text-muted-foreground mb-2">Heading (Geist)</div>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">Heading 1 - 36px</h1>
              <h2 className="text-3xl font-semibold">Heading 2 - 30px</h2>
              <h3 className="text-2xl font-medium">Heading 3 - 24px</h3>
              <h4 className="text-xl font-medium">Heading 4 - 20px</h4>
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-2">Body (Inter)</div>
            <div className="space-y-4 font-sans">
              <p className="text-lg">Body Large - 18px. Used for lead paragraphs and important text.</p>
              <p className="text-base">Body Base - 16px. The standard text size for most content.</p>
              <p className="text-sm">Body Small - 14px. Used for secondary text, metadata, and captions.</p>
              <p className="text-xs text-muted-foreground">Body Extra Small - 12px. Used sparingly for fine print.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Radius & Shapes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="h-24 bg-primary rounded-sm flex items-center justify-center text-primary-foreground font-medium">Small (4px)</div>
            <div className="text-sm text-center text-muted-foreground">--radius-sm</div>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-medium">Medium (14px)</div>
            <div className="text-sm text-center text-muted-foreground">--radius-md (Buttons, Inputs)</div>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-medium">Large (24px)</div>
            <div className="text-sm text-center text-muted-foreground">--radius-lg (Cards)</div>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-medium">X-Large (32px)</div>
            <div className="text-sm text-center text-muted-foreground">--radius-xl</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Spacing</h2>
        <div className="space-y-4">
          <SpacingBar size="1 (4px)" width="w-1" />
          <SpacingBar size="2 (8px)" width="w-2" />
          <SpacingBar size="3 (12px)" width="w-3" />
          <SpacingBar size="4 (16px)" width="w-4" />
          <SpacingBar size="5 (24px)" width="w-6" />
          <SpacingBar size="6 (32px)" width="w-8" />
          <SpacingBar size="7 (48px)" width="w-12" />
          <SpacingBar size="8 (64px)" width="w-16" />
          <SpacingBar size="9 (96px)" width="w-24" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Shadows (Soft & Layered)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-32 bg-card rounded-lg shadow-sm border border-border flex items-center justify-center">
            <span className="font-medium text-card-foreground">Shadow Small</span>
          </div>
          <div className="h-32 bg-card rounded-lg shadow-md border border-border flex items-center justify-center">
            <span className="font-medium text-card-foreground">Shadow Medium</span>
          </div>
          <div className="h-32 bg-card rounded-lg shadow-lg border border-border flex items-center justify-center">
            <span className="font-medium text-card-foreground">Shadow Large</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Animations (Durations)</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-32 py-2 bg-primary text-primary-foreground text-center rounded-md hover:scale-105 transition-transform duration-150 ease-in-out cursor-pointer">Hover Me</div>
            <span className="text-sm text-muted-foreground">150ms Scale (Buttons)</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 py-2 bg-secondary text-secondary-foreground text-center rounded-md hover:opacity-80 transition-opacity duration-200 ease-in-out cursor-pointer">Hover Me</div>
            <span className="text-sm text-muted-foreground">200ms Fade (Links, Standard interactions)</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 py-2 bg-card border border-border shadow-sm text-card-foreground text-center rounded-lg hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">Hover Me</div>
            <span className="text-sm text-muted-foreground">300ms Slide/Transform (Cards)</span>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">UX Principles Checklist</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
          <li className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">1</div>
            One primary action per screen
          </li>
          <li className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">2</div>
            Large clickable areas (48px min for touch)
          </li>
          <li className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">3</div>
            Progressive disclosure
          </li>
          <li className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">4</div>
            Skeleton loaders for async content
          </li>
          <li className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">5</div>
            Empty states
          </li>
          <li className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">6</div>
            Helpful micro-interactions
          </li>
        </ul>
      </section>
    </div>
  );
}

function ColorSwatch({ name, variable }: { name: string; variable: string }) {
  return (
    <div className="space-y-2">
      <div
        className="h-24 w-full rounded-xl border border-border shadow-sm"
        style={{ backgroundColor: variable }}
      />
      <div>
        <div className="font-medium text-sm">{name}</div>
        <div className="text-xs text-muted-foreground font-mono">{variable}</div>
      </div>
    </div>
  );
}

function SpacingBar({ size, width }: { size: string; width: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-24 text-sm text-muted-foreground font-mono">{size}</div>
      <div className={`h-8 bg-primary/20 rounded-sm ${width}`}></div>
    </div>
  );
}
