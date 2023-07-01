import { useEffect, useState } from 'react';
import bannerImage from '../../assets/images/banner-image-for-audio-hub.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// swiper styles css
import "swiper/css";
import "swiper/css/pagination";
import SingleMusic from '../SingleMusic/SingleMusic';
import { Slide, Fade } from 'react-awesome-reveal';

const Home = () => {

    const [allFeaturedMusics, setAllFeaturedMusics] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allMusicFeatured')
            .then(res => res.json())
            .then(data => setAllFeaturedMusics(data))
    }, [])

    return (
        <div>
            <img className='w-100' src={bannerImage} alt="" />
            <div>
                <Slide>
                    <h3 className="text-center fw-bold mt-3">Featured Musics</h3>
                </Slide>
                <Fade delay={1e3} cascade damping={1e-1}>
                    <p className="text-center text-xl">Here you will see the featured musics</p>
                </Fade>
                <hr className='border border-2 border-secondary mx-5' />
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper p-3"
                >
                    {
                        allFeaturedMusics.map(featuredMusic => <SwiperSlide
                            key={featuredMusic._id}
                        >
                            <SingleMusic
                                featuredMusic={featuredMusic}
                            ></SingleMusic>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
            <div className='mt-3'>
                <Slide>
                    <h3 className="text-center fw-bold">Your Favorite Playlist</h3>
                </Slide>
                <Fade delay={1e3} cascade damping={1e-1}>
                    <p className="text-center text-xl">Here you will see your favorite musics</p>
                </Fade>
                <hr className='border border-2 border-secondary mx-5' />
            </div>
        </div>
    );
};

export default Home;