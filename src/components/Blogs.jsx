import { useState } from "react";
import SpotlightCard from "./SpotlightCard";
import ScrollReveal from "./ScrollReveal";

const Blogs = () => {
  const blogs = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring the latest trends in web development including AI integration, WebAssembly, and the rise of edge computing. The landscape of web development is rapidly evolving...",
      fullContent: "Exploring the latest trends in web development including AI integration, WebAssembly, and the rise of edge computing. The landscape of web development is rapidly evolving with new technologies emerging at an unprecedented pace. From the integration of artificial intelligence in web applications to the growing adoption of WebAssembly for high-performance computing in the browser, developers have more tools than ever to create powerful web experiences. Edge computing is also revolutionizing how we think about data processing and user experience, bringing computation closer to the end user and enabling faster, more responsive applications.",
      date: "July 25, 2025",
      category: "Technology"
    },
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices for creating maintainable and scalable React applications. Learn about state management, component architecture...",
      fullContent: "Best practices for creating maintainable and scalable React applications. Learn about state management, component architecture, and performance optimization techniques. This comprehensive guide covers everything from project structure to deployment strategies. We'll explore modern state management solutions, component composition patterns, and techniques for optimizing bundle size and runtime performance. Additionally, we'll discuss testing strategies, CI/CD pipelines, and monitoring solutions that help ensure your application remains reliable at scale.",
      date: "July 20, 2025",
      category: "Development"
    },
    {
      title: "The Art of User Experience",
      excerpt: "Understanding the psychology behind great user experiences and how to implement them in your projects...",
      fullContent: "Understanding the psychology behind great user experiences and how to implement them in your projects. Dive deep into user psychology, interaction design patterns, and accessibility considerations. Learn how color theory, typography, and layout choices impact user behavior and engagement. We'll explore real-world case studies of successful UX transformations and provide practical tips for conducting user research and usability testing. The article also covers the importance of inclusive design and how to create experiences that work for users of all abilities.",
      date: "July 15, 2025",
      category: "Design"
    }
  ];

  const [expandedBlogs, setExpandedBlogs] = useState(new Set());

  const toggleBlog = (index) => {
    const newExpanded = new Set(expandedBlogs);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedBlogs(newExpanded);
  };

  return (
    <div id="blogs" className="min-h-screen flex flex-col justify-center items-center py-20 px-4">
      <ScrollReveal
        containerClassName="text-white mb-12"
        textClassName="font-bold text-center"
        enableBlur={true}
        baseOpacity={0}
        blurStrength={8}
        baseRotation={5}
      >
        My Blog Posts
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
        {blogs.map((blog, index) => (
          <SpotlightCard
            key={index}
            className="h-full"
          >
            <div className="flex flex-col h-full">
              <ScrollReveal
                containerClassName="mb-4"
                textClassName="!text-xl !leading-tight font-bold text-white"
                enableBlur={true}
                baseOpacity={0}
                blurStrength={4}
                baseRotation={2}
              >
                {blog.title}
              </ScrollReveal>
              
              <div className="flex gap-2 mb-4">
                <span className="text-sm text-gray-400">{blog.date}</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-400">{blog.category}</span>
              </div>
              
              <p className="text-gray-300 mb-4">
                {expandedBlogs.has(index) ? blog.fullContent : blog.excerpt}
              </p>
              
              <button
                onClick={() => toggleBlog(index)}
                className="mt-auto text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                {expandedBlogs.has(index) ? "Read Less" : "Read More"}
              </button>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
