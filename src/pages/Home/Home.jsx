import "./Home.css";
import {
    Categories,
    Hero,
    HotPizza,
    PopularFoods,
    Services,
    Testimonials,
    WhyUs,
} from "../../sections";

const Home = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Services />
            <PopularFoods />
            <WhyUs />
            <HotPizza />
            <Testimonials />
        </>
    );
};

export default Home;
