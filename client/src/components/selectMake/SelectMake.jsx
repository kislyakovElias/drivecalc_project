import React from "react";
import { Select } from "antd";
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};
function SelectMake(props) {

  let makeList = props.data
    .filter((el) => el.model_year === props.selectedYear)
    .map((el, index) => ({
      key: index,
      value: el.mfr_name,
      label: el.mfr_name,
    }));

return (
  <Select
    showSearch
    placeholder="Select car Make"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    onSelect={(value) => props.setSelectedMake(value)}
    filterOption={(input, option) =>
      (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
    }
    // data = {props.data.map}
    options={makeList}
  />
)};
export default SelectMake;
