'use client'
import React from 'react';
import Link from 'next/link';

const MyPost = () => {
  const posts = [
    // Example data, replace with your actual data
    { id: 1, title: 'Post 1', imageUrl: '/poster.jpg' },
    { id: 2, title: 'Post 2', imageUrl: '/poster.jpg' },
    // ... up to 10 posts
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {posts.slice(0, 10).map((post) => (
        <Link
          key={post.id}
          href={`/DetailArt`}
          className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer"
        >
          <section className='border border-1 border-yellow-300 rounded-lg'>
            <img className="w-full" src={post.imageUrl} alt={post.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{post.title}</div>
            </div>
          </section>
        </Link>
      ))}
    </div>
  );
};

export default MyPost;