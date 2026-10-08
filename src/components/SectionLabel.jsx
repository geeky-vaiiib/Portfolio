export function SectionLabel({ children, n, count, as: Tag = "h2", className = "", ...rest }) {
  return (
    <Tag className={`section-label ${className}`} {...rest}>
      {n && <span className="section-num" aria-hidden="true">{n} /</span>}
      <span>{children}</span>
      {count != null && <span className="section-count" aria-label={`${count} items`}>{String(count).padStart(2, "0")}</span>}
    </Tag>
  );
}
