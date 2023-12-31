import Logo from "./assets/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg";
import Arrow from "./assets/expand_more_FILL0_wght400_GRAD0_opsz24.svg";

export default function Navigation() {
  return (
    <nav className="bg-white py-5 w-screen">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <img src={Logo} alt="Logo" className="pr-32 cursor-pointer" id="logo" />
        <ul className="flex space-x-5">
          <li className="font-normal font-subtitle-light text-sm text-[#4c4d5f] px-5 tracking-wider cursor-pointer">
            <div className="dropdown">
              <span className="flex tracking-wider">
                Products <img src={Arrow} alt="Arrow" className="pl-2" />
              </span>
              <div className="dropdown-content">
                <ul>
                  <li className="py-10">
                    <a
                      href="#"
                      className="px-10 text-[#4E5159] font-normal font-title text-large"
                    >
                      Bonsai Workflow
                    </a>
                    <p className="mx-10 pt-2 font-normal text-[#4c4d5f] text-sm">
                      Look professional, win more clients and manage your
                      business from <br />
                      one place
                    </p>
                  </li>
                  <hr className="mx-10" />
                  <li className="py-10">
                    <a
                      href="#"
                      className="px-10 text-[#4E5159] font-normal font-title  text-large"
                    >
                      Bonsai Tax
                    </a>
                    <p className="mx-10 pt-2 font-normal text-[#4c4d5f] text-sm">
                      Track expenses, maximize tax write-
                      <br />
                      offs, and estimate taxes without the headache
                    </p>
                  </li>
                  <hr className="mx-10" />
                  <li className="py-10">
                    <a
                      href="#"
                      className="px-10 text-[#4E5159] font-normal font-title  text-large"
                    >
                      Bonsai Cash
                    </a>
                    <p className="mx-10 pt-2 font-normal text-[#4c4d5f] text-sm">
                      Bonsai's all-in-one financial hub: No
                      <br /> fees and lightning fast payouts
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="font-normal font-subtitle-light text-sm text-[#4c4d5f] px-5 tracking-wider cursor-pointer">
            <span className="flex tracking-wider">
              Templates <img src={Arrow} alt="Arrow" className="pl-2" />
            </span>
          </li>
          <li className="font-normal font-subtitle-light text-sm text-[#4c4d5f] px-5 tracking-wider cursor-pointer">
            Pricing
          </li>
          <li className="font-normal font-subtitle-light text-sm text-[#4c4d5f] px-5 tracking-wider cursor-pointer">
            Reviews
          </li>
        </ul>
        <div className="flex space-x-5">
          <button className="border-solid border-2 text-[#00b289]  border-[#00b289] font-subtitle-bold text-buttonFt font-bold rounded-md px-6 py-2 tracking-widest hover:bg-[#00b289] hover:text-white">
            LOG IN
          </button>
          <button className="rounded-md px-6 py-2 bg-[#00b289] font-subtitle-bold text-buttonFt font-bold text-white tracking-widest hover:bg-[#00b288e5] ">
            START FREE
          </button>
        </div>
      </div>
    </nav>
  );
}
