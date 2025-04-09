
/**
 * WordPress API Service
 * Provides functions to interact with a WordPress site via the REST API
 */

// Get WordPress API URL from localStorage or use a demo URL
const getWordPressApiUrl = () => {
  const storedUrl = localStorage.getItem('wp_api_url');
  if (storedUrl) {
    // Remove trailing slash if present
    return storedUrl.replace(/\/$/, '');
  }
  
  // Fallback to environment variable or demo URL
  return process.env.WORDPRESS_API_URL || "https://demo.wp-api.org";
};

/**
 * Test connection to WordPress site
 * @param url WordPress site URL
 * @returns Promise that resolves if connection is successful
 */
export const testWordPressConnection = async (url: string): Promise<void> => {
  // Normalize URL (remove trailing slash)
  const normalizedUrl = url.replace(/\/$/, '');
  
  try {
    // Try to fetch the WP API root
    const response = await fetch(`${normalizedUrl}/wp-json/`);
    
    if (!response.ok) {
      throw new Error(`WordPress site not reachable (Status: ${response.status})`);
    }
    
    // Check if response contains expected WordPress API data
    const data = await response.json();
    
    if (!data.namespaces || !data.namespaces.includes('wp/v2')) {
      throw new Error('URL does not appear to be a WordPress site with REST API enabled');
    }
    
    // Connection successful
    return;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error('Could not connect to WordPress site');
    }
  }
};

/**
 * Fetch posts from WordPress
 * @param options Query parameters
 * @returns Promise with posts data
 */
export const getPosts = async (options: {
  page?: number;
  per_page?: number;
  categories?: number[];
  search?: string;
} = {}) => {
  const { page = 1, per_page = 10, categories, search } = options;
  
  let url = `${getWordPressApiUrl()}/wp-json/wp/v2/posts?_embed&page=${page}&per_page=${per_page}`;
  
  if (categories && categories.length > 0) {
    url += `&categories=${categories.join(',')}`;
  }
  
  if (search) {
    url += `&search=${encodeURIComponent(search)}`;
  }
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }
    
    return {
      posts: await response.json(),
      totalPages: parseInt(response.headers.get('X-WP-TotalPages') || '1', 10),
      total: parseInt(response.headers.get('X-WP-Total') || '0', 10)
    };
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    throw error;
  }
};

/**
 * Fetch a single post by ID
 * @param id Post ID
 * @returns Promise with post data
 */
export const getPost = async (id: number) => {
  try {
    const response = await fetch(`${getWordPressApiUrl()}/wp-json/wp/v2/posts/${id}?_embed`);
    
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching WordPress post ${id}:`, error);
    throw error;
  }
};

/**
 * Fetch categories from WordPress
 * @returns Promise with categories data
 */
export const getCategories = async () => {
  try {
    const response = await fetch(`${getWordPressApiUrl()}/wp-json/wp/v2/categories`);
    
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching WordPress categories:", error);
    throw error;
  }
};

/**
 * Fetch baby growth advice content from WordPress
 * This assumes you have posts with a specific category for baby growth advice
 * @returns Promise with advice content
 */
export const getBabyGrowthAdvice = async () => {
  // Assuming category ID 5 is for "Baby Growth Advice" - change as needed
  return getPosts({ categories: [5], per_page: 5 });
};
