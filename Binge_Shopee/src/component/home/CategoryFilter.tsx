import React from "react";

interface Category {
  slug: string;
  name: string;
  url: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onChange,
}) => (
  <div className="category-filter-row">
    <label htmlFor="category-filter" className="category-filter-label">
      Filter by Category:
    </label>
    <select
      id="category-filter"
      value={selectedCategory}
      onChange={(e) => onChange(e.target.value)}
      className="category-filter-select"
    >
      <option value="all">All</option>
      {categories.map((cat) => (
        <option key={cat.slug} value={cat.slug}>
          {cat.name}
        </option>
      ))}
    </select>
  </div>
);

export default CategoryFilter;
