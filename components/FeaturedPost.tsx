import React from 'react';
import { CheckCircleIcon, ArrowRightIcon } from './icons';
import { Post } from '../types';

interface FeaturedPostProps {
  post: Post;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
      <div className="bg-teal-400 h-64 flex items-center justify-center p-8">
        <img src={post.image_url} alt={post.title} className="max-h-full object-contain" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <CheckCircleIcon className="w-4 h-4 mr-1.5 text-gray-500" />
            Featured
          </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-6 text-base">
          {post.description}
        </p>
        <a href="#" className="inline-flex items-center font-semibold text-gray-700 hover:text-orange-600 transition-colors">
          Read more
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default FeaturedPost;