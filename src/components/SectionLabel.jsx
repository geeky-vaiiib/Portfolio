export function SectionLabel({ children, count, as: Tag = "h2", className = "", ...rest }) {
  return (
    <Tag className={`section-label ${className}`} {...rest}>
      {children}
      {count != null && <span className="section-count">{String(count).padStart(2, "0")}</span>}
    </Tag>
  );
}
