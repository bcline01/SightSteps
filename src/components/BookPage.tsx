import { useParams, Link } from 'react-router-dom';
import { books } from '../data/books';

function BookPage() {
  const { bookId } = useParams();
  const book = books.find((b) => b.id === bookId);

  if (!book) return <div>Book not found</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">{book.title}</h1>
      <ul className="space-y-4">
        {book.chapters.map((chapter, index) => (
          <li key={index}>
            <Link to={`/book/${book.id}/chapter/${index}`} className="text-blue-500 underline">
              {chapter.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link to="/" className="text-gray-500">← Back to Library</Link>
      </div>
    </div>
  );
}

export default BookPage;
