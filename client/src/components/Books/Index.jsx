import { useQuery } from '@apollo/client'
import { useState } from 'react';
import { getBooksQuery } from '../../queries/queries'
import BookShow from './Show';
export default function BookIndex() {
  const [selected, setSelected] = useState(null)
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      {selected &&
        <fieldset>
          <legend>Book Details</legend>
          <BookShow bookId={selected} />
        </fieldset>
      }
      <ul>
        {data.books.map(({ id, name }) => (
          <li key={id} onClick={e => setSelected(id)} style={{ cursor: 'pointer' }}>{name}</li>
        ))}
      </ul>
    </>
  )
}
