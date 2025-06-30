import React, { useState } from 'react';
import Electronicsdata from '../data/electronicsData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
const Electronic = () => {
  const dispatch = useDispatch();
  const [Selectedid, setSelectedid] = useState();
  const [electronics] = useState(Electronicsdata);
  const [SelectCatagories, setSelectCatagories] = useState('');
  const [Selected, setSelected] = useState();

  const groupedByBrand = Selected?.products.reduce((acc, product) => {
    if (!acc[product.brand]) {
      acc[product.brand] = [];
    }
    acc[product.brand].push(product);
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-[1fr_3fr] h-[91vh] bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Sidebar */}
      <div className="bg-gradient-to-br from-orange-100 via-orange-150 to-orange-200 p-5 shadow-xl h-[91vh]">
        <div className="slidebar h-full bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-3xl shadow-2xl border border-orange-300/50 backdrop-blur-sm">
          <div className="flex flex-col gap-4 p-7 h-full justify-center">
            {electronics.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedid(category.id);
                  setSelectCatagories(category.category);
                  const sel = electronics.find(e => e.category === category.category);
                  setSelected(sel);
                }}
                className={`px-7 py-4 rounded-2xl font-bold text-lg transition-all duration-400 transform hover:scale-110 hover:shadow-xl hover:-translate-y-1 active:scale-95 ${
                  Selectedid === category.id
                    ? 'bg-gradient-to-r from-white to-orange-50 text-orange-700 shadow-2xl scale-110 -translate-y-1 border-2 border-orange-400 font-extrabold'
                    : 'bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-white hover:to-orange-50 hover:text-orange-700 shadow-lg border border-orange-300/30'
                }`}
              >
                <span className="drop-shadow-sm">{category.category}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-500 p-6 w-[80vw]">
        <div className="h-[83vh] bg-gradient-to-br from-white/80 to-orange-50/50 rounded-3xl shadow-2xl border-2 border-orange-300/30 p-8 backdrop-blur-sm overflow-hidden">
          {/* Category Title */}
          <div className="category-header flex justify-center items-center mb-7 ">
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent text-5xl font-bold tracking-wide animate-pulse">
                {SelectCatagories || 'Select Category'}
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-orange-400 to-red-600 rounded-full"></div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="cards-container h-[85%] w-full bg-gradient-to-br from-orange-100/50 via-orange-200/30 to-amber-100/50 rounded-3xl p-6 border border-orange-300/20 shadow-inner overflow-y-auto space-y-8">
            {groupedByBrand &&
              Object.entries(groupedByBrand).map(([brand, products]) => (
                <div key={brand}>
                  <h2 className="text-2xl font-bold text-orange-600 mb-4">{brand}</h2>
                  <div className="flex gap-6 overflow-x-auto pb-4">
                    {products.map((product, idx) => (
                      <div
                        key={idx}
                        className="product-card group bg-gradient-to-br from-white to-orange-50/70 rounded-2xl p-4 shadow-lg border border-orange-200/50 w-[250px] flex-shrink-0"
                      >
                        {/* Image Placeholder */}
                        <div className="image-container h-48 w-full bg-gradient-to-br from-orange-200 to-amber-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                          <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                            <svg
                              className="w-12 h-12 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                            </svg>
                          </div>
                        </div>
                        <div className="product-info space-y-3">
                          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-700">
                            {product.model}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2">
                            Brand: {product.brand}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-orange-600">
                              ₹{product.price.toLocaleString('en-IN')}
                            </span>
                          </div>
                          <div className="button flex justify-center items-center w-42 h-12 rounded-2xl bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer group">
                            <button
                            onClick={()=>{
                              dispatch(addToCart(product))
                              
                            }}
                              className="text-white font-bold text-base px-6 py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 shadow-md hover:bg-gradient-to-l hover:from-emerald-600 hover:to-green-600 transition-all duration-200 group-hover:scale-105"
                            >
                              <span className="inline-flex items-center gap-2">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m1-13a1 1 0 11-2 0 1 1 0 012 0z" />
                                </svg>
                                Add to Cart
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronic;