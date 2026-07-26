import banner from '../assets/images/banner.webp'
import banner1 from '../assets/images/banner1.webp'
import banner2 from '../assets/images/banner2.webp'

export const blogs = [
  {
    id: 1,
    image: banner,
    date: '01 Jan, 2024',
    comments: 12,
    author: 'Admin',
    title: 'Organic Food & Vegetable Tips',
    description: 'Discover how to choose the freshest organic produce and store it properly for maximum nutrition and flavor.',
    content: 'Eating organic fruits and vegetables is one of the best ways to support your health and the environment. Look for seasonal produce at local markets, wash items thoroughly, and store leafy greens in breathable bags. Planning weekly meals around what is in season helps reduce waste and saves money.',
  },
  {
    id: 2,
    image: banner1,
    date: '15 Feb, 2024',
    comments: 8,
    author: 'Admin',
    title: 'Healthy Lifestyle Benefits',
    description: 'Learn how a balanced diet with fresh groceries can improve energy, immunity, and overall wellbeing.',
    content: 'A healthy lifestyle starts in the kitchen. Incorporating whole grains, lean proteins, and colorful vegetables into daily meals supports sustained energy and better sleep. Small changes like swapping processed snacks for fresh fruit make a meaningful difference over time.',
  },
  {
    id: 3,
    image: banner2,
    date: '20 Mar, 2024',
    comments: 15,
    author: 'Admin',
    title: 'Fresh Fruits for Daily Life',
    description: 'Why adding a variety of fresh fruits to your diet keeps you hydrated, energized, and satisfied.',
    content: 'Fruits are nature\'s perfect snack — packed with vitamins, fiber, and natural sweetness. Try building a rainbow plate with berries, citrus, and tropical fruits. Smoothies, fruit bowls, and simple salads are easy ways to enjoy more produce every day.',
  },
]

export const getBlogById = (id) => blogs.find((b) => b.id === Number(id))
