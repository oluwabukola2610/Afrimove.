import React from "react";
import Link from "next/link";
import GooglePlay from "/assets/svg/google.svg";
import AppStore from "/assets/svg/mobile.svg";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavs = [
    {
      label: "Product",
      items: [
        {
          href: "#",
          name: "Overview",
        },
        {
          href: "#",
          name: "Features",
        },
      ],
    },
    {
      label: "Company",
      items: [
        {
          href: "#",
          name: "About Us",
        },

        {
          href: "#",
          name: "Contact",
        },
      ],
    },
    {
      label: "Resource",
      items: [
        {
          href: "#",
          name: "Help Centre",
        },

        {
          href: "#",
          name: "Support",
        },
      ],
    },
  ];

  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Link href="/" className="flex gap-2">
              <p className="py-2 text-[#101828] text-base md:text-2xl font-semibold">
              AfriMove<span className="text-[#528BFF]">.</span>
              </p>
            </Link>
            <p className="max-w-sm text-[#475467] text-lg font-normal">
              Empowering African mobility with AfriMove Technologies.
            </p>
            <div className="flex flex-row items-center gap-3 mt-3 ">
              <Image src={GooglePlay} alt="" />
              <Image src={AppStore} alt="" />
            </div>
          </div>

          {/* links */}
          <div className=" mt-16  grid-cols-2 md:grid-cols-3 gap-20 grid  text-[#475467] text-lg font-semibold">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4 " key={idx}>
                <h4 className="text-[#667085] text-base font-semibold sm:pb-2">
                  {item.label}
                </h4>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <Link
                      href={el.href}
                      className="duration-150 hover:underline"
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="mt-10 py-6 px-10 bg-[#F9FAFB] text-[#667085] items-center flex-col gap-4 flex justify-between sm:flex-row">
        <p>© {currentYear} BukkyCode. All rights reserved.</p>
        <div className="flex items-center gap-x-6 text-gray-400 mt-6">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-6 h-6 hover:text-gray-500 duration-150"
            >
              <path
                d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                fill="#98A2B3"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              className="w-6 h-6 hover:text-gray-500 duration-150"
              fill="none"
              viewBox="0 0 48 48"
            >
              <g clip-path="url(#clip0_17_80)">
                <path
                  fill="currentColor"
                  d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_80">
                  <path fill="#fff" d="M0 0h48v48H0z" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="#">
            <svg
              className="w-6 h-6 hover:text-gray-500 duration-150"
              fill="none"
              viewBox="0 0 48 48"
            >
              <g clip-path="url(#a)">
                <path
                  fill="currentColor"
                  d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h48v48H0z" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="#">
            <svg
              className="w-6 h-6 hover:text-gray-500 duration-150"
              fill="none"
              viewBox="0 0 48 48"
            >
              <g fill="currentColor" clip-path="url(#clip0_910_44)">
                <path
                  fill-rule="evenodd"
                  d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z"
                  clip-rule="evenodd"
                />
                <path d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z" />
              </g>
              <defs>
                <clipPath id="clip0_910_44">
                  <path fill="#fff" d="M0 0h48v48H0z" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="#">
            <svg
              className="w-6 h-6 hover:text-gray-500 duration-150"
              fill="currentColor"
              viewBox="0 0 48 48"
            >
              <g clip-path="url(#clip0_17_63)">
                <path d="M24 4.322c6.413 0 7.172.028 9.694.14 2.343.104 3.61.497 4.453.825 1.116.432 1.922.957 2.756 1.791.844.844 1.36 1.64 1.79 2.756.329.844.723 2.12.826 4.454.112 2.53.14 3.29.14 9.693 0 6.413-.028 7.172-.14 9.694-.103 2.344-.497 3.61-.825 4.453-.431 1.116-.957 1.922-1.79 2.756-.845.844-1.642 1.36-2.757 1.791-.844.328-2.119.722-4.453.825-2.532.112-3.29.14-9.694.14-6.413 0-7.172-.028-9.694-.14-2.343-.103-3.61-.497-4.453-.825-1.115-.431-1.922-.956-2.756-1.79-.844-.844-1.36-1.641-1.79-2.757-.329-.844-.723-2.119-.826-4.453-.112-2.531-.14-3.29-.14-9.694 0-6.412.028-7.172.14-9.694.103-2.343.497-3.609.825-4.453.431-1.115.957-1.921 1.79-2.756.845-.844 1.642-1.36 2.757-1.79.844-.329 2.119-.722 4.453-.825 2.522-.113 3.281-.141 9.694-.141zM24 0c-6.516 0-7.331.028-9.89.14-2.55.113-4.304.526-5.822 1.116-1.585.619-2.926 1.435-4.257 2.775-1.34 1.332-2.156 2.672-2.775 4.247C.666 9.806.253 11.55.141 14.1.028 16.669 0 17.484 0 24s.028 7.331.14 9.89c.113 2.55.526 4.304 1.116 5.822.619 1.585 1.435 2.925 2.775 4.257a11.732 11.732 0 004.247 2.765c1.528.591 3.272 1.003 5.822 1.116 2.56.112 3.375.14 9.89.14 6.516 0 7.332-.028 9.891-.14 2.55-.113 4.303-.525 5.822-1.116a11.732 11.732 0 004.247-2.765 11.732 11.732 0 002.766-4.247c.59-1.528 1.003-3.272 1.115-5.822.113-2.56.14-3.375.14-9.89 0-6.516-.027-7.332-.14-9.891-.112-2.55-.525-4.303-1.115-5.822-.591-1.594-1.407-2.935-2.747-4.266a11.732 11.732 0 00-4.247-2.765C38.194.675 36.45.262 33.9.15 31.331.028 30.516 0 24 0z" />
                <path d="M24 11.672c-6.806 0-12.328 5.522-12.328 12.328 0 6.806 5.522 12.328 12.328 12.328 6.806 0 12.328-5.522 12.328-12.328 0-6.806-5.522-12.328-12.328-12.328zm0 20.325a7.998 7.998 0 010-15.994 7.998 7.998 0 010 15.994zM39.694 11.184a2.879 2.879 0 11-2.878-2.878 2.885 2.885 0 012.878 2.878z" />
              </g>
              <defs>
                <clipPath id="clip0_17_63">
                  <path d="M0 0h48v48H0z" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 18"
              className="w-6 h-6 hover:text-gray-500 duration-150"
            >
              <path
                d="M23.7609 4.1998C23.7609 4.1998 23.5266 2.54512 22.8047 1.81855C21.8906 0.862305 20.8688 0.857617 20.4 0.801367C17.0438 0.557617 12.0047 0.557617 12.0047 0.557617H11.9953C11.9953 0.557617 6.95625 0.557617 3.6 0.801367C3.13125 0.857617 2.10938 0.862305 1.19531 1.81855C0.473438 2.54512 0.24375 4.1998 0.24375 4.1998C0.24375 4.1998 0 6.14512 0 8.08574V9.90449C0 11.8451 0.239062 13.7904 0.239062 13.7904C0.239062 13.7904 0.473437 15.4451 1.19062 16.1717C2.10469 17.1279 3.30469 17.0951 3.83906 17.1982C5.76094 17.3811 12 17.4373 12 17.4373C12 17.4373 17.0438 17.4279 20.4 17.1889C20.8688 17.1326 21.8906 17.1279 22.8047 16.1717C23.5266 15.4451 23.7609 13.7904 23.7609 13.7904C23.7609 13.7904 24 11.8498 24 9.90449V8.08574C24 6.14512 23.7609 4.1998 23.7609 4.1998ZM9.52031 12.1123V5.36699L16.0031 8.75137L9.52031 12.1123Z"
                fill="#98A2B3"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
