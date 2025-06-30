// app/books/[language]/page.tsx
import Link from 'next/link';


// Define the type for a single book object
export interface Book {
    slug: string;
    title: string;
  }
  
  // Define the return type for the getBooksByLanguage method
  // It returns a Promise that resolves to an array of Book objects
  export type GetBooksByLanguageReturnType = Promise<Book[]>;
  
  // Or, if you're defining the function directly, you can type it like this:
  // const getBooksByLanguage: (language: string) => Promise<Book[]> = async (language) => {
  //   // ... function body ...
  //   return []; // Example return
  // };
  
  

interface LanguageBooksPageProps {
  params: {
    language: string; // e.g., 'englishbooks', 'tamilbooks'
  };
}

// In a real app, you'd fetch books based on the language
// const getBooksByLanguage = async (language: string) => {
//   // Simulate fetching data
//   switch (language) {
//     case 'englishbooks':
//       return [{ slug: 'book1', title: 'The Great English Novel' }, { slug: 'book2', title: 'English Poetry Collection' }];
//     case 'tamilbooks':
//       return [{ slug: 'kural', title: 'Thirukkural' }, { slug: 'ponniyan-selvan', title: 'Ponniyan Selvan' }];
//     case 'hindibooks':
//       return [{ slug: 'ramayana', title: 'Ramayana' }, { slug: 'mahabharata', title: 'Mahabharata' }];
//     default:
//       return [];
//   }
// };

// Example of how the original function would now be typed:
  // (You would put the interface and type definitions above this function in your file)
  const getBooksByLanguage = async (language: string): Promise<Book[]> => { // <-- Here's where the return type is applied
    // Simulate fetching data
    switch (language) {
      case 'englishbooks':
        return [
          { slug: 'book1', title: 'The Great English Novel' },
          { slug: 'book2', title: 'English Poetry Collection' }
        ];
      case 'tamilbooks':
        return [
          { slug: 'kural', title: 'Thirukkural' },
          { slug: 'ponniyan-selvan', title: 'Ponniyan Selvan' }
        ];
      case 'hindibooks':
        return [
          { slug: 'ramayana', title: 'Ramayana' },
          { slug: 'mahabharata', title: 'Mahabharata' }
        ];
      default:
        return []; // Returns an empty array of Book
    }
  };

const LanguageBooksPage = async ({ params }: LanguageBooksPageProps) => {
  const { language } = await params; // Await params in Server Component

  const books = await getBooksByLanguage(language);

  const displayLanguage = language.replace('books', ' Books').replace('english', 'English').replace('tamil', 'Tamil').replace('hindi', 'Hindi');

  return (
    <div>
      <h1 style={{ color: 'Green', fontSize:25 }}>{displayLanguage} Collection</h1>
      <div style={{ borderTop: '1px solid #eee', marginTop: '20px', paddingTop: '20px' }}/>
      {books.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 20 }}>
          {books.map((book) => (
            <li key={book.slug}>
              <Link href={`/books/${language}/${book.slug}`}>
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found for this language.</p>
      )}
    </div>
  );
};

export default LanguageBooksPage;