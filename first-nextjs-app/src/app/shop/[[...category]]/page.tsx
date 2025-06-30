import React from 'react'

interface CategoryProps {
  params: {
    category: string[]; // Expecting an array of strings for dynamic routing    }
  }}


const CategoryPage = async ({params} :CategoryProps) => {
    const { category } = params;
    const categoryPath = category ? category.join('/') : 'All Products';

    return (
      <div>
        <h1>Shop Page</h1>
        <p>Viewing products in category: <strong>{categoryPath}</strong></p>
        {category && category.length > 0 ? (
          <p>Current category path: {category.join(' > ')}</p>
        ) : (
          <p>Displaying all products across all categories.</p>
        )}
  
        {/* Your product listing logic based on 'category' */}
      </div>
    );
  };

export default CategoryPage