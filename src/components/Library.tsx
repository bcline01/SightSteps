import { books } from '../data/books';
import { Link } from 'react-router-dom';

function Library() {
  return (
    <div className="min-h-screen bg-green-50 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-teal-600 mb-10 text-center">SightSteps Library</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {books.map((book) => (
          <Link
            to={`/book/${book.id}`}
            key={book.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col justify-center items-center text-center"
          >
            <div className="w-full mb-4">
              <div className="text-xl font-semibold text-gray-800">{book.title}</div>
            </div>
            {/* Optional: Add cover image later */}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Library;
