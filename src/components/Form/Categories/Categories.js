import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FormTitle from "../FormTitle/FormTitle";
import SearchBar from "../Search/Search";

const FlexJustItem = styled.div`
  display: flex;
  gap: 10rem;
  justify-content: space-between;
`;

const Category = styled.div`
  margin: 4rem 0;
`;

const CategoryName = styled.div`
  margin-top: 6rem;
  font-size: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1.4px solid black;
`;

const CategoryContainer = styled.h1`
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
  }

  @media screen and (max-width: 460px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    row-gap: 3rem;
  }
`;

const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    position: relative;
  }
`;

const Tooltip = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  background-color: #0a0b22;
  color: white;
  padding: 1.6rem;
  font-size: 1.2rem;
  white-space: nowrap;
  transform: translateY(-100%);
  transform: translateX(30%);

  @media screen and (max-width: 768px) {
    position: absolute;
    left: 10rem;
  }

  @media screen and (max-width: 650px) {
    top: 6rem;
    left: 1.6rem;
  }

  @media screen and (max-width: 460px) {
    top: 1rem;
    left: 12rem;
  }

  @media screen and (max-width: 370px) {
    top: 1rem;
    left: 9.5rem;
  }
`;

const CheckboxWrapper = styled.label`
  position: relative;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

const CustomCheckbox = styled.div`
  width: 2rem;
  height: 2rem;
  border: 2px solid black;
  background-color: transparent;
  position: relative;
  margin-right: 3rem;

  &::after {
    content: "";
    display: ${(props) => (props.checked ? "block" : "none")};
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
    width: 1rem;
    height: 1rem;
    border: 2px solid white;
    background-color: black;
  }

  ${CategoryItem}:hover & {
    box-shadow: 0 0 0 0.5rem rgba(10, 10, 35, 0.1); /* Adjust box shadow properties as needed */
  }
`;

function CategoryList({ categoriesDataArr, onSelectionChange }) {
  const [categories, setCategories] = useState(categoriesDataArr);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const savedCategories = localStorage.getItem("categoriesIconData");
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }
  }, []);

  const handleCheckboxChange = (categoryIndex, iconIndex) => {
    const updatedCategories = [...categories];
    updatedCategories[categoryIndex].icons[iconIndex].isChecked =
      !updatedCategories[categoryIndex].icons[iconIndex].isChecked;
    setCategories(updatedCategories);
    localStorage.setItem(
      "categoriesIconData",
      JSON.stringify(updatedCategories)
    );
  };

  const handleClearSearch = () => {
    setSearchInput("");
  };

  const filterCategories = (category) => {
    const lowerCaseSearchInput = searchInput.toLowerCase();
    const filteredIcons = category.icons.filter((icon) =>
      icon.name.toLowerCase().includes(lowerCaseSearchInput)
    );

    return {
      ...category,
      icons: filteredIcons,
    };
  };

  const filteredCategories = categories.map(filterCategories);

  return (
    <div>
      <FlexJustItem>
        <FormTitle headingTitle={"Skills"} />
        <SearchBar
          placeholder="Search Skills"
          value={searchInput}
          onSearch={(value) => setSearchInput(value)}
          onClear={handleClearSearch}
        />
      </FlexJustItem>

      {filteredCategories.map((category, categoryIndex) => {
        if (category.icons.length === 0) {
          return null;
        }

        return (
          <Category key={categoryIndex}>
            <CategoryName>{category.category}</CategoryName>
            <CategoryContainer>
              {category.icons.map((icon, iconIndex) => (
                <CategoryItem
                  key={iconIndex}
                  onMouseEnter={() => setHoveredCategory(icon.name)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  onClick={() => handleCheckboxChange(categoryIndex, iconIndex)}
                >
                  <CheckboxWrapper>
                    <CheckboxInput
                      type="checkbox"
                      checked={icon.isChecked}
                      onChange={() =>
                        handleCheckboxChange(categoryIndex, iconIndex)
                      }
                    />
                    <CustomCheckbox checked={icon.isChecked} />
                  </CheckboxWrapper>
                  <img
                    src={icon.iconImage}
                    width="40"
                    height="40"
                    alt={icon.name}
                    style={{
                      width: "5.6rem",
                      height: "5.6rem",
                      aspectRatio: "auto 3/4",
                    }}
                  />
                  <Tooltip show={hoveredCategory === icon.name}>
                    {icon.name}
                  </Tooltip>
                </CategoryItem>
              ))}
            </CategoryContainer>
          </Category>
        );
      })}
    </div>
  );
}

export default CategoryList;
