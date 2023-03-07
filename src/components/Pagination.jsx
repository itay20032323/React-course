import { React, useEffect, useState } from "react";
import PaginationPart from "./PaginationPart";

const Pagination = ({
  setNumSpace,
  numSpace,
  setPartData,
  data,
  partData,
  slicesNum,
  setSlicesNum,
}) => {
  // const [postsNum, setPostsNum] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    console.log("update");

    setPartData(
      data
        .filter((post) => post.body.includes(searchValue))
        .slice(pageNumber * numSpace, pageNumber * numSpace + numSpace)
    );

    setSlicesNum(() => {
      let newArr = [];
      for (
        let i = 0;
        i <
        Math.ceil(
          data.filter((post) => post.body.includes(searchValue)).length / numSpace
        );
        i++
      ) {
        newArr.push(i + 1);
      }
      return newArr;
    });
  }, [pageNumber, data, numSpace, setPartData, searchValue, setSlicesNum]);

  return (
    <div className="pagination">
      <h1>Pagination</h1>
      <label>Number of posts for page </label>
      {data.length === 0 && (
        <div class="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <input
        value={numSpace}
        min={1}
        type="number"
        name="num-space"
        id="num-space"
        onChange={(e) => setNumSpace(Number(e.target.value))}
      />
      <br />
      <label>Search Post: </label>
      <input
        type="text"
        name="serach"
        id="search"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <PaginationPart content={partData} setPageNumber={setPageNumber} />
      <button
        onClick={() => setPageNumber((prev) => prev - 1)}
        disabled={pageNumber === 0 && true}
      >
        -
      </button>
      {slicesNum &&
        slicesNum.map((i) => (
          <span
            className="span-page"
            onClick={()=>setPageNumber(i - 1)}
            key={i}
            style={i === pageNumber + 1 ? { opacity: 1 } : { opacity: 0.5 }}
          >
            {" "}
            {i}{" "}
          </span>
        ))}
      <button
        onClick={() => setPageNumber((prev) => prev + 1)}
        disabled={pageNumber === slicesNum.length - 1 && true}
      >
        +
      </button>
    </div>
  );
};

export default Pagination;
