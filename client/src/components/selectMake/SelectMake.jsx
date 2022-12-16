import React from "react";
import { Select } from "antd";
const onChange = (value) => {
  console.log(`selected ${value}`);
};
function SelectMake(props) {
  
    let listByYear = props.data
      .filter((el) => el.model_year === props.selectedYear)
      .map((el) => el.mfr_name);
  
    let unic = [...new Set(listByYear)];
  
  let makeList = unic
    .map((el, index) => ({
      key: index,
      value: el,
      label: el,
    }));
  
  
  const onSearch = (value) => {
    console.log("search:", value);
    console.log(listByYear);
    console.log(unic);
  };

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
