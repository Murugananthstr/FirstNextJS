// src/components/ReviewCard.tsx
import React from 'react';
import Link from 'next/link'; // Import Link for navigation
// import { Review } from '../lib/types'; // Assuming you'll create a shared types file later
                                        // For now, you can define Review interface directly here

// Define the shape of a Review object if not already in a shared types file
// (You can move this to a types file like `src/lib/types.ts` later for better organization)
export interface Review {
  id: string;
  author: string;
  rating: number; // e.g., 1-5 stars
  text: string;
  // Add more fields if your reviews have them (e.g., title, date)
}

interface ReviewCardProps {
  review: Review;
  // Optional: If you want to link to a full review page, you'll need context
  // about the book (language and slug)
  bookLanguage?: string; // The language category (e.g., 'englishbooks')
  bookSlug?: string;     // The slug of the specific book (e.g., 'book1')
  // Optional: To control if the "Read full review" link is shown
  showFullReviewLink?: boolean; // Default is true if not provided
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  review,
  bookLanguage,
  bookSlug,
  showFullReviewLink = true, // Default to true if not explicitly set to false
}) => {
  // Determine if the full link can actually be constructed
  const canShowLink = showFullReviewLink && bookLanguage && bookSlug;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
      <div className="flex items-center mb-3">
        <p className="font-semibold text-lg text-gray-800 mr-4">
          Reviewed by: {review.author}
        </p>
        <div className="flex items-center text-yellow-500 text-base">
          {/* Display filled stars based on rating */}
          {Array(review.rating).fill(0).map((_, i) => (
            <span key={`filled-star-${review.id}-${i}`} className="text-xl">⭐</span>
          ))}
          {/* Display empty/faded stars for the remainder */}
          {Array(5 - review.rating).fill(0).map((_, i) => (
            <span key={`empty-star-${review.id}-${i}`} className="text-xl opacity-30">⭐</span>
          ))}
          <span className="ml-2 text-gray-600">({review.rating}/5)</span>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        {/*
          Truncate text for card view if 'showFullReviewLink' is true and text is long,
          otherwise show full text.
        */}
        {canShowLink && review.text.length > 200 ?
          `${review.text.substring(0, 200)}...` :
          review.text
        }
      </p>

      {canShowLink && (
        <Link
          href={`/books/${bookLanguage}/${bookSlug}/reviews/${review.id}`}
          className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300 ease-in-out text-sm"
        >
          Read full review &rarr;
        </Link>
      )}
    </div>
  );
};

export default ReviewCard;