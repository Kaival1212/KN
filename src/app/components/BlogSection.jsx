import React from 'react';

const BlogPost = ({ image, title, excerpt, date, readTime, slug }) => (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
        <div className="relative h-48">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-3">
                <div className="flex items-center mr-4">
                    <span className="mr-1">📅</span>
                    <span>{date}</span>
                </div>
                <div className="flex items-center">
                    <span className="mr-1">⏱️</span>
                    <span>{readTime}</span>
                </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{excerpt}</p>
            <a
                href={`/blog/${slug}`}
                className="text-kn-green font-medium inline-flex items-center"
            >
                Read More
                <span className="ml-2">→</span>
            </a>
        </div>
    </div>
);

const BlogSection = () => {
    const posts = [
        {
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=870&auto=format&fit=crop",
            title: "5 Ways Business Automation Can Transform Your Operations",
            excerpt: "Learn how custom automation solutions can reduce costs and improve efficiency in small businesses.",
            date: "May 2, 2025",
            readTime: "5 min read",
            slug: "business-automation-transform-operations"
        },
        {
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1415&auto=format&fit=crop",
            title: "The ROI of Custom Software Development for SMEs",
            excerpt: "Discover how investing in bespoke software solutions can deliver strong returns for UK small businesses.",
            date: "Apr 28, 2025",
            readTime: "7 min read",
            slug: "roi-custom-software-smes"
        },
        {
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=870&auto=format&fit=crop",
            title: "Mobile App or Web App: Which Is Right for Your Business?",
            excerpt: "A comprehensive guide to choosing the right platform for your digital product or service.",
            date: "Apr 15, 2025",
            readTime: "6 min read",
            slug: "mobile-vs-web-app-business"
        }
    ];

    return (
        <section id="blog" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Expert guides, industry insights, and helpful advice for leveraging technology in your business.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <a
                            href="/blog"
                            className="inline-block border border-kn-navy text-kn-navy font-semibold px-6 py-3 rounded-md hover:bg-kn-navy/5 transition"
                        >
                            View All Articles
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <BlogPost key={idx} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
