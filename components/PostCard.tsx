
import React from 'react';

interface PostCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  imageBgClass: string;
  customImageContent?: React.ReactNode;
}

const PostCard: React.FC<PostCardProps> = ({ category, title, description, imageUrl, imageBgClass, customImageContent }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 flex flex-col">
      <div className={`relative h-56 ${imageBgClass} overflow-hidden`}>
        {customImageContent ? customImageContent : <img src={imageUrl} alt={title} className="w-full h-full object-cover" />}
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-3">
          <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-md">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 flex-grow">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
