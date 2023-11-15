import React from "react";

function Filter(props) {
  const generateRatingOptions = (start, end) => {
    const options = [];
    options.push(<option key="noFilter" value="">No Filter</option>);

    for (let i = start; i <= end; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }

    return options;
  };

  return (
    <div>
      <label htmlFor="ratingFilter"><h4>Filter By Rating</h4></label>
      <select
        id="ratingFilter"
        onChange={props.handleFilter}
      >
        {generateRatingOptions(1, 9)}
      </select>
    </div>
  );
}

export default Filter;
