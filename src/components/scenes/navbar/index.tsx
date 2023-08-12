import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "@/components/shared/ActionButton";
import useSelectePageStore from "@/hooks/useSelectedPageStore";

type Props = {
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const { selectedPage, setSelectedPage } = useSelectePageStore();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage
    ? "bg-opacity-0"
    : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`flexBetween fixed z-30 w-full py-4 ${navbarBackground} transition duration-300`}
      >
        <div className="flexBetween mx-auto w-5/6">
          <div className="flexBetween w-full gap-16">
            <img alt="logo" src={Logo} />

            {isAboveMediumScreens ? (
              <div className="flexBetween w-full ">
                <div className="flexBetween gap-8 text-sm">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="flexBetween gap-8">
                  <p className="flexBetween">Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="rounded-full bg-secondary-500 p-2"
              >
                {isMenuToggled ? (
                  <XMarkIcon className="w-6 h-6 text-white" />
                ) : (
                  <Bars3CenterLeftIcon className="h-6 w-6 text-white" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal  */}
      <div
        onClick={() => setIsMenuToggled(false)}
        className={`fixed backdrop-blur-sm bg-slate-600/20 inset-0 z-40 ${
          !isAboveMediumScreens && isMenuToggled ? "block" : "hidden"
        }`}
      />

      <div
        className={`fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl ${
          isMenuToggled && !isAboveMediumScreens
            ? "translate-x-0"
            : " translate-x-full"
        } transition duration-500`}
      >
        <div className="flex justify-end p-12">
          <button onClick={() => setIsMenuToggled(false)}>
            <XMarkIcon className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        {/* Menu Items  */}
        <div className="flex flex-col ml-[33%] gap-10 text-2xl">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Benefits"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Our Classes"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
