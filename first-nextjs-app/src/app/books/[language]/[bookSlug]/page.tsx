// app/books/[language]/[bookSlug]/page.tsx

import Link from 'next/link';


interface Review {
  reviewId: string; // Unique identifier for the review (this will be reviewId in the URL)
  author: string;
  rating: number; // e.g., 1-5 stars
  text: string;
}

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
  
// NEW: Function to simulate fetching reviews for a specific book
const getReviewsForBook = async (language: string, bookSlug: string): Promise<Review[]> => {
  const bookKey = `${language}-${bookSlug}`;
  switch (bookKey) {
    case 'englishbooks-book1':
      return [
        { reviewId: 'review1', author: 'Alice Smith', rating: 5, text: 'A truly captivating novel! Highly recommend.' },
        { reviewId: 'review2', author: 'Bob Johnson', rating: 4, text: 'Enjoyed it, but some parts felt a bit slow.' },
      ];
    case 'tamilbooks-kural':
      return [
        { reviewId: 'review-a', author: 'Priya Rajan', rating: 5, text: 'Timeless wisdom that resonates deeply.' },
        { reviewId: 'review-b', author: 'Kumar Devan', rating: 5, text: 'A must-read for everyone.' },
      ];
    // Add cases for other books as needed
    default:
      return []; // No reviews found for this book
  }
};


  const BookDetailPage = async ({ params }: BookDetailPageProps) => {
    // Await params for both language and bookSlug
    const { language, bookSlug } = await params;
  
    const book = await getBookContent(language, bookSlug);
    const reviews = await getReviewsForBook(language, bookSlug); // NEW: Fetch reviews

  
    if (!book) {
      // You might want to use Next.js's notFound() function here for a 404 page
      // import { notFound } from 'next/navigation';
      // notFound();
      return <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2em', color: '#888' }}>Book not found!</div>;
    }

    return (
      <div style={{ maxWidth: '800px', margin: '40px auto', padding: '30px', border: '1px solid #e0e0e0', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.05)', backgroundColor: '#fff' }}>
        <h1 style={{ fontSize: '2.5em', color: '#333', marginBottom: '10px' }}>{book.title}</h1>
        <p style={{ fontSize: '1.2em', color: '#666', fontStyle: 'italic' }}><strong>Author:</strong> {book.author}</p>
        
        <div style={{ borderTop: '1px solid #eee', marginTop: '20px', paddingTop: '20px', lineHeight: '1.6' }}>
          <p>{book.content}</p>
        </div>
  
        <p style={{ marginTop: '30px', marginBottom: '20px', textAlign: 'center' }}>
          <Link href={`/books/${language}`} style={{ color: '#0070f3', textDecoration: 'none', fontWeight: 'bold' }}>
            &larr; Back to {language.replace('books', ' Books')}
          </Link>
        </p>
  
        {/* NEW: Section for Reviews */}
        <div style={{ borderTop: '1px solid #eee', marginTop: '30px', paddingTop: '30px' }}>
          <h2 style={{ fontSize: '1.8em', color: '#333', marginBottom: '20px' }}>Customer Reviews ({reviews.length})</h2>
          {reviews.length > 0 ? (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {reviews.map((review) => (
                <li key={review.reviewId} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#fdfdfd' }}>
                  <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                    Review by: {review.author} (Rating: {review.rating}/5)
                  </p>
                  <p style={{ marginBottom: '10px', color: '#555' }}>{review.text}</p>
                  {/* Link to the individual review page */}
                  <Link 
                    href={`/books/${language}/${bookSlug}/reviews/${review.reviewId}`}
                    style={{ color: '#28a745', textDecoration: 'none', fontSize: '0.9em', fontWeight: 'bold' }}
                  >
                    Read full review &rarr;
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ color: '#777' }}>No reviews yet for this book. Be the first to write one!</p>
          )}
        </div>
  
      </div>
    );
  
    // return (
    //   <div>
    //     <h1>{book.title}</h1>
    //     <p><strong>Author:</strong> {book.author}</p>
    //     <div style={{ borderTop: '1px solid #eee', marginTop: '20px', paddingTop: '20px' }}>
    //       <p>{book.content}</p>
    //     </div>
    //     <p><Link href={`/books/${language}`}>Back to {language.replace('books', ' Books')}</Link></p>
    //   </div>
    // );
  };
  
  export default BookDetailPage;