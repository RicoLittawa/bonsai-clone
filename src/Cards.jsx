export default function Cards() {
  return (
    <div className="flex justify-center pt-14">
      <div className="grid grid-cols-3 gap-6">
        <div className="card-height w-96 bg-[#fbfcff] border-solid border rounded">
          <div className="mx-12 pt-14">
            <h2 className="font-subtitle font-semibold text-customL text-[#4c525a] tracking-wide">
              Starter
            </h2>
            <span className="font-thin text-customS text-[#4c525a]">
              Ideal for freelancers and contractors <br /> just starting out.
            </span>
            <div className="flex pt-3">
              <h6 className="font-semibold text-customXL font-subtitle text-[#4c525a] pr-2 pt-4">
                $
              </h6>
              <h1 className="text-xxl font-semibold text-[#4c525a]">24</h1>
              <span className="text-[#4c525a] font-normal text-customL pt-12 pl-4">
                /MONTH
              </span>
            </div>
            <hr className="h-0.5  bg-[#00b289] border-0 " />
          </div>
        </div>

        <div className="card-height w-96 bg-[#fbfcff] border-solid border rounded card-2">
          <div className="banner bg-[#00b289]"></div>
          <div className="mx-12 pt-14">
            <h2 className="font-subtitle font-semibold text-customL text-[#4c525a] tracking-wide">
              Professional
            </h2>
            <span className="font-thin text-customS text-[#4c525a]">
              Everything a growing independent <br /> business needs to thrive.
            </span>
          </div>
        </div>
        <div className="card-height w-96 bg-[#fbfcff] border-solid border rounded">
          <div className="mx-12 pt-14">
            <h2 className="font-subtitle font-semibold text-customL text-[#4c525a] tracking-wide">
              Business
            </h2>
            <span className="font-thin text-customS text-[#4c525a]">
              The perfect package for <br /> small businesses and agencies.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
