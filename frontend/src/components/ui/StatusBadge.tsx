type StatusBadgeProps = {
  children: string;
};

export function StatusBadge({ children }: StatusBadgeProps) {
  return (
    <span className="status-badge">
      <span className="status-badge__dot" />
      {children}
    </span>
  );
}
