
import React from 'react';

interface TrendingItemProps {
  title: string;
  imageUrl: string;
}

const TrendingItem: React.FC<TrendingItemProps> = ({ title, imageUrl }) => (
  <a href="#" className="flex items-center space-x-4 group">
    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <span className="text-gray-800 font-medium group-hover:text-orange-600 transition-colors">
      {title}
    </span>
  </a>
);

const TrendingWidget: React.FC = () => {
  const trendingPosts = [
    { title: 'Apa Itu EDU Backlink', imageUrl: 'https://picsum.photos/seed/trending1/100/100' },
    { title: 'Cara Mengatasi SIM Tidak Di-provisioning', imageUrl: 'https://picsum.photos/seed/trending2/100/100' },
    { title: 'Cara Mengaktifkan Kartu Telkomsel yang Hangus', imageUrl: 'https://picsum.photos/seed/trending3/100/100' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Trending Now</h3>
      <div className="space-y-6">
        {trendingPosts.map((post, index) => (
          <TrendingItem key={index} title={post.title} imageUrl={post.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default TrendingWidget;
