import { FilterLabel } from './Filter.styled';

export const Filter = ({ filter, filterChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <input
        type="text"
        name="filter"
        title="Find contacts by name"
        value={filter}
        onChange={filterChange}
      />
    </FilterLabel>
  );
};
