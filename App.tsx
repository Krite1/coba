import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import PostCard from './components/PostCard';
import AdWidget from './components/AdWidget';
import TrendingWidget from './components/TrendingWidget';
import PostPage from './components/PostPage';
import { Post } from './types';

// CSV data embedded as a string, now with author, date, and content
const csvData = `id,type,category,title,description,image_url,image_bg_class,custom_image_type,author_name,author_avatar_url,date,content
1,featured,Featured,"Memahami Peluang dan Resiko Investasi Reksadana bagi Kaum Millennial","Investasi bukan lagi hal tabu, peluang dan resiko investasi reksadana setidaknya telah sedikit didengar oleh usia produktif hingga dewasa. N...","https://i.imgur.com/4g5g5aH.png",,,Arlina,"https://i.imgur.com/p3w0GgE.png",9/20/2023,"Konten lengkap untuk postingan Reksadana. Investasi reksadana adalah wadah untuk menghimpun dana dari masyarakat pemodal untuk selanjutnya diinvestasikan dalam portofolio efek oleh manajer investasi."
2,card,SEO,"Kartu Virtual untuk Pembayaran Iklan: Iklan Facebook, Iklan Google, dan Iklan TikTok","Ulasan lengkap mengenai penggunaan kartu virtual untuk pembayaran iklan digital.","","bg-indigo-400",seo_illustration,Budi,"https://i.imgur.com/p3w0GgE.png",9/21/2023,"Ini adalah konten lengkap tentang kartu virtual. Pembahasan mendalam tentang bagaimana VCC dapat mempermudah transaksi online Anda dengan aman."
3,card,"Info Menarik","Aquila Project, PPC Alternatif Google AdSense","Jika mendengar Advertising Network, Anda pasti sudah tidak asing mendengar kata ini. Sebagai seorang blogger pasti sudah sangat akrab dengan advertising network seperti Google Adsense, Mgid, Propeller Ads, Media.net, dan masih banyak lagi.","","bg-blue-500",network_icon,Arlina,"https://i.imgur.com/p3w0GgE.png",9/20/2023,"Jika mendengar Advertising Network, Anda pasti sudah tidak asing mendengar kata ini. Sebagai seorang blogger pasti sudah sangat akrab dengan advertising network seperti Google Adsense, Mgid, Propeller Ads, Media.net, dan masih banyak lagi. Advertising network atau yang biasa disebut PPC (pay per click) ini memang sudah menjadi sumber pendapatan tambahan bahkan pendapatan utama seorang blogger.\n\nSalah satu advertising network yang bisa Anda coba adalah Aquila Project. Aquila Project adalah prototipe advertising network yang berfokus pada privasi. Aquila Project menggunakan metode profiling dan targeting sederhana sehingga tidak membuat blog Anda menjadi berat/lelet dan tentunya sangat ramah privasi untuk pengunjung."`;


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
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  useEffect(() => {
    const parsedData = parseCSV(csvData);
    setPosts(parsedData);
    setLoading(false);

    const handleHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#\/post\/(\d+)$/);
      if (match) {
        setSelectedPostId(match[1]);
      } else {
        setSelectedPostId(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check hash on initial load

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const featuredPost = posts.find(p => p.type === 'featured');
  const cardPosts = posts.filter(p => p.type === 'card');
  const selectedPost = posts.find(p => p.id === selectedPostId);

  const renderHomePage = () => (
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
  );
  
  const renderPostPage = () => (
    <div className="lg:col-span-2 space-y-8">
      {selectedPost ? <PostPage post={selectedPost} customImageContent={selectedPost.custom_image_type ? customImageComponents[selectedPost.custom_image_type] : undefined}/> : <p>Post not found.</p>}
    </div>
  );

  return (
    <div className="bg-[#fdfaf3] min-h-screen font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          {selectedPostId ? renderPostPage() : renderHomePage()}

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
