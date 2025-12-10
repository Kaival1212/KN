export default async function HomeBlogSection() {
    // Use Hashnode GraphQL API
    const res = await fetch("https://gql.hashnode.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
        body: JSON.stringify({
            query: `
        query GetPosts($host: String!) {
          publication(host: $host) {
            posts(first: 6) {
              edges {
                node {
                  id
                  title
                  brief
                  slug
                  coverImage { url }
                }
              }
            }
          }
        }
      `,
            variables: {
                host: "knconsultinguk.hashnode.dev"
            }
        })
    });


    const json = await res.json();
    console.log("BlogSection JSON:", json);
    const edges = json?.data?.publication?.posts?.edges || [];
    const posts = edges.map(edge => edge.node);

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-900">
                        Insights, Strategy & Innovation
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-xl mx-auto">
                        Expert perspectives on software, automation, AI, digital strategy, and customer experience—written by the team at KN Consulting.
                    </p>
                </div>

                {/* Blog Scroll Section */}
                <div className="flex flex-row overflow-x-auto gap-8 pb-4">
                    {posts.map((post) => (
                        <a
                            key={post.id}
                            href={`https://knconsultinguk.hashnode.dev/${post.slug}`}
                            target="_blank"
                            className="group min-w-[300px] bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-kn-green transition-all duration-300"
                        >

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-kn-green transition">
                                {post.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mt-3 line-clamp-3">
                                {post.brief || "Explore the full article"}
                            </p>

                            {/* Read More */}
                            <div className="mt-5 flex items-center text-kn-green font-medium group-hover:underline">
                                Continue Reading
                                <svg
                                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="text-center mt-14">
                    <a
                        href="https://knconsultinguk.hashnode.dev"
                        className="px-8 py-3 rounded-full bg-kn-green text-white font-semibold shadow-md hover:bg-kn-green/90 transition"
                        target="_blank"
                    >
                        Explore All Insights
                    </a>
                </div>
            </div>
        </section>
    );
}
