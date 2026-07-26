import React from 'react'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { FaStar, FaHeart, FaEye, FaShoppingBag } from 'react-icons/fa'
import { addToCart } from '../slices/cartSlice'
import { toggleWishlist, selectIsInWishlist } from '../slices/wishlistSlice'
import { toast } from 'react-toastify'
import fruit from '../assets/images/fruit.webp'

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const isWishlisted = useSelector(selectIsInWishlist(product.id))

  const handleAddToCart = (e) => {
    e.stopPropagation()
    dispatch(addToCart(product))
    toast.success(`${product.name} added to cart`)
  }

  const handleWishlist = (e) => {
    e.stopPropagation()
    dispatch(toggleWishlist(product))
    toast.info(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist')
  }

  return (
    <div className="border-t border-b border-l border-r border-gray-200 p-4 transition-all duration-300 relative group overflow-hidden">
      {product.sale && (
        <div className="absolute top-3 left-3 z-20">
          <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">Sale 50%</span>
        </div>
      )}

      <div className="h-48 mb-4 relative overflow-hidden flex items-center justify-center">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image || fruit}
            alt={product.name}
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            onClick={handleWishlist}
            className={`w-8 h-8 bg-white rounded-full flex items-center justify-center shadow transition-colors ${
              isWishlisted ? 'text-red-500' : 'text-gray-600 hover:bg-primary hover:text-white'
            }`}
          >
            <FaHeart size={12} />
          </button>
          <Link
            to={`/product/${product.id}`}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-primary hover:text-white transition-colors text-gray-600"
          >
            <FaEye size={12} />
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-1 mb-2 text-orange-400">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            size={12}
            fill={i < product.ratingCount ? 'currentColor' : 'none'}
            strokeWidth={i < product.ratingCount ? 0 : 1.5}
            className={i < product.ratingCount ? '' : 'text-gray-300'}
          />
        ))}
      </div>

      <Link to={`/product/${product.id}`}>
        <h3 className="font-pop font-medium text-sm text-gray-800 mb-2 hover:text-primary">{product.name}</h3>
      </Link>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-pop font-bold text-gray-800">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="font-pop text-sm text-gray-400 line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={handleAddToCart}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-colors bg-white border border-gray-200 text-gray-600 hover:bg-primary hover:text-white"
        >
          <FaShoppingBag size={14} />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
