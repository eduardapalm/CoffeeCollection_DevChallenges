import Selector from "../Selector";

const Selectors = () => {
  return (
    <div className="flex items-center justify-center flex-row gap-5">
      <Selector title="All Products" />
      <Selector title="Available Now" />
    </div>
  );
};

export default Selectors;
