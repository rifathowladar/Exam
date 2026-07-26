import React, { useMemo } from 'react'
import { useSearchParams } from 'react-router'
import Container from '../components/layout/Container'
import ProductCard from '../components/ProductCard'
import { categories, products, getProductsByCategory, searchProducts } from '../data/products'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category') || ''
  const search = searchParams.get('search') || ''
  const sort = searchParams.get('sort') || 'default'

  const filtered = useMemo(() => {
    let list = search ? searchProducts(search) : getProductsByCategory(category)
    if (sort === 'price-low') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name))
    return list
  }, [category, search, sort])

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set(key, value)
    else next.delete(key)
    setSearchParams(next)
  }

  return (
    <Container className="py-12">
      <div className="flex gap-8">
        <aside className="w-64 shrink-0">
          <h3 className="font-pop font-bold text-lg mb-4">Categories</h3>
          <ul className="space-y-2 font-pop text-sm">
            <li>
              <button
                type="button"
                onClick={() => setSearchParams({})}
                className={`hover:text-primary ${!category && !search ? 'text-primary font-semibold' : 'text-gray-600'}`}
              >
                All Products
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat.slug}>
                <button
                  type="button"
                  onClick={() => setFilter('category', cat.slug)}
                  className={`hover:text-primary ${category === cat.slug ? 'text-primary font-semibold' : 'text-gray-600'}`}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="font-pop text-2xl font-bold">
                {search ? `Search: "${search}"` : category ? categories.find((c) => c.slug === category)?.name : 'Shop'}
              </h1>
              <p className="font-pop text-sm text-gray-500 mt-1">{filtered.length} products found</p>
            </div>
            <select
              value={sort}
              onChange={(e) => setFilter('sort', e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 font-pop text-sm"
            >
              <option value="default">Default Sorting</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <p className="font-pop text-gray-500 text-center py-20">No products found.</p>
          ) : (
            <div className="grid grid-cols-4 gap-0 border border-gray-200">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Shop
