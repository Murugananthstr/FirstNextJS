import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation'

import ReviewCard, {Review} from '../../../../../../components/ReviewCard';


interface BookReviewPageProps {
    // The 'params' prop will contain the dynamic segments from the URL.
    // In a server component context, 'params' is an awaitable object.
    // We type it as the *resolved* shape, assuming we will await it immediately.
    params: {
      language: string;
      bookSlug: string;
      reviewId : string;
    };
  }

  // You would typically define this interface in a shared types file
// or directly in the file where it's used if it's very specific.
// export interface Review {
//   id: string;
//   author: string;
//   rating: number; // e.g., 1-5 stars
//   text: string;
//   // Add more fields like date, title, etc., if your reviews have them
// }

/**
 * Simulates fetching a specific review for a book based on its language,
 * book slug, and the review's unique ID.
 * In a real application, this would involve making an API call or
 * querying a database.
 *
 * @param language The language category of the book (e.g., 'englishbooks').
 * @param bookSlug The unique slug of the book (e.g., 'book1', 'kural').
 * @param reviewId The unique ID of the review (e.g., 'review1', 'review-a').
 * @returns A Promise that resolves to the Review object if found, or null otherwise.
 */
export const getReviewById = async (language: string, bookSlug: string, reviewId: string): Promise<Review | null> => {
  // Simulate a delay for network latency (remove in production if not needed)
  await new Promise(resolve => setTimeout(resolve, 100));

  // --- Simulated Data Source ---
  // In a real app, this would be replaced with actual API calls or database lookups.
  const allReviewsData: { [key: string]: Review[] } = {
    'englishbooks-book1': [
      { id: 'review1', author: 'Alice Smith', rating: 5, text: 'A truly captivating novel! Highly recommend this masterpiece. The plot twists kept me on the edge of my seat from beginning to end. A must-read for anyone who loves a good story!' },
      { id: 'review2', author: 'Bob Johnson', rating: 4, text: 'Enjoyed it, but some parts felt a bit slow. The characters were well-developed, but the pacing could have been better in the middle section. Still a solid read overall.' },
    ],
   'englishbooks-book2':  [
        { id: 'review1', author: 'Ananth1', rating: 5, text: 'A truly captivating novel! Highly recommend.' },
        { id: 'review2', author: 'Ananth2', rating: 2, text: 'Enjoyed it, but some parts felt a bit slow.' },
      ],
    'tamilbooks-kural': [
      { id: 'review-a', author: 'Priya Rajan', rating: 5, text: 'Timeless wisdom that resonates deeply even today. Thirukkural offers profound insights into life, ethics, and morality, relevant for all ages.' },
      { id: 'review-b', author: 'Kumar Devan', rating: 5, text: 'A must-read for everyone, regardless of background. The teachings are universal and inspiring. I find myself revisiting its verses frequently.' },
    ],
    'hindibooks-ramayana': [
        { id: 'review-x', author: 'Arjun Singh', rating: 5, text: 'An epic narrative that teaches profound lessons. The characters are iconic and the story is truly timeless.' },
    ],
    // Add reviews for other books as needed
  };
  // --- End Simulated Data Source ---

  const bookReviews = allReviewsData[`${language}-${bookSlug}`] || [];

  // Find the specific review by its ID
  const foundReview = bookReviews.find(review => review.id === reviewId);

  return foundReview || null; // Return the review or null if not found
};

const BookReview = async ({params}: BookReviewPageProps) => {

  const { language, bookSlug, reviewId } = await params;
  const review = await getReviewById(language, bookSlug, reviewId);

  if (!review) {
    notFound();
  }

  const displayLanguage = language.replace('books', ' Books').replace('english', 'English').replace('tamil', 'Tamil').replace('hindi', 'Hindi');


  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg my-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Full Review</h1>
      
      {/* Render the ReviewCard for the single full review */}
      <ReviewCard
        review={review}
        bookLanguage={language}
        bookSlug={bookSlug}
        showFullReviewLink={false} // IMPORTANT: Don't show the link on the full review page
      />

      <div className="flex justify-center gap-4 mt-8">
        {/* Link back to the specific book's detail page */}
        <Link 
          href={`/books/${language}/${bookSlug}`} 
          className="inline-block px-5 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          &larr; Back to Book Details
        </Link>
        {/* Link back to the list of books in that language */}
        <Link 
          href={`/books/${language}`} 
          className="inline-block px-5 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition duration-300 ease-in-out"
        >
          Back to {displayLanguage}
        </Link>
      </div>
    </div>
  );
}

export default BookReview