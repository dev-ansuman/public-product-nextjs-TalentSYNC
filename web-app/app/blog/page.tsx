import { fetchStrapi } from '@/lib/strapi';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export const revalidate = 60;

interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  published_date: string;
}

export default async function BlogPage() {
  const posts: BlogPost[] = await fetchStrapi('/blog-posts?sort=published_date:desc');

  return (
    <main className="pt-14">
      {/* Page header */}
      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
              Insights & Resources
            </h1>
            <p className="text-neutral-500 max-w-sm text-sm leading-relaxed">
              Hiring strategies, product updates, and recruitment best practices from the TalentSYNC team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog list */}
      <section className="border-b border-black">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="divide-y divide-black border-t border-b border-black">
            {posts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 group hover:bg-neutral-50 px-4 -mx-4 transition-colors"
              >
                {/* Index + Title */}
                <div className="flex items-start gap-6 flex-1">
                  <span className="text-xs font-bold text-neutral-200 tabular-nums mt-1 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-black text-xl tracking-tight leading-tight mb-2 group-hover:underline underline-offset-4">
                      {post.title}
                    </h2>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </div>

                {/* Date + Arrow */}
                <div className="flex items-center gap-6 shrink-0 md:pl-8">
                  <Badge variant="outline" className="rounded-none text-xs uppercase tracking-widest font-medium border-neutral-200 text-neutral-400">
                    {new Date(post.published_date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </Badge>
                  <ArrowRight
                    size={16}
                    className="text-neutral-300 group-hover:text-black group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}