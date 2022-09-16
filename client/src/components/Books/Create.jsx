import { useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { addBookMutaion, getAuthorsQuery, getBooksQuery } from '../../queries/queries'

export default function BookCreate() {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [authorId, setAuthorId] = useState('')
  const { loading, error, data } = useQuery(getAuthorsQuery)
  const [addBook, { l, e, d }] = useMutation(addBookMutaion)
  function submitForm(e) {
    e.preventDefault();
    addBook({ variables: { name, genre, authorId }, refetchQueries: [{ query: getBooksQuery }] })
    setName('');
    setGenre('');
    setAuthorId('');
  }
  if (error) return <p>Error :(</p>;
  return (
    <fieldset>
      <legend>Book</legend>
      <form onSubmit={submitForm}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='genre'>genre</label>
          <input
            id='genre'
            type='text'
            value={genre}
            onChange={e => setGenre(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='author'>Author</label>
          <select onChange={e => setAuthorId(e.target.value)}>
            {loading ?
              <option disabled>Loading ...</option> :
              data.authors.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
          </select>
        </div>
        <button type='submit'>Create</button>
      </form>
    </fieldset>
  )
}
