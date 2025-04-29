import { books } from '../data/books';
import { Link } from 'react-router-dom';

function Library() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Library</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {books.map((book) => (
          <Link to={`/book/${book.id}`} key={book.id} className="border p-4 rounded shadow hover:bg-gray-100">
            <h2 className="text-xl font-semibold">{book.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Library;
