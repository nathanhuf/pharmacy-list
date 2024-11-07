import React from "react";
export const PharmacyList = ({
  heading,
  list,
  onSelect = () => {},
  selected = false,
}) => {
  return (
    <div
      style={{
        flex: 1,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <h4>{heading}</h4>
      <div
        style={{
          border: "1px solid black",
          borderRadius: 24,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {list.map((item) => (
          <div
            key={item.id}
            onClick={onSelect(item.id)}
            style={{
              cursor: "pointer",
              textAlign: "left",
              padding: 8,
              backgroundColor: item.id === selected ? "#808080" : "transparent",
            }}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};
