import { useState } from "react";
export default function Content() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <main>
      <div className="bg-[#F2FAFF] blue-shape"></div>
      <section>
        <div className="flex justify-center pt-40">
          <h1 className="pr-16 text-xl font-normal font-title text text-[#4c525a]">
            Plans & Pricing
          </h1>
          <div className="flex pt-5">
            <h4
              className={`font-semibold font-subtitle text-sm tracking-widest ${
                toggle ? "text-[#888C93]" : "text-[#4c4d5f]"
              }`}
            >
              MONTHLY
            </h4>
            <div className="pl-5">
              <label
                htmlFor="checkbox"
                className="relative inline-flex items-center mr-5 cursor-pointer"
              >
                <input
                  onChange={handleToggle}
                  id="checkbox"
                  type="checkbox"
                  value={toggle}
                  className="sr-only peer"
                />
                <div
                  className="w-14 h-7 rounded-full  bg-[#00b289] peer-checked:after:translate-x-full 
            peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px]
             after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#00b289]"
                ></div>
              </label>
            </div>
            <h4
              className={`font-semibold font-subtitle text-sm tracking-widest ${
                !toggle ? "text-[#888C93]" : "text-[#4c4d5f]"
              }`}
            >
              YEARLY
            </h4>
          </div>
        </div>
      </section>
    </main>
  );
}
