import React from 'react'
import { Link, useParams, Navigate } from 'react-router'
import Container from '../components/layout/Container'
import { FaCalendarAlt, FaCommentAlt, FaUser } from 'react-icons/fa'
import { getBlogById, blogs } from '../data/blogs'

const SingleBlog = () => {
  const { id } = useParams()
  const blog = getBlogById(id)

  if (!blog) return <Navigate to="/blog" replace />

  const others = blogs.filter((b) => b.id !== blog.id).slice(0, 2)

  return (
    <Container className="py-12">
      <div className="max-w-3xl mx-auto">
        <img src={blog.image} alt={blog.title} className="w-full h-72 object-cover rounded-xl mb-8" />
        <div className="flex gap-6 mb-4 text-gray-500 text-sm font-pop">
          <span className="flex items-center gap-2">
            <FaCalendarAlt size={12} /> {blog.date}
          </span>
          <span className="flex items-center gap-2">
            <FaCommentAlt size={12} /> {blog.comments} Comments
          </span>
          <span className="flex items-center gap-2">
            <FaUser size={12} /> {blog.author}
          </span>
        </div>
        <h1 className="font-pop text-3xl font-bold mb-6">{blog.title}</h1>
        <p className="font-pop text-gray-600 leading-relaxed whitespace-pre-line">{blog.content}</p>
      </div>

      {others.length > 0 && (
        <div className="mt-16">
          <h2 className="font-pop text-xl font-bold mb-6">Related Posts</h2>
          <div className="grid grid-cols-2 gap-6">
            {others.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover rounded-lg mb-3" />
                <h3 className="font-pop font-semibold group-hover:text-primary">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      )}
    </Container>
  )
}

export default SingleBlog
