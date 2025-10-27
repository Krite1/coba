
import React from 'react';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import PostCard from './components/PostCard';
import AdWidget from './components/AdWidget';
import TrendingWidget from './components/TrendingWidget';

const App: React.FC = () => {
  return (
    <div className="bg-[#fdfaf3] min-h-screen font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <FeaturedPost />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PostCard
                category="SEO"
                title="Kartu Virtual untuk Pembayaran Iklan: Iklan Facebook, Iklan Google, dan Iklan TikTok"
                description="Ulasan lengkap mengenai penggunaan kartu virtual untuk pembayaran iklan digital."
                imageUrl="https://picsum.photos/seed/seo/600/400"
                imageBgClass="bg-indigo-400"
                customImageContent={(
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-bold">ADS</span>
                        <div className="flex space-x-1">
                          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>
                      </div>
                      <div className="bg-gray-100 h-24 rounded flex items-center justify-center">
                        <svg className="w-12 h-12 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                      </div>
                      <div className="mt-2 h-4 bg-gray-200 rounded w-3/4"></div>
                       <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                )}
              />
              <PostCard
                category="Info Menarik"
                title="Aquila Project, PPC Alternatif Google AdSense"
                description="Jika mendengar Advertising Network, pasti yang terlintas di pikiran adalah Google AdSense."
                imageUrl="https://picsum.photos/seed/project/600/400"
                imageBgClass="bg-blue-500"
                customImageContent={(
                  <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path><path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"></path><path d="M12 16a4 4 0 0 0-4-4"></path><path d="M12 16a4 4 0 0 0 4-4"></path><path d="M8 12a4 4 0 0 0-4 4"></path><path d="M16 12a4 4 0 0 0 4 4"></path></svg>
                  </div>
                )}
              />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <AdWidget />
            <TrendingWidget />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default App;
