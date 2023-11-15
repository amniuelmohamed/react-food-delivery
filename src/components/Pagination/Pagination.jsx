import { useEffect, useRef } from "react";
import "./Pagination.css";

const Pagination = ({ itemsCount, itemsPerPage, paginate, currentPage }) => {
    const pagesNumber = [];

    for (let i = 1; i <= Math.ceil(itemsCount / itemsPerPage); ++i) {
        pagesNumber.push(i);
    }

    // Deal with Prev And Next
    const prevBtn = useRef();
    const nextBtn = useRef();

    const getPrev = () => {
        paginate(currentPage - 1);
    };

    const getNext = () => {
        paginate(currentPage + 1);
    };

    const checkPrevAndNext = () => {
        if (pagesNumber.length <= 1) {
            prevBtn.current.classList.add("disabled");
            nextBtn.current.classList.add("disabled");
        } else if (pagesNumber.length > 1 && currentPage === 1) {
            prevBtn.current.classList.add("disabled");
            nextBtn.current.classList.remove("disabled");
        } else if (
            pagesNumber.length > 1 &&
            currentPage === pagesNumber.length
        ) {
            nextBtn.current.classList.add("disabled");
            prevBtn.current.classList.remove("disabled");
        }
    };

    useEffect(() => {
        checkPrevAndNext();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prevBtn, nextBtn, pagesNumber, currentPage]);

    return (
        <div className="pagination d-flex align-items-center justify-content-center gap-2">
            <button ref={prevBtn} onClick={getPrev}>
                Prev
            </button>
            {pagesNumber.map((number) => (
                <button
                    key={number}
                    onClick={() => {
                        paginate(number);
                    }}
                    className={`numbers ${
                        currentPage === number ? "active" : ""
                    }`}
                >
                    {number}
                </button>
            ))}
            <button ref={nextBtn} onClick={getNext}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
