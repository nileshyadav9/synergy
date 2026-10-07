import type { MouseEvent, ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  className: string;
  children: ReactNode;
};

export function MagneticButton({
  href,
  className,
  children,
}: MagneticButtonProps) {
  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--magnetic-x",
      `${(event.clientX - bounds.left - bounds.width / 2) * 0.08}px`,
    );
    event.currentTarget.style.setProperty(
      "--magnetic-y",
      `${(event.clientY - bounds.top - bounds.height / 2) * 0.12}px`,
    );
  };
  const reset = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.style.setProperty("--magnetic-x", "0px");
    event.currentTarget.style.setProperty("--magnetic-y", "0px");
  };
  return (
    <a
      className={className}
      href={href}
      onPointerMove={move}
      onPointerLeave={reset}
    >
      {children}
    </a>
  );
}
