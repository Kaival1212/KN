export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const runtime = "nodejs";
export const revalidate = 0

export default async function BlogPage() {
    const timestamp = Date.now();
    const res = await fetch(
        "https://dev.to/api/articles?username=kaival_patel_63812bbbb11c",
        {
            cache: "no-store",
            next: { revalidate: 0 }
        }
    );

    const posts = await res.json();
    console.log("Fetched blog posts at:", new Date(timestamp).toISOString());

    return (
        <main className="max-w-3xl mx-auto py-16 px-4">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>

            <div className=" flex space-x-8 overflow-x-auto">
                {posts.map((post) => (
                    <a
                        key={post.id}
                        href={post.url}
                        target="_blank"
                        className="block p-6 rounded-xl border border-gray-200 hover:bg-gray-50 transition"
                    >
                        <h2 className="text-xl font-semibold text-gray-900">
                            {post.title}
                        </h2>

                        <p className="text-gray-600 mt-2">
                            {post.description || post.summary}
                        </p>

                        <p className="text-sm text-gray-400 mt-4">
                            {new Date(post.published_at).toLocaleDateString()}
                        </p>
                    </a>
                ))}
            </div>
        </main>
    );
}
