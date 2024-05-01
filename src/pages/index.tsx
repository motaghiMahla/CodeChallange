import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/container/HomePage/HeroSection"));
const QuickAccsess = dynamic(() => import("@/container/HomePage/QuickAccsess"));
const GetHired = dynamic(() => import("@/container/HomePage/GetHired"));
const Career = dynamic(() => import("@/container/HomePage/Career"));
const LatestJobs = dynamic(() => import("@/container/HomePage/LatestJobs"));

const Index = ({}) => {
  return (
    <div
      className={`flex flex-col gap-2 md:gap-3 inset-0   sm:pt-0 overflow-auto w-full `}
      id={"homePage"}
    >
      <HeroSection />
      <QuickAccsess />
      <GetHired />
      <Career />
      <LatestJobs />
    </div>
  );
};

export default Index;

export const getServerSideProps = async () => {
  return {props: {}};
};
