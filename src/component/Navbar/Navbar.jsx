import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {Link as Links} from "react-scroll";
//icons
import {
  Bars3Icon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, QueueListIcon } from "@heroicons/react/20/solid";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import { PiLinkSimpleBreakThin } from "react-icons/pi";

//images
// import brandicon from "../assets/brandlogo.png";
// import brandiconmd from "../assets/brandlogomd.png";

const programs = [
  {
    name: "Study in USA",
    route: 'usa',
    description: "Study Bachelors in Germany",
    href: "https://www.ug.headstart.co.in/",
    icon: AcademicCapIcon,
  },
  {
    name: "Study in Germany",
    route: 'germany',
    description: "Study PG Medicine and Work as a Doctor in Germany",
    href: "https://www.pgmedicine.com/",
    icon: AcademicCapIcon,
  },
  {
    name: "Study in UK",
    route: 'uk',
    description: "Start your Dream Career after 12th",
    href: "https://www.ws.headstart.co.in/",
    icon: AcademicCapIcon,
  },
  {
    name: "Study in Australia",
    route: 'australia',
    description: "Start your Dream Career after 12th",
    href: "https://www.ws.headstart.co.in/",
    icon: AcademicCapIcon,
  },
  {
    name: "Study in Japan",
    route: 'japan',
    description: "Start your Dream Career after 12th",
    href: "https://www.ws.headstart.co.in/",
    icon: AcademicCapIcon,
  },
  {
    name: "Study in Italy",
    route: 'italy',
    description: "Start your Dream Career after 12th",
    href: "https://www.ws.headstart.co.in/",
    icon: AcademicCapIcon,
  },
  {
    name: "Study in France",
    route: 'france',
    description: "Start your Dream Career after 12th",
    href: "https://www.ws.headstart.co.in/",
    icon: AcademicCapIcon,
  },
  {
    name: "Study in Switzerland",
    route: 'switzerland',
    description: "Start your Dream Career after 12th",
    href: "https://www.ws.headstart.co.in/",
    icon: AcademicCapIcon,
  },
];
const callsToAction = [
  { direct: "Go To Programs ->", href: "/programs", icon: QueueListIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const handlePopoverOpen = () => {
    setPopoverOpen(true);
  };

  useEffect(() => {
    // Scroll to the "About Us" section on initial load or when returning from another page
    const hash = window.location.hash;
    if (hash === '#aboutus') {
      const element = document.getElementById('aboutus');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  return (
    <div className="bg-white">
      <header className="sticky inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex ">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Vagus Oversess</span>
              {/* <img
                className="h-10 w-auto lg:hidden"
                src={brandiconmd}
                alt="brandlogo"
              />
              <img
                className="hidden h-10 w-auto lg:block"
                src={brandicon}
                alt="brandlogo"
              /> */}
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Link
              to="/"
              className="text-sm font-semibold leading-6 text-gray-700 hover:text-gray-500 duration-300 transition-colors"
            >
              Home
            </Link>
            <Popover className="relative">
              <Popover.Button
                className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-700  hover:text-gray-500 duration-300 transition-colors"
                onClick={handlePopoverOpen}
              >
                {/* <Squares2X2Icon className="h-5 w-5 flex-none text-gray-600" aria-hidden="true" /> */}
                Universities
              </Popover.Button>

              {isPopoverOpen && (
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-44 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {programs.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-700 group-hover:text-primary"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <Link
                              to={`/universities/${item.route}`} // Update the route here
                              className="text-sm font-semibold leading-6 text-gray-700 hover:text-gray-500 duration-300 transition-colors"
                            >
                              {item.name}
                            </Link>
                           
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              )}
            </Popover>

            <Links
             to="aboutus"
             spy={true}
             smooth={true}
              className="text-sm font-semibold leading-6 cursor-pointer text-gray-700 hover:text-gray-500 duration-300 transition-colors"
            >
              About Us
            </Links>
            <Links
              to="exam"
              spy={true}
              smooth={true}
              className="text-sm font-semibold leading-6 cursor-pointer text-gray-700 hover:text-gray-500 duration-300 transition-colors"
            >
              Exams
            </Links>
            <Links
               to="loan"
               spy={true}
               smooth={true}
              className="text-sm font-semibold leading-6 text-gray-700 hover:text-gray-500 duration-300 transition-colors"
            >
              Loans
            </Links>
          </Popover.Group>
          <div className="hidden lg:flex  bg-[#FB2465] rounded-full p-2 text-white lg:justify-end">
            <Link to="/connect" className="btn flex gap-1 items-center">
              Connect <FaAngleRight size={15} />
            </Link>
          </div>
        </nav>

        {/* Responsive */}

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Headstart</span>
                {/* <img
                                    className="h-8 w-auto"
                                    src={brandicon}
                                    alt="Branding"
                                /> */}
              </Link>

              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <div className="mt-2 h-6 w-6"></div>
                {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
              </button>
            </div>
            <div className="mt-16 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50">
                          Universities
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...programs].map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                              <span className="text-primary font-bold">
                                {item.direct}
                              </span>
                            </Link>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Links
                    to="aboutus"
                    spy={true}
                    smooth={true}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About Us
                  </Links>
                  <Links
                   to="exam"
                   spy={true}
                   smooth={true}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Exam
                  </Links>
                  <Links
                     to="loan"
                     spy={true}
                     smooth={true}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-50 "
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Loans
                  </Links>
                </div>
                <div className="py-6">
                  <Link
                    to="/connect"
                    className="rounded-xl text-base font-extrabold leading-7 text-primary hover:bg-primary-hover hover:text-white 
                                        flex gap-1.5 items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Connect <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default NavBar;
