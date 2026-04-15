import type { ContentItem } from "@/lib/content";

interface ContentSectionProps {
  items: ContentItem[];
}

export function ContentSection({ items }: ContentSectionProps) {
  return (
    <div className="space-y-8">
      {items.map((item) => (
        <article
          key={item.id}
          className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6"
        >
          <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed whitespace-pre-line">
            {item.body}
          </div>
        </article>
      ))}
    </div>
  );
}
