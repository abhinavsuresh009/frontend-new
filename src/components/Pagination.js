import React from 'react';
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

function Pagination({ totalItems, itemsPerPage, activePage, setActivePage }) {
  const numberOfPages = Math.ceil(totalItems / itemsPerPage);
  console.log('number of page',totalItems)

  const next = () => {
    if (activePage < numberOfPages) {
      setActivePage(activePage + 1);
    }
  };

  const prev = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={activePage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {Array.from({ length: numberOfPages }, (_, index) => index + 1).map((pageNumber) => (
          <IconButton
            key={pageNumber}
            variant={activePage === pageNumber ? "filled" : "text"}
            color="gray"
            onClick={() => setActivePage(pageNumber)}
          >
            {pageNumber}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={activePage === numberOfPages}
      >
        Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default Pagination;
