import React from 'react';
import { Post } from '../types';

interface PostCardProps {
  post: Post;
  customImageContent?: React.ReactNode;
}

const PostCard: React.FC<PostCardProps> = ({ post, customImageContent }) => {
  return (
    <a href={`/#/post/${post.id}`} className="block bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col h-full">
        <div className={`relative h-56 ${post.image_bg_class} overflow-hidden`}>
          {customImageContent ? customImageContent : <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />}
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="mb-3">
            <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-md">
              {post.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 flex-grow">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm">
            {post.description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default PostCard;
