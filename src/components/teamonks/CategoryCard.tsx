interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

export function CategoryCard({ title, description, icon, href, color }: CategoryCardProps) {
  return (
    <a
      href={href}
      className={`block rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-200 bg-white dark:bg-slate-800 group`}
    >
      <div className={`text-4xl mb-4`}>{icon}</div>
      <h2 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-primary)] transition-colors">
        {title}
      </h2>
      <p className="text-sm text-[var(--color-muted)]">{description}</p>
    </a>
  );
}
