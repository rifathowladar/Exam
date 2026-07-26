import fruit from '../assets/images/fruit.webp'
import banner from '../assets/images/banner.webp'
import banner1 from '../assets/images/banner1.webp'
import banner2 from '../assets/images/banner2.webp'

export const categories = [
  { name: 'Fresh Fruit', slug: 'fresh-fruits', image: fruit },
  { name: 'Fresh Vegetables', slug: 'vegetables', image: fruit },
  { name: 'Meat & Fish', slug: 'meat-fish', image: fruit },
  { name: 'Snacks', slug: 'snacks', image: fruit },
  { name: 'Beverages', slug: 'beverages', image: fruit },
  { name: 'Beauty & Health', slug: 'beauty-health', image: fruit },
  { name: 'Bread & Bakery', slug: 'bread-bakery', image: fruit },
  { name: 'Baking Needs', slug: 'baking-needs', image: fruit },
  { name: 'Cooking', slug: 'cooking', image: fruit },
  { name: 'Diabetic Food', slug: 'diabetic-food', image: fruit },
  { name: 'Dish Detergents', slug: 'dish-detergents', image: fruit },
  { name: 'Oil', slug: 'oil', image: fruit },
]

export const products = [
  { id: 1, name: 'Green Apple', price: 14.99, oldPrice: 20.99, ratingCount: 4, sale: true, category: 'fresh-fruits', image: banner, description: 'Crisp and juicy green apples, perfect for snacking or baking.' },
  { id: 2, name: 'Fresh Indian Malta', price: 20.0, oldPrice: null, ratingCount: 3, sale: false, category: 'fresh-fruits', image: banner1, description: 'Sweet and tangy Indian malta oranges packed with vitamin C.' },
  { id: 3, name: 'Chinese cabbage', price: 12.0, oldPrice: null, ratingCount: 4, sale: false, category: 'vegetables', image: fruit, description: 'Fresh Chinese cabbage ideal for stir-fries and salads.' },
  { id: 4, name: 'Green Lettuce', price: 9.0, oldPrice: 20.99, ratingCount: 5, sale: true, category: 'vegetables', image: banner2, description: 'Crunchy green lettuce leaves for healthy meals.' },
  { id: 5, name: 'Eggplant', price: 34.0, oldPrice: null, ratingCount: 3, sale: false, category: 'vegetables', image: banner, description: 'Fresh purple eggplants, great for grilling and curries.' },
  { id: 6, name: 'Big Potatoes', price: 20.0, oldPrice: null, ratingCount: 5, sale: false, category: 'vegetables', image: banner1, description: 'Premium quality potatoes for all your cooking needs.' },
  { id: 7, name: 'Corn', price: 20.0, oldPrice: null, ratingCount: 4, sale: false, category: 'fresh-fruits', image: fruit, description: 'Sweet golden corn on the cob, farm fresh.' },
  { id: 8, name: 'Fresh Cauliflower', price: 12.0, oldPrice: null, ratingCount: 5, sale: false, category: 'vegetables', image: banner2, description: 'White cauliflower heads, rich in nutrients.' },
  { id: 9, name: 'Green Capsicum', price: 9.0, oldPrice: 20.99, ratingCount: 4, sale: true, category: 'vegetables', image: banner, description: 'Vibrant green bell peppers with a crisp bite.' },
  { id: 10, name: 'Green Chili', price: 34.0, oldPrice: null, ratingCount: 5, sale: false, category: 'cooking', image: banner1, description: 'Spicy green chilies to add heat to your dishes.' },
]

export const getProductById = (id) => products.find((p) => p.id === Number(id))

export const getProductsByCategory = (slug) =>
  slug ? products.filter((p) => p.category === slug) : products

export const searchProducts = (query) => {
  const q = query.trim().toLowerCase()
  if (!q) return products
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.replace('-', ' ').includes(q)
  )
}
