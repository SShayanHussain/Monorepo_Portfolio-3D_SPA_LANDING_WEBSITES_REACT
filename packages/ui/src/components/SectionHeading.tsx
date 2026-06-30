import { type ReactNode } from "react";
import { cn } from "../lib/cn";

export interface SectionHeadingProps {
  /** Small uppercase label above the headline. */
  eyebrow?: ReactNode;
  headline: ReactNode;
  subhead?: ReactNode;
  /** Heading level for the headline — keep the document outline correct per page. */
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  className?: string;
}

/**
 * Eyebrow + headline + optional subhead, consistent across all sites. Visual
 * size is fixed to the design-system type scale; the semantic level (`as`) is
 * chosen by the caller so a hero can render an `h1` while sections render `h2`.
 */
export function SectionHeading({
  eyebrow,
  headline,
  subhead,
  as: Tag = "h2",
  align = "left",
  className,
}: SectionHeadingProps) {
  const sizeClass = Tag === "h1" ? "text-display" : "text-h2";
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow != null && (
        <span className="text-small font-medium uppercase tracking-[0.16em] text-[color:var(--brand-accent)]">
          {eyebrow}
        </span>
      )}
      <Tag className={cn("font-display font-semibold text-balance", sizeClass)}>
        {headline}
      </Tag>
      {subhead != null && (
        <p
          className={cn(
            "text-body text-neutral-600 dark:text-neutral-300",
            align === "center" ? "max-w-2xl" : "max-w-prose",
          )}
        >
          {subhead}
        </p>
      )}
    </div>
  );
}
