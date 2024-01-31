import Image from "next/image";
import AvatarGroup from "@/assets/Avatar group.png";
import Stars from "@/assets/Stars.svg";
import Nav from "./Nav";
import Link from "next/link";
import CustomCarousel from "./Swipe";
import Footer from "./Footer";
import travel from "@/assets/travel.jpg";
const Home = () => {
  return (
    <main className="flex flex-col  w-full max-w-[1640px]">
      <Nav />

      <div className="bg-hero-bg h-screen relative flex flex-col justify-center">
        <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
        {/* hero */}
        <div className="relative mt-6">
          <div className="md:max-w-screen-xl md:mx-auto px-4 py-16 flex flex-col text-gray-600  overflow-hidden md:px-8 ">
            <div className="flex-1 space-y-8   p-4">
              <h1 className="text-3xl md:text-[64px] text-white font-semibold md:leading-[72px]">
                The modern way to <br /> commute across cities{" "}
              </h1>
              <p className="text-lg md:text-[24px] text-white/80  max-w-2xl">
                AfriMove Technologies leads the way in transportation
                innovation, providing advanced mobility services to simplify
                travel for people all across Africa.
              </p>
              <Link
                href="/login"
                className=" py-2 px-12 text-white text-lg font-medium bg-[#175CD3]/90 duration-150 hover:bg-[#175CD3] active:bg-gray-900 rounded-full inline-flex"
              >
                Explore
              </Link>

              <div className="md:flex gap-4 mt-4">
                <Image src={AvatarGroup} alt="avatar group" />
                <span>
                  <span className="flex gap-2">
                    <Image src={Stars} alt="stars" />
                    <p className="text-[#d2d5db] text-base font-semibold">
                      5.0
                    </p>
                  </span>
                  <p className="text-[16px] text-[#e8eaed] ">
                    from 3,000+ reviews
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* carousel */}
      <div>
        <CustomCarousel />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px]  justify-center lg:gap-[8rem] gap-[2rem] border-2 p-5 h-[80vh] md:py-10 py-8">
        <div className="flex-col space-y-6 px-10 py-4 mt-8">
          <h1 className="text-4xl md:text-[64px] text-[#1D2939] font-semibold md:leading-[72px]">
            Enjoy the AfriMove
          </h1>
          <p className="text-xl md:text-[24px] text-[#667085] leading-[24px] max-w-2xl">
            Move Freely, Do Easily
          </p>
          <p className="mb-3">
            It is all you need in one travel app. Book bus tickets, hire a
            vehicle and pay bills.
          </p>
          <Link
            href="/login"
            className=" py-2 px-12  text-white text-lg font-medium bg-[#175CD3]/90 duration-150 hover:bg-[#175CD3] active:bg-gray-900 rounded-full inline-flex"
          >
            Start Booking
          </Link>
        </div>

        {/* images */}
        <div>
          <Image
            src={travel}
            alt="travel"
            className="h-full w-full rounded-[20px]"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
