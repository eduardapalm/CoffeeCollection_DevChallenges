import Selector from "./Selector";
import { selectors } from "@/constants";

const Selectors = () => {
  return (
    <div className="flex items-center justify-center flex-row gap-4">
      {selectors.map((selector) => (
        <Selector
          key={selector.id}
          title={selector.title}
          relatedTab={selector.relatedTab}
        />
      ))}
    </div>
  );
};

export default Selectors;
