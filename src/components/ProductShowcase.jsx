import React from 'react'
import Container from './layout/Container'
import fruit from '../assets/images/fruit.webp'
import { FaArrowRight, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const ProductShowcase = ({ allData,
    title,
    link,
    showViewAll = true ,
    hover = false, }) => {

    function star(count) {
        let halfStar = count.toString().split('.')[1]
        let index = Math.floor(count)
        let arr = []
        for (let i = 1; i <= 5; i++) {
            if (i <= count) arr.push("color")
            else arr.push(i)
        }
        if (halfStar) arr[index] = "half"
        return arr
    }

    const itemsPerRow =
    window.innerWidth >= 768
        ? 6
        : 2;

    return (
        <Container>
            <div className="overflow-hidden">
                <div className="flex justify-between mb-5 lg:mb-8 mt-2 lg:mt-15">
                    <h2 className="text-lg lg:text-hsize font-semibold">{title}</h2>
                    {showViewAll && (
                        <Link to={link} className="text-primary flex gap-3 text-lg lg:text-base font-medium">
                            View All <FaArrowRight />
                        </Link>
                    )}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-6 gap-5 mb-5 lg:mb-15">
                    {allData.map((item, idx) => {
                        const positionInRow = idx % itemsPerRow;
                        const isNearRightEdge = positionInRow >= itemsPerRow - 2;

                        const rowIndex = Math.floor(idx / itemsPerRow);
                        const lastRowIndex = Math.floor((allData.length - 1) / itemsPerRow);
                        const isBottomRow = rowIndex > 0 && rowIndex === lastRowIndex;

                        return (
                            <div
                                key={idx}
                                className="w-full border border-gry hover:border-primary hover:text-primary p-4 lg:p-6 rounded-md relative group duration-300 text-xs lg:text-base"
                            >
                                <img src={fruit} alt='banner' />
                                {item.price
                                    ? <h3 className='pt-4'>{(item.name || item.title).slice(0, 16)}...</h3>
                                    : <h3 className='pt-4'>{item.name || item.title}</h3>}
                                <p>{item.price && item.price}</p>
                                <p>{item.rating && item.rating}</p>
                                <div className="flex">
                                    {item.rating && star(item.rating).map((s, i) => (
                                        s === "color"
                                            ? <FaStar key={i} className="text-yellow-400" />
                                            : s === 'half'
                                                ? <FaStarHalfAlt key={i} className="text-yellow-400" />
                                                : <FaStar key={i} className="text-gry" />
                                    ))}
                                </div>

                                {hover && (
                                <div className="hidden lg:block">
                                    <div
                                        className={` w-[210%] h-133.5 rounded-md bg-white absolute m-2 hidden group-hover:block group-hover:border-primary duration-300 z-20 shadow-lg p-4 ${
                                        isNearRightEdge ? "right-[-9px]" : "left-[-9px]"
                                        } ${isBottomRow ? "bottom-[-9px]" : "top-[-9px]"}`}
                                    >
                                        <img src={fruit} alt="fruit" className='w' />

                                        <h3 className="pt-4 text-lg font-medium">
                                        {item.name || item.title}
                                        </h3>

                                        <p className="text-primary font-semibold">${item.price}</p>

                                        <div className="flex mt-2">
                                        {item.rating &&
                                            star(item.rating).map((s, i) =>
                                            s === "color" ? (
                                                <FaStar key={i} className="text-yellow-400" />
                                            ) : s === "half" ? (
                                                <FaStarHalfAlt key={i} className="text-yellow-400" />
                                            ) : (
                                                <FaStar key={i} className="text-gray-300" />
                                            )
                                            )}
                                        </div>
                                    </div>
                                </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}

export default ProductShowcase
