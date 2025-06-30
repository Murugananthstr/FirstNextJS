// app/books/page.tsx
import Link from 'next/link';

const BooksOverviewPage = () => {
  const categories = ['englishbooks', 'tamilbooks', 'hindibooks'];

  return (
    <div>
      <h1>Welcome to Our Book Collection</h1>
      <div style={{ borderTop: '1px solid #eee', marginTop: '20px', paddingTop: '20px' }}/>
      <p>Please select a category to browse books:</p>
      <ul style={{ listStyle: 'none', padding: 20 }}>
        {categories.map((category) => (
          <li key={category}>
            <Link href={`/books/${category}`}>
              {category.replace('books', ' Books').replace('english', 'English').replace('tamil', 'Tamil').replace('hindi', 'Hindi')}
            </Link>
          </li>
        ))}
      </ul>
      <p>Or you could display a selection of featured books here.</p>
    </div>
  );
};

export default BooksOverviewPage;