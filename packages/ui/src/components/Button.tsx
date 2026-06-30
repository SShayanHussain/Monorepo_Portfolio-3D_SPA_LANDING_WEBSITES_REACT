import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/cn";
import { useMagnetic } from "../hooks/use-magnetic";

type Variant = "primary" | "secondary" | "ghost";

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  /** Disable the magnetic pull even on capable devices (rarely needed). */
  magnetic?: boolean;
}

// Framer Motion redefines these drag/animation handlers with its own
// signatures, so they must be omitted from the spread of native button attrs.
type MotionConflicts =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onDragEnter"
  | "onDragLeave"
  | "onDragOver"
  | "onDrop"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

type ButtonAsButton = CommonProps &
  Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    keyof CommonProps | MotionConflicts
  > & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  /** Render as an anchor — used for `tel:` links and in-page scroll CTAs. */
  href: string;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-small font-semibold " +
  "transition-[background-color,color,border-color,box-shadow] duration-hover ease-out-expo " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-accent)] focus-visible:ring-offset-2 " +
  "disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-[color:var(--brand-accent)] text-[color:var(--brand-accent-contrast)] hover:brightness-110",
  secondary:
    "border border-[color:var(--brand-accent)] text-[color:var(--brand-accent)] hover:bg-[color:var(--brand-accent)]/10",
  ghost: "text-[color:var(--brand-accent)] hover:bg-[color:var(--brand-accent)]/10",
};

/**
 * Primary/secondary/ghost button with the shared magnetic-hover effect. Renders
 * a `<button>` or, when `href` is set, an `<a>` (for `tel:` links and anchor
 * CTAs). Magnetism auto-disables on touch devices and under
 * prefers-reduced-motion via `useMagnetic`. Marked as a magnetic target so the
 * custom Cursor can snap to it.
 */
export function Button(props: ButtonProps) {
  const { variant = "primary", children, className, magnetic = true } = props;
  const { ref, x, y, enabled, onPointerMove, onPointerLeave } =
    useMagnetic<HTMLElement>();

  const useMag = magnetic && enabled;
  const classes = cn(base, variants[variant], className);

  // Spread these conditionally: with exactOptionalPropertyTypes we can't pass
  // `style={undefined}` etc., so omit the keys entirely when magnetism is off.
  const motionProps = useMag
    ? {
        style: { x, y },
        onPointerMove,
        onPointerLeave,
        "data-cursor": "magnetic" as const,
      }
    : {};

  if ("href" in props && props.href !== undefined) {
    const { href, target, rel } = props;
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={classes}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  const { type = "button", disabled, onClick, ...rest } =
    props as ButtonAsButton;
  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      {...motionProps}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
