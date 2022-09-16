import { useQuery } from '@apollo/client'
import {getBookQuery} from '../../queries/queries'
export default function BookShow({bookId}) {
  const { loading, error, data } = useQuery(getBookQuery, {variables: {id: bookId}});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <p>Book name: {data.book.name}</p>
      <p>Genre: {data.book.genre}</p>
      <p>Create by: {data.book.author?.name}</p>
    </div>
  )
}
