import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import {
  selectAnotherCity,
} from 'store/slices/scenicSpot';
import {
  Select, Option, Label, SelectWrapper, Search, SearchLink,
} from './styled';

export default function CitySelector({
  cities,
}) {
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState('all');
  const handleSelectCity = (event) => setSelectedCity(event.target.value);
  const handleSearchCity = (select) => ((select === 'all') ? '/scenicSpot' : `/scenicSpot/${select}`);
  return (
    <SelectWrapper>
      <Label>選取城市：</Label>
      <Select value={selectedCity} onChange={handleSelectCity}>
        <Option key="all" value="all">全部</Option>
        {cities.enum.map((city) => <Option key={city} value={city}>{cities['x-enum'][city]}</Option>)}
      </Select>
      <Search variant="contained" color="primary" onClick={() => dispatch(selectAnotherCity({ city: selectedCity }))}>
        <SearchLink to={handleSearchCity(selectedCity)}>搜尋</SearchLink>
      </Search>
    </SelectWrapper>
  );
}

CitySelector.propTypes = {
  cities: propTypes.shape({
    enum: propTypes.arrayOf(propTypes.string),
    'x-enum': propTypes.shape({}),
  }).isRequired,
};
