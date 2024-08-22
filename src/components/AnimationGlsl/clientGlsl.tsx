import "./style.css";

export default function clientGlsl({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div id="elementGlsl" className={className}>{children}</div>;
}
