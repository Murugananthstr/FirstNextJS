// app/books/[language]/[bookSlug]/page.tsx

import Link from 'next/link';


interface BookDetailPageProps {
    params: {
      language: string; // e.g., 'englishbooks'
      bookSlug: string; // e.g., 'book1', 'kural'
    };
  }
  
  // In a real app, you'd fetch the specific book's content from a database/API
  const getBookContent = async (language: string, bookSlug: string) => {
    // Simulate fetching content
    const bookKey = `${language}-${bookSlug}`;
    switch (bookKey) {
      case 'englishbooks-book1':
        return { title: 'The Great English Novel', author: 'Jane Doe', content: 'This is the amazing content of The Great English Novel...' };
      case 'englishbooks-book2':
        return { title: 'English Poetry Collection', author: 'Various Poets', content: 'A collection of beautiful English poems...' };
      case 'tamilbooks-kural':
        return { title: 'Thirukkural', author: 'Thiruvalluvar', content: 'Ancient Tamil classic with couplets on ethics and morality...' };
      case 'tamilbooks-ponniyan-selvan':
          return { title: 'Ponniyan Selvan', author: 'Kalki Krishnamurthy', content: 'A historical novel about the Chola dynasty...' };
      case 'hindibooks-ramayana':
        return { title: 'Ramayana', author: 'Valmiki', content: 'The epic journey of Rama...' };
      case 'hindibooks-mahabharata':
        return { title: 'Mahabharata', author: 'Vyasa', content: 'An ancient Indian epic poem...' };
      default:
        return null; // Or throw an error for not found
    }
  };
  
  const BookDetailPage = async ({ params }: BookDetailPageProps) => {
    // Await params for both language and bookSlug
    const { language, bookSlug } = await params;
  
    const book = await getBookContent(language, bookSlug);
  
    if (!book) {
      // You might want to use Next.js's notFound() function here for a 404 page
      // import { notFound } from 'next/navigation';
      // notFound();
      return <div>Book not found!</div>;
    }
  
    return (
      <div>
        <h1>{book.title}</h1>
        <p><strong>Author:</strong> {book.author}</p>
        <div style={{ borderTop: '1px solid #eee', marginTop: '20px', paddingTop: '20px' }}>
          <p>{book.content}</p>
        </div>
        <p><Link href={`/books/${language}`}>Back to {language.replace('books', ' Books')}</Link></p>
      </div>
    );
  };
  
  export default BookDetailPage;