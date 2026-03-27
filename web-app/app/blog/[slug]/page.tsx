import { fetchStrapi } from '@/lib/strapi';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const revalidate = false;

interface BlogPost {
    id: number;
    title: string;
    slug: string;
    description: string;
    body: string;
    published_date: string;
}

export async function generateStaticParams() {
    const posts = await fetchStrapi('/blog-posts');
    return posts.map((post: BlogPost) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const posts = await fetchStrapi(
        `/blog-posts?filters[slug][$eq]=${slug}`
    );

    if (!posts || posts.length === 0) {
        notFound();
    }

    const post: BlogPost = posts[0];

    return (
        <main className="pt-14">
            {/* Back link */}
            <div className="border-b border-black">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <Link
                        href="/blog"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors"
                    >
                        <ArrowLeft size={14} />
                        Back to Blog
                    </Link>
                </div>
            </div>

            {/* Post header */}
            <section>
                <div className="max-w-7xl mx-auto px-6 py-20">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-px bg-black" />
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                            {new Date(post.published_date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none max-w-4xl mb-8">
                        {post.title}
                    </h1>
                    <div className="w-full h-px bg-black mb-8" />
                    <p className="text-lg text-neutral-600 max-w-2xl leading-relaxed">
                        {post.description}
                    </p>
                </div>
            </section>

            {/* Post body */}
            <section className="border-b border-black">
                <div className="max-w-3xl mx-auto px-6 py-16">
                    <div className="space-y-6">
                        {Array.isArray(post.body)
                            ? post.body.map((block: any, i: number) => {
                                if (block.type === 'paragraph') {
                                    return (
                                        <p key={i} className="text-neutral-600 leading-relaxed">
                                            {block.children?.map((child: any) => child.text).join('')}
                                        </p>
                                    );
                                }
                                if (block.type === 'heading') {
                                    return (
                                        <h2 key={i} className="font-black text-xl uppercase tracking-tight mt-8">
                                            {block.children?.map((child: any) => child.text).join('')}
                                        </h2>
                                    );
                                }
                                return null;
                            })
                            : typeof post.body === 'string'
                                ? post.body.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className="text-neutral-600 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))
                                : null}
                    </div>
                </div>
            </section>

            {/* Back CTA */}
            <section className="border-b border-black">
                <div className="max-w-7xl mx-auto px-6 py-12 flex items-center justify-between">
                    <p className="font-black text-lg uppercase tracking-tight">More Articles</p>
                    <Link
                        href="/blog"
                        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all"
                    >
                        View All Posts
                        <ArrowLeft size={14} className="rotate-180" />
                    </Link>
                </div>
            </section>
        </main>
    );
}