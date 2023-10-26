import React, { useEffect, useState } from "react";
import FilterByColors from "./filterByColors";
import FilterBySizes from "./filterBySizes";
import styled from "styled-components";
import FilterByPriceRange from "./filterByPriceRange";
import CloseFiltersButton from "./closeFiltersButton";

const FiltersContainer = styled.div`
  @media (min-width: 1024px) {
    width: 200px;
    height: fit-content;

    background: var(--card-background);
    box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #eeeeee;
    border-radius: 25px;
    padding: 15px 15px 20px;
  }
`;

const MobileFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;

  @media (min-width: 450px) {
    justify-content: end;
  }

  button {
    width: 150px;

    padding: 6px 0;

    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    color: var(--light-gray);

    border: 1px solid var(--light-gray);
    border-radius: 5px;
    background: var(--background-secondary);
    box-shadow: 2px 2px 8px 2px #bebebe;
  }

  > div {
    position: fixed;

    width: 90%;
    height: 100vh;

    padding: 20px;

    border-radius: 0 20px 20px 0;
    box-shadow: 20px -1px 20px 2px var(--light-gray);

    left: -100%;
    top: 0;

    transition: left 0.5s ease;

    z-index: 100;

    background-color: #f0f0f0;
  }

  .open {
    left: 0;
  }

  .divisor {
    width: 100%;
    height: 1px;
    margin: 0 auto;

    margin-top: 20px;
    margin-bottom: 10px;
    background-color: #cecece;
  }
`;

export default function Filters() {
  const [desktopSize, setDesktopSize] = useState(window.innerWidth);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };

  useEffect(() => {
    const handleWindowSize = () => {
      const actualWindowSize = window.innerWidth;

      setDesktopSize(actualWindowSize);
    };

    window.addEventListener("resize", handleWindowSize);
    return () => window.removeEventListener("resize", handleWindowSize);
  }, []);

  return (
    <FiltersContainer>
      {desktopSize < 1024 && (
        <MobileFiltersContainer>
          <button onClick={handleMobileFilters}>Filter by</button>

          <div className={mobileFiltersOpen ? "open" : ""}>
            <CloseFiltersButton onClick={handleMobileFilters} />
            <FilterByColors />
            <div className="divisor"></div>
            <FilterBySizes />
            <div className="divisor"></div>
            <FilterByPriceRange />
          </div>
        </MobileFiltersContainer>
      )}

      {desktopSize >= 1024 && (
        <div>
          <FilterByColors />
          <FilterBySizes />
          <FilterByPriceRange />
        </div>
      )}
    </FiltersContainer>
  );
}
