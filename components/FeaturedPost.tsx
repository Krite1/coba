
import React from 'react';
import { CheckCircleIcon, ArrowRightIcon } from './icons';

const FeaturedPost: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
      <div className="bg-teal-400 h-64 flex items-center justify-center p-8">
        <img src="https://i.imgur.com/4g5g5aH.png" alt="Investment illustration" className="max-h-full object-contain" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <CheckCircleIcon className="w-4 h-4 mr-1.5 text-gray-500" />
            Featured
          </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Memahami Peluang dan Resiko Investasi Reksadana bagi Kaum Millennial
        </h2>
        <p className="text-gray-600 mb-6 text-base">
          Investasi bukan lagi hal tabu, peluang dan resiko investasi reksadana setidaknya telah sedikit didengar oleh usia produktif hingga dewasa. N...
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
