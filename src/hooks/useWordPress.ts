
import { useState, useEffect } from 'react';
import * as wpApi from '../services/wordpressApi';

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
  [key: string]: any;
}

interface UsePostsResult {
  posts: Post[];
  isLoading: boolean;
  error: Error | null;
  totalPages: number;
  total: number;
  page: number;
  setPage: (page: number) => void;
}

export const usePosts = (options: {
  per_page?: number;
  categories?: number[];
  search?: string;
} = {}): UsePostsResult => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const result = await wpApi.getPosts({
          ...options,
          page
        });
        
        setPosts(result.posts);
        setTotalPages(result.totalPages);
        setTotal(result.total);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPosts();
  }, [page, options.per_page, options.categories, options.search]);
  
  return { posts, isLoading, error, totalPages, total, page, setPage };
};

export const usePost = (id: number | null) => {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    if (id === null) return;
    
    const fetchPost = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const result = await wpApi.getPost(id);
        setPost(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPost();
  }, [id]);
  
  return { post, isLoading, error };
};

export const useBabyGrowthAdvice = () => {
  const [advice, setAdvice] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    const fetchAdvice = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const result = await wpApi.getBabyGrowthAdvice();
        setAdvice(result.posts);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchAdvice();
  }, []);
  
  return { advice, isLoading, error };
};

