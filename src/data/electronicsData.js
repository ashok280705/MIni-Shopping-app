const electronics = [
    {
      category: 'Mobile',
      id:1,
      products: [
        { brand: 'Apple', model: 'iPhone 15', price: 79999 },
        { brand: 'Apple', model: 'iPhone 14', price: 68999 },
        { brand: 'Apple', model: 'iPhone 13 Mini', price: 59999 },
  
        { brand: 'Samsung', model: 'Galaxy S24', price: 74999 },
        { brand: 'Samsung', model: 'Galaxy A54', price: 34999 },
        { brand: 'Samsung', model: 'Galaxy M14', price: 13999 },
  
        { brand: 'OnePlus', model: '11R', price: 39999 },
        { brand: 'OnePlus', model: 'Nord CE 3', price: 24999 },
        { brand: 'OnePlus', model: 'Nord N20 SE', price: 13999 },
  
        { brand: 'Xiaomi', model: 'Redmi Note 13 Pro', price: 23999 },
        { brand: 'Xiaomi', model: 'Redmi 12', price: 11999 },
        { brand: 'Xiaomi', model: 'POCO X5', price: 16999 },
  
        { brand: 'Realme', model: 'Narzo 60 Pro', price: 23999 },
        { brand: 'Realme', model: '11x 5G', price: 12999 },
        { brand: 'Realme', model: 'C55', price: 10999 }
      ]
    },
    {
      category: 'Laptops',
      id:2,
      products: [
        { brand: 'Dell', model: 'Inspiron 15', price: 55999 },
        { brand: 'Dell', model: 'XPS 13', price: 124999 },
        { brand: 'Dell', model: 'Vostro 3400', price: 49999 },
  
        { brand: 'HP', model: 'Pavilion x360', price: 62999 },
        { brand: 'HP', model: 'Victus 16', price: 82999 },
        { brand: 'HP', model: 'EliteBook 840', price: 104999 },
  
        { brand: 'Lenovo', model: 'IdeaPad Slim 5', price: 48999 },
        { brand: 'Lenovo', model: 'Yoga Slim 7', price: 72999 },
        { brand: 'Lenovo', model: 'ThinkPad E14', price: 79999 },
  
        { brand: 'Asus', model: 'Vivobook 15', price: 45999 },
        { brand: 'Asus', model: 'ROG Strix G15', price: 99999 },
        { brand: 'Asus', model: 'Zenbook 14', price: 84999 },
  
        { brand: 'Acer', model: 'Aspire 5', price: 41999 },
        { brand: 'Acer', model: 'Swift Go', price: 54999 },
        { brand: 'Acer', model: 'Predator Helios Neo', price: 92999 }
      ]
    },
    {
      category: 'Tablets',
      id:3,
      products: [
        { brand: 'Apple', model: 'iPad Air', price: 58999 },
        { brand: 'Apple', model: 'iPad 9th Gen', price: 30999 },
        { brand: 'Apple', model: 'iPad Pro 11"', price: 84999 },
  
        { brand: 'Samsung', model: 'Galaxy Tab S8', price: 50999 },
        { brand: 'Samsung', model: 'Galaxy Tab A8', price: 18999 },
        { brand: 'Samsung', model: 'Galaxy Tab S6 Lite', price: 30999 },
  
        { brand: 'Realme', model: 'Pad X', price: 19999 },
        { brand: 'Realme', model: 'Pad 2', price: 16999 },
        { brand: 'Realme', model: 'Pad Mini', price: 13999 },
  
        { brand: 'Lenovo', model: 'Tab M10', price: 14999 },
        { brand: 'Lenovo', model: 'Yoga Tab 11', price: 24999 },
        { brand: 'Lenovo', model: 'Tab P11 Pro', price: 32999 },
  
        { brand: 'Xiaomi', model: 'Pad 6', price: 26999 },
        { brand: 'Xiaomi', model: 'Pad 5', price: 24999 },
        { brand: 'Xiaomi', model: 'Redmi Pad SE', price: 13999 }
      ]
    },
    {
      category: 'Smart Watches',
      id:4,
      products: [
        { brand: 'Apple', model: 'Watch Series 9', price: 45999 },
        { brand: 'Apple', model: 'Watch SE', price: 29999 },
        { brand: 'Apple', model: 'Watch Ultra 2', price: 89999 },
  
        { brand: 'Samsung', model: 'Galaxy Watch 6', price: 29999 },
        { brand: 'Samsung', model: 'Watch 5 Pro', price: 43999 },
        { brand: 'Samsung', model: 'Galaxy Fit 3', price: 4999 },
  
        { brand: 'Boat', model: 'Storm Pro', price: 2499 },
        { brand: 'Boat', model: 'Xtend Plus', price: 2799 },
        { brand: 'Boat', model: 'Lunar Peak', price: 3499 },
  
        { brand: 'Noise', model: 'ColorFit Pro 4', price: 2999 },
        { brand: 'Noise', model: 'NoiseFit Halo', price: 3499 },
        { brand: 'Noise', model: 'Ultra 3', price: 4499 },
  
        { brand: 'Fire-Boltt', model: 'Phoenix AMOLED', price: 3499 },
        { brand: 'Fire-Boltt', model: 'Invincible Plus', price: 4499 },
        { brand: 'Fire-Boltt', model: 'Ninja Call Pro Max', price: 1899 }
      ]
    },
    {
      category: 'Televisions',
      id:5,
      products: [
        { brand: 'Sony', model: 'Bravia 55X80L', price: 85999 },
        { brand: 'Sony', model: 'Bravia 43X74K', price: 61999 },
        { brand: 'Sony', model: 'Bravia 65X75K', price: 104999 },
  
        { brand: 'LG', model: 'OLED C2 55"', price: 139999 },
        { brand: 'LG', model: 'NanoCell 50NANO77', price: 72999 },
        { brand: 'LG', model: 'UHD 43UQ75', price: 49999 },
  
        { brand: 'Samsung', model: 'The Frame 55"', price: 99999 },
        { brand: 'Samsung', model: 'Crystal UHD BU8000', price: 45999 },
        { brand: 'Samsung', model: 'Smart TV T5350', price: 28999 },
  
        { brand: 'Xiaomi', model: 'Mi QLED 4K 55"', price: 59999 },
        { brand: 'Xiaomi', model: 'Redmi Smart TV X43', price: 29999 },
        { brand: 'Xiaomi', model: 'Smart TV 5X 43"', price: 39999 },
  
        { brand: 'TCL', model: 'C645 QLED 55"', price: 42999 },
        { brand: 'TCL', model: 'P635 4K 43"', price: 26999 },
        { brand: 'TCL', model: 'S5400A 32"', price: 14999 }
      ]
    }
  ];
  
  export default electronics;