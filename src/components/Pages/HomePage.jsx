import {
  Eye,
  Import,
  ShoppingBag,
  ShoppingCart,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import GreetUser from "../Cards/GreetUser";
import StatCard from "../Cards/StatCard";
import BarChart from "../Cards/BarChart";
import PieChart from "../Cards/PieChart";
import LineChart from "../Cards/LineChart";
import CommentCards from "../Cards/CommentCards";

export const metadata = {
  title: "Dashboard | ",
};
const data1 = [
  { x: 1, y: 2 },
  { x: 2, y: 5 },
  { x: 3, y: 3 },
  { x: 4, y: 6 },
];

const data2 = [
  { x: 1, y: 4 },
  { x: 2, y: 3 },
  { x: 3, y: 6 },
  { x: 4, y: 2 },
];

const data3 = [
  { x: 1, y: 1 },
  { x: 2, y: 3.5 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];

const data4 = [
  { x: 1, y: 2.5 },
  { x: 2, y: 4.5 },
  { x: 3, y: 3 },
  { x: 4, y: 6 },
];

const HomePage = () => {
  return (
    <>
      <GreetUser />
      <section className="w-full px-4 pt-2 md:px-20 lg:px-40">
        <div className="2xl:gap-7.5 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
          <StatCard
            number={46}
            title="Total Views"
            percentage={95}
            icon={
              <Eye className="h-10 w-12 p-2 text-white bg-indigo-400 rounded-lg" />
            }
          />
          <StatCard
            number={42}
            title="Total Followers"
            percentage={95}
            icon={
              <Users className="h-10 w-12 p-2 text-white bg-blue-500 rounded-lg" />
            }
          />
          <StatCard
            number={456}
            title="Total Followings"
            percentage={95}
            icon={
              <UserPlus className="h-10 w-12 p-2 text-white bg-green-500 rounded-lg" />
            }
          />
          <StatCard
            number={56}
            title="Saved Posts"
            percentage={95}
            icon={
              <Import className="h-10 w-12 p-2 text-white bg-yellow-500 rounded-lg" />
            }
          />
        </div>
        <div className="flex gap-6">
          <div
            style={{
              width: "790px",
              // margin: "0 auto",
              // height: "400px",
              backgroundColor: "white",
              marginTop: "20px",
              padding: "10px",
              rounded: "600px",
              borderRadius: "10px",
            }}
          >
            <h2 className="text-2xl font-bold">Profile Visits</h2>
            <BarChart />
          </div>
          <PieChart />
        </div>
        {/* <LineChart /> */}
        <div className="flex gap-6">
          <div className="py-8">
            <LineChart
              title="Europe"
              title1="280"
              data={data1}
              strokeColor="#FF5733"
              gradientId="gradient1"
            />
            <LineChart
              title="India"
              data={data2}
              title1="280"
              strokeColor="#33C3FF"
              gradientId="gradient2"
            />
            <LineChart
              title="Australia"
              title1="280"
              data={data3}
              strokeColor="#28A745"
              gradientId="gradient3"
            />
            <LineChart
              title="USA"
              title1="280"
              data={data4}
              strokeColor="#6F42C1"
              gradientId="gradient4"
            />
          </div>
          <div className="py-8">
            <CommentCards />
          </div>
        </div>
        <p className="py-4">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://mymeals.in"
            className="text-brand-950 underline underline-offset-4"
            title="Go to Example com"
            alt="a to example Website"
          >
            My Meals Company
          </a>
        </p>
      </section>
    </>
  );
};

export default HomePage;
