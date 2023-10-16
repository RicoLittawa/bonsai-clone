export default function Content() {
  return (
    <main>
      <div className="bg-[#F2FAFF] blue-shape _12 "></div>
      <section>
        <div className="flex justify-center">
          <h1 className="pr-1">Plans & Pricing</h1>
          <h4>Monthly</h4>
          <label class="relative inline-flex items-center mr-5 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div
              class="w-11 h-6 rounded-full  bg-[#00b289] peer-checked:after:translate-x-full 
            peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px]
             after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00b289]"
            ></div>
          </label>
          <h4>Yearly</h4>
        </div>
      </section>
    </main>
  );
}
