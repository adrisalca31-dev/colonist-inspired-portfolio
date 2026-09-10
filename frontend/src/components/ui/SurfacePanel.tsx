import type { HTMLAttributes, ReactNode } from "react";

type SurfacePanelProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function SurfacePanel({
  children,
  className = "",
  ...props
}: SurfacePanelProps) {
  return (
    <section className={`surface-panel ${className}`} {...props}>
      {children}
    </section>
  );
}
