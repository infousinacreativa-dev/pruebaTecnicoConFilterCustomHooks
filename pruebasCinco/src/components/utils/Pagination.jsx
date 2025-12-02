
export function Pagination({
    postsPerPage,
    totalPosts,
    setCurrentPage,
    currentPage,
}) {


    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber, e) => {
        e.preventDefault();
        setCurrentPage(pageNumber);
    }

    return (
        <nav style={{ marginTop: '2rem', padding: '0.5rem', backgroundColor: '#57F365' }}>
            <ul className="pagination" style={{ listStyle: 'none', display: 'flex', flexDirection: 'row', gap: '50px', justifyContent: 'center' }}>
                {pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`} style={{ listStyle: 'none' }}>
                        <a onClick={(e) => paginate(number, e)} href="!#" className="page-link" style={{
                            backgroundColor: 'blue',
                            padding: '0.3rem',
                            color: 'white',
                            borderRadius: '24px'

                        }}>
                            {number}
                        </a>
                    </li>


                ))}
            </ul>
        </nav>
    )
}