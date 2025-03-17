import Carousel from "../ui/carousel";

const Home = () => {

    const images = [
        '/images/Slide1.PNG',
        '/images/Slide2.PNG',
        '/images/Slide3.PNG',
        '/images/Slide4.PNG',
        '/images/Slide5.PNG',
        '/images/Slide6.PNG',
        '/images/Slide7.PNG',
        '/images/Slide8.PNG',
        '/images/Slide9.PNG',
    ];




    return (
        <div className="flex items-center justify-center text-2xl">
            <Carousel images={images} />
        </div>
    );
};

export default Home;