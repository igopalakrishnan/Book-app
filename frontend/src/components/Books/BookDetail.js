import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBook, updateBook } from '../../redux/actions/books/bookActions';

const BookDetail = () => {
    const { id } = useParams();

    //Get the book details and fill it in the form
    const bookDetails = useSelector(state => state.bookDetails);

    const { book, loading } = bookDetails;

    const [category, setCategory] = useState(book && !loading && book.category);
    const [title, setTitle] = useState(book && !loading && book.title);
    const [author, setAuthor] = useState(book && book.author);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchBook(id));
    }, [dispatch, id]);

    //dispatch action

    const formSubmitHandler = e => {
        const data = {
            category,
            title,
            author,
        };
        e.preventDefault();
        dispatch(updateBook(id, data));
        navigate('/books');
    };
    return (
        <div className='row container-height'>
            <div className='col-lg-6 col-md-6 m-auto'>
                <div className='container'>
                    {book ? (
                        <>
                            <h1 className='text-center'>Update</h1>
                            <form onSubmit={formSubmitHandler}>
                                <fieldset>
                                    <div className='form-group'>
                                        <select
                                            value={category}
                                            onChange={e => setCategory(e.target.value)}
                                            className='custom-select'>
                                            <option defaultValue='select-category'>select category</option>
                                            <option value='biograpy'>BioGrapy</option>
                                                    <option value='drama'>Drama</option>
                                                    <option value='fairy-tale'>Fairy-Tale</option>
                                                    <option value='fiction'>Fiction</option>
                                                    <option value='history'>History</option>
                                                    <option value='myths'>Myths</option>
                                                    <option value='non-fiction'>Non-Fiction</option>
                                                    <option value='life'>Novel</option>
                                                    <option value='poems'>Poems</option>
                                                    <option value='religion'>Romance</option>
                                                    <option value='western'>Western</option>
                                        </select>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='exampleInputEmail1'>Author </label>
                                        <input
                                            value={author}
                                            onChange={e => setAuthor(e.target.value)}
                                            type='text'
                                            className='form-control'
                                            id='exampleInputEmail1'
                                            aria-describedby='emailHelp'
                                            placeholder='Author name'
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='exampleInputPassword1'>title</label>
                                        <input
                                            value={title}
                                            onChange={e => setTitle(e.target.value)}
                                            type='text'
                                            className='form-control'
                                            id='exampleInputPassword1'
                                            placeholder='Book title'
                                        />
                                    </div>
                                    <button type='submit' className='btn btn-dark m-auto'>
                                        Create Book
                                    </button>
                                </fieldset>
                            </form>
                        </>
                    ) : (
                        'No'
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookDetail;