import { Select } from "antd";
import type { FiltersProps } from "./types";
import styles from "./Filters.module.scss";

const Filters = ({ options, value, onChange }: FiltersProps) => {
  return (
    <div style={{ paddingLeft: "10px", paddingRight: "10px", fontFamily: "'Texturina', serif" }}>
      <h4 style={{ margin: "0 0 10px 0" }}>Filters</h4>
      <div className={styles.tagsContainer}>
        <div>Tags: </div>
        <Select
          mode="multiple"
          allowClear
          style={{ width: 300 }}
          value={value}
          onChange={onChange}
          options={options}
        />
      </div>
    </div>
  );
};

export default Filters;
