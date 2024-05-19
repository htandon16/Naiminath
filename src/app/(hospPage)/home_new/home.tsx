import AboutHome from "@/app/(components)/home/about/page";
import ApplyHome from "@/app/(components)/home/apply/page";
import BlogsHome from "@/app/(components)/home/blogs/page";
import WhyChoose from "@/app/(components)/home/chooseUs/page";
import EventsHome from "@/app/(components)/home/events/page";
import Hero from "@/app/(components)/home/hero/page";
import Youtube from "@/app/(components)/home/youtube/page";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Home = () => {
    return (
        <div className="home font-serif ">
            <Hero />
            <AboutHome />
            <WhyChoose />
            <Youtube />
            <EventsHome />
            <BlogsHome />
            <ApplyHome />
        </div>
    );
};
export default Home;
