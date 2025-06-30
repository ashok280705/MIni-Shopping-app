import React from 'react'
import { useNavigate } from 'react-router-dom';
const Categories = () => {
  const Navigation=useNavigate();
    const categories = [
      { id: 1, name: 'Electronics', icon: '📱', items: '1200+ items', color: 'from-blue-400 to-blue-600', route: 'electronics' },
      { id: 2, name: 'Fashion', icon: '👕', items: '850+ items', color: 'from-pink-400 to-pink-600', route: 'fashion' },
      { id: 3, name: 'Home & Living', icon: '🏠', items: '650+ items', color: 'from-green-400 to-green-600', route: 'home-and-living' },
      { id: 4, name: 'Beauty', icon: '💄', items: '420+ items', color: 'from-purple-400 to-purple-600', route: 'beauty' },
      { id: 5, name: 'Sports', icon: '⚽', items: '380+ items', color: 'from-red-400 to-red-600', route: 'sports' },
      { id: 6, name: 'Books', icon: '📚', items: '290+ items', color: 'from-indigo-400 to-indigo-600', route: 'books' },
      { id: 7, name: 'Toys', icon: '🧸', items: '540+ items', color: 'from-yellow-400 to-orange-500', route: '/toys' },
      { id: 8, name: 'Automotive', icon: '🚗', items: '320+ items', color: 'from-gray-400 to-gray-600', route: '/automotive' },
      { id: 9, name: 'Health', icon: '🏥', items: '180+ items', color: 'from-teal-400 to-teal-600', route: '/health' },
      { id: 10, name: 'Groceries', icon: '🛒', items: '1500+ items', color: 'from-lime-400 to-lime-600', route: '/groceries' }
    ];
  

  return (
    <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 py-16 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-300 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            🛍️ Shop by Categories
          </h2>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            Discover amazing products across all categories with unbeatable deals
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Enhanced Categories Cards */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 pb-6" style={{ width: 'max-content' }}>
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="flex-shrink-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer border border-orange-200 transform hover:-translate-y-2 hover:scale-105 group"
                style={{ minWidth: '220px', animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl filter drop-shadow-sm">
                      {category.icon}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-gray-800 text-xl mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-500 text-sm mb-1">
                    {category.items}
                  </p>
                  
                  <div className="text-green-600 text-xs font-semibold mb-4">
                    ✨ Special Offers Available
                  </div>
                  
                  <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 py-3 rounded-full text-sm font-bold hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" onClick={()=>{
                    Navigation(category.route)
                  }}>
                    Browse Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
            <span className="text-orange-500 animate-bounce">←</span>
            <p className="text-gray-600 text-sm font-medium">
              Swipe to explore more categories
            </p>
            <span className="text-orange-500 animate-bounce" style={{animationDelay: '0.5s'}}>→</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories