import { useState } from "react";
import '../Styles/Pagination.css' ;

export const  Pagination = ({onChange,current,total})=> {

    const [currentPag, setcurrentPag] = useState(1);
    const prev = (
      <button
      disabled ={ current === 1}
        className="prev-page"
        onClick={() => {
          onChange(-1);
        }}
      >
        Prev
      </button>
    );
    const currentPage = (
      <button id="page" >
        {currentPag}
      </button>
    );
    const next = (
      <button
        className="next-page"
        data-testid="next-page"
        onClick={() => {
          onChange(1);
        }}
      >
        Next
      </button>
    );
    return (
      <div data-testid="page-container">
        <div>
          {prev}
          {current}
          {next}
        </div>
      </div>
    );
}

