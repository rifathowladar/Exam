import React from 'react'
import { Link } from 'react-router'
import Container from '../components/layout/Container'
import { FaCalendarAlt, FaCommentAlt } from 'react-icons/fa'
import { blogs } from '../data/blogs'

const BlogList = () => {
  return (
    <Container className="py-12">
      <h1 className="font-pop text-3xl font-bold mb-8">Our Blog</h1>
      <div className="grid grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <div className="flex gap-4 mb-3">
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <FaCalendarAlt size={10} />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <FaCommentAlt size={10} />
                  <span>{blog.comments} Comments</span>
                </div>
              </div>
              <Link to={`/blog/${blog.id}`}>
                <h3 className="font-semibold font-pop text-gray-800 mb-2 hover:text-green-600 transition-colors">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-500 mb-4 font-pop line-clamp-2">{blog.description}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="text-green-600 text-sm font-semibold font-pop hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default BlogList
