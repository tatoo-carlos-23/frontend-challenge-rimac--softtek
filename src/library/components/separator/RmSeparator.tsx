const RmSeparator = ({ height = 10 }: { height: number }) => {
  return (
    <div
      style={{ height: height > 0 ? `${height}px` : "10px", width: "100%" }}
    ></div>
  );
};

export default RmSeparator;
