import '../styles/SearchList.css'

interface ListProps {
    results: {artist_id:string,artist_name:string,picture:string}[]
}


function SearchList(results:ListProps) {
    return (
        <div className="Search-list">
            {results.results.map((result,id) => (
                <div key={id}>{result.artist_name}</div>
            ))}
        </div>
    );
}


export default SearchList
