import Carousel from "../components/carousel/Carousel";
import slideData from '../store/carouselSlides';
import Container from "../components/panels/Container";
import HalfPagePanel from "../components/panels/HalfPagePanel";

const Home = () => {
    return (
        <>
            <Carousel slides={slideData} />
            <Container>
                <HalfPagePanel
                    leftNodes={(
                        <picture>
                            <source srcSet="https://picsum.photos/id/12/640/640" media="(min-width:720px)" />
                            <img className="w-full h-full object-cover rounded-xl" src="https://picsum.photos/id/12/480/480" alt="Panel Image 1" />
                        </picture>
                    )}
                    rightNodes={(
                        <p className="flex justify-center items-center m-4 text-gray-800 dark:text-gray-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reprehenderit, beatae maxime velit...
                        </p>
                    )}
                />
                <HalfPagePanel
                    invert
                    leftNodes={(
                        <picture>
                            <source srcSet="https://picsum.photos/id/13/640/640" media="(min-width:720px)" />
                            <img className="w-full h-full object-cover rounded-xl" src="https://picsum.photos/id/13/480/480" alt="Panel Image 2" />
                        </picture>
                    )}
                    rightNodes={(
                        <p className="flex justify-center items-center m-4 text-gray-800 dark:text-gray-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus reprehenderit, beatae maxime velit...
                        </p>
                    )}
                />
                <p className="text-center text-gray-600 dark:text-gray-300 mt-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium, doloremque fuga non quis...
                </p>
            </Container>
        </>
    )
}

export default Home;
