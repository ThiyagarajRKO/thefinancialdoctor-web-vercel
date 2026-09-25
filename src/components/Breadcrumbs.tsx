import Link from "next/link";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="crumbs">
      <ol>
        <li><Link href="/">Home</Link></li>
        {items.map((c, i) => (
          <li key={c.path}>
            {i === items.length - 1 ? <span aria-current="page">{c.name}</span> : <Link href={c.path}>{c.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
