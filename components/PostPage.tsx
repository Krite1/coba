import React from 'react';
import { Post } from '../types';
import { CalendarIcon } from './icons';

interface PostPageProps {
  post: Post;
  customImageContent?: React.ReactNode;
}

const PostPage: React.FC<PostPageProps> = ({ post, customImageContent }) => {
  // Process content to render paragraphs for each newline
  const contentParagraphs = post.content.split('\n').map((paragraph, index) => (
    <p key={index} className="mb-6 leading-relaxed text-gray-700">
      {paragraph}
    </p>
  ));

  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
      <header className={`relative h-80 ${post.image_bg_class} overflow-hidden rounded-t-xl`}>
         {customImageContent ? customImageContent : <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
            <div className="flex items-center space-x-4">
                <div className="flex items-center bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                    <CalendarIcon className="w-4 h-4 mr-1.5" />
                    <span>{post.date}</span>
                </div>
                 <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                    {post.category}
                </span>
            </div>
        </div>
      </header>
       <div className="p-6 md:p-8">
            <div className="flex items-center space-x-3 mb-8 -mt-16 relative z-10">
                <img 
                    src={post.author_avatar_url} 
                    alt={post.author_name}
                    className="w-12 h-12 rounded-full border-4 border-white shadow-md"
                />
                <div>
                     <span className="font-semibold text-gray-800 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md">{post.author_name}</span>
                </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {post.title}
            </h1>
            
            <div className="prose prose-lg max-w-none">
                 {contentParagraphs}
            </div>
        </div>
    </article>
  );
};

export default PostPage;
