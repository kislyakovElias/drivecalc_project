import React from "react";
import { Select } from "antd";

const onChange = (value) => {
  console.log(value, "val");
};
const onSearch = (value) => {
  console.log("search:", value);
};
function SelectModel(props) {

  let listYearMake = props.data
    .filter(
      (el) =>
        el.model_year === props.selectedYear &&
        el.mfr_name === props.selectedMake
    )
    .map((el) => el.carline);

  let unic = [...new Set(listYearMake)];

  let modelList = unic.map((el, index) => ({
    key: index,
    value: el,
    label: el,
  }));

  return (
    <Select
      showSearch
      placeholder="Select car Model"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      onSelect={(value) => props.setSelectedModel(value)}
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      // data = {props.data.map}
      options={modelList}
    />
  );
}
export default SelectModel;
