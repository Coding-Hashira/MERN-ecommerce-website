import React, { useState } from "react";
import styled from "styled-components";
import Announcements from "../components/Announcements";
import Newsletter from "../components/Home/Newsletter";
import Products from "../components/Home/Products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;
const FilterText = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin-right: 20px;
`;

const ProductList = () => {
  const [rating, setRating] = useState("All");
  const [priceRange, setPriceRange] = useState("All");
  const [sort, setSort] = useState("Newest");

  return (
    <Container>
      <Navbar />
      <Announcements />
      <Title>Filter</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <InputLabel style={{ marginRight: "5px" }} id="ratings">
            Ratings
          </InputLabel>
          <Select
            style={{ height: "min-content" }}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            displayEmpty
            id="ratings"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem
              style={{ padding: "9.5px 14px !important" }}
              value={"All"}
            >
              All
            </MenuItem>
            <MenuItem
              style={{ padding: "9.5px 14px !important" }}
              value={"4.5+"}
            >
              4.5+
            </MenuItem>
            <MenuItem
              style={{ padding: "9.5px 14px !important" }}
              value={"4.0 - 4.5"}
            >
              4.0 - 4.5
            </MenuItem>
            <MenuItem value={"< 4.0"}>&lt; 4.0</MenuItem>
          </Select>
          <InputLabel style={{ margin: "0 5px 0 10px" }} id="price">
            Price
          </InputLabel>
          <Select
            style={{ height: "min-content" }}
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            displayEmpty
            id="price"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"₹50,000+"}>₹50,000+</MenuItem>
            <MenuItem value={"₹30,000 - ₹49,999"}>₹30,000 - ₹49,999</MenuItem>
            <MenuItem value={"₹20,000 - ₹29,000"}>₹20,000 - ₹29,000</MenuItem>
            <MenuItem value={"< ₹20,000"}>&lt; ₹20,000</MenuItem>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select
            style={{ height: "min-content" }}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={"Newest"}>Newest</MenuItem>
            <MenuItem value={"Price (acs)"}>Price (acs)</MenuItem>
            <MenuItem value={"Price (decs)"}>Price (decs)</MenuItem>
            <MenuItem value={"Ratings (acs)"}>Ratings (acs)</MenuItem>
            <MenuItem value={"Ratings (decs)"}>Ratings (decs)</MenuItem>
            <MenuItem value={"Oldest"}>Oldest</MenuItem>
            <MenuItem value={"A-Z"}>A-Z</MenuItem>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
