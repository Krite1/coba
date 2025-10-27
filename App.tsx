import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import PostCard from './components/PostCard';
import AdWidget from './components/AdWidget';
import TrendingWidget from './components/TrendingWidget';
import { Post } from './types';

// CSV data embedded as a string
const csvData = `id,type,category,title,description,image_url,image_bg_class,custom_image_type
1,featured,Featured,"Memahami Peluang dan Resiko Investasi Reksadana bagi Kaum Millennial","Investasi bukan lagi hal tabu, peluang dan resiko investasi reksadana setidaknya telah sedikit didengar oleh usia produktif hingga dewasa. N...","https://i.imgur.com/4g5g5aH.png",,
2,card,SEO,"Kartu Virtual untuk Pembayaran Iklan: Iklan Facebook, Iklan Google, dan Iklan TikTok","Ulasan lengkap mengenai penggunaan kartu virtual untuk pembayaran iklan digital.","","bg-indigo-400",seo_illustration
3,card,"Info Menarik","Aquila Project, PPC Alternatif Google AdSense","Jika mendengar Advertising Network, pasti yang terlintas di pikiran adalah Google AdSense.","","bg-blue-500",network_icon`;

// Simple CSV parser function
function parseCSV(csvText: string): Post[] {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  
  const data = lines.slice(1).map(line => {
    // A simple regex to split by commas but ignore commas inside double quotes
    const values = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];
    
    return headers.reduce((obj, header, index) => {
      const value = (values[index] || '').replace(/"/g, '').trim();
      // @ts-ignore
      obj[header] = value;
      return obj;
    }, {} as any);
  });
  
  return data as Post[];
}

const customImageComponents: { [key: string]: React.ReactNode } = {
  seo_illustration: (
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
  ),
  network_icon: (
     <div className="absolute inset-0 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path><path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"></path><path d="M12 16a4 4 0 0 0-4-4"></path><path d="M12 16a4 4 0 0 0 4-4"></path><path d="M8 12a4 4 0 0 0-4 4"></path><path d="M16 12a4 4 0 0 0 4 4"></path></svg>
    </div>
  ),
};


const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parsedData = parseCSV(csvData);
    setPosts(parsedData);
    setLoading(false);
  }, []);

  const featuredPost = posts.find(p => p.type === 'featured');
  const cardPosts = posts.filter(p => p.type === 'card');

  return (
    <div className="bg-[#fdfaf3] min-h-screen font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {loading ? (
              <p>Loading posts...</p>
            ) : (
              <>
                {featuredPost && <FeaturedPost post={featuredPost} />}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {cardPosts.map(post => (
                    <PostCard 
                      key={post.id} 
                      post={post}
                      customImageContent={post.custom_image_type ? customImageComponents[post.custom_image_type] : undefined}
                    />
                  ))}
                </div>
              </>
            )}
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