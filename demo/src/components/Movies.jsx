import { Movie } from './Movie';

function Movies(props) {
    const { movies } = props;

    return (
        <div className='movies'>
            {movies && movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie}/>)
            ) : (
                <div className='not-found-block'>
                    <h4 className='not-f-text'>NOT FOUND</h4>
                </div>
            )}
        </div>
    )
}

export { Movies };