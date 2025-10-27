export interface Post {
  id: string;
  type: 'featured' | 'card';
  category: string;
  title: string;
  description: string;
  image_url: string;
  image_bg_class?: string;
  custom_image_type?: 'seo_illustration' | 'network_icon';
  author_name: string;
  author_avatar_url: string;
  date: string;
  content: string;
}
