import React from 'react'
import Navbar from '../Components/Navbar'
import Hotel from "../assets/hotel-4.jpg"
import Hoteltwo from "../assets/hotel-5.jpg"
import Hotelthree from "../assets/hotel-6.jpg"
import Hotelfour from "../assets/hotel-7.jpg"
import Hotelfive from "../assets/hotel-8.jpg"
import h1 from "../assets/ht1.jpg"
import h2 from "../assets/ht2.jpg"
import h3 from "../assets/ht3.jpg"
import Indore from "../assets/indore.jpg"
import Kanha from "../assets/kanha.webp"
import Khajuraho from "../assets/khajuraho.webp"
import L1 from "../assets/l1.jpg"
import L2 from "../assets/l2.jpg"
import L3 from "../assets/l3.jpg"
import L4 from "../assets/l4.jpg"
import L5 from "../assets/l5.jpg"
import Footer from '../Components/Footer'
import Mahesh from "../assets/maheswar.webp"
import Narmada from "../assets/narmada.webp"
import Nature from "../assets/Nature.webp"
import Omkar from "../assets/omkar.webp"
import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"

const Gallery = () => {
    const images = [
        {
            image: Hotel,
            description: "Experience luxury redefined in our premium suites with breathtaking views and world-class amenities."
        },
        {
            image: Hoteltwo,
            description: "Modern comfort meets traditional charm in our elegantly designed rooms for the perfect stay."
        },
        {
            image: Hotelthree,
            description: "Unwind in our spacious accommodations featuring contemporary decor and plush furnishings."
        },
        {
            image: Hotelfour,
            description: "Every corner of our hotel is designed to provide both comfort and aesthetic pleasure."
        },
        {
            image: Hotelfive,
            description: "Indulge in the perfect blend of luxury and homely comfort in our executive rooms."
        },
        {
            image: h1,
            description: "Our dining spaces offer a perfect ambiance for enjoying exquisite culinary creations."
        },
        {
            image: h2,
            description: "Relax and rejuvenate in our thoughtfully designed spaces that emanate tranquility."
        },
        {
            image: h3,
            description: "Create memorable moments in our elegant settings perfect for both leisure and business."
        },
        {
            image: Indore,
            description: "Explore the vibrant city of Indore, known for its palaces, temples, and delectable street food."
        },
        {
            image: Kanha,
            description: "Discover the wilderness of Kanha National Park, home to majestic tigers and diverse wildlife."
        },
        {
            image: Khajuraho,
            description: "Marvel at the UNESCO World Heritage temples of Khajuraho with their intricate sculptures and architecture."
        },
        {
            image: L1,
            description: "Our landscaped gardens provide a serene escape into nature's embrace."
        },
        {
            image: L2,
            description: "Poolside perfection awaits with refreshing waters and comfortable lounging areas."
        },
        {
            image: L3,
            description: "Every pathway in our property leads to new discoveries and moments of peace."
        },
        {
            image: L4,
            description: "Our outdoor spaces are designed for relaxation and memorable social gatherings."
        },
        {
            image: L5,
            description: "Sunset views that create the perfect backdrop for romantic evenings and quiet contemplation."
        },
        {
            image: Mahesh,
            description: "Visit historic Maheshwar on the banks of Narmada, famous for its ghats and Maheshwar Fort."
        },
        {
            image: Narmada,
            description: "Experience the sacred Narmada River, one of India's holiest waterways with spectacular riverfront views."
        },
        {
            image: Nature,
            description: "Immerse yourself in the breathtaking natural beauty that surrounds our carefully chosen locations."
        },
        {
            image: Omkar,
            description: "Discover spiritual tranquility at Omkareshwar, the sacred island shaped like Om on the Narmada River."
        },
        {
            image: p1,
            description: "Our professional staff ensures your stay is comfortable, memorable, and exceeds all expectations."
        },
        {
            image: p2,
            description: "Experience warm hospitality and personalized service from our dedicated team members."
        },
        {
            image: p3,
            description: "Our culinary experts craft delectable dishes that take you on an unforgettable gastronomic journey."
        },
        {
            image: p4,
            description: "Events at our property are handled with meticulous attention to detail by our experienced team."
        },
    ]
    
    return (
        <>
            <Navbar/>
            <section className="min-h-screen w-full p-8 bg-stone-50">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-green-700 italic">Our <span className="text-red-800">Gallery</span></h1>
                    <p className="mt-4 text-gray-600 max-w-3xl mx-auto">Discover the beauty and comfort of our accommodations and explore the breathtaking destinations of Madhya Pradesh through our curated collection of images.</p>
                </div>
                
                <div className="w-full p-5">
                    <div className="flex flex-wrap gap-10 justify-center">
                        {
                            images.map((item, index) => (
                                <div key={index} className="h-auto w-80 group overflow-hidden transition-all duration-300 hover:shadow-xl rounded-2xl">
                                    <div className="h-60 w-full overflow-hidden">
                                        <img 
                                            src={item.image} 
                                            alt={`Gallery image ${index + 1}`} 
                                            className="h-full w-full object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110" 
                                        />
                                    </div>
                                    <div className="p-4 bg-white rounded-b-2xl">
                                        <p className="text-gray-700 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
                <div className="text-center mt-16">
                    <h2 className="text-2xl font-semibold text-green-700">Explore the Heart of Incredible India</h2>
                    <p className="mt-3 text-gray-600 max-w-4xl mx-auto">
                        Our carefully selected locations showcase the rich cultural heritage, natural wonders, and spiritual significance 
                        of Madhya Pradesh. From the serene banks of Narmada to the majestic temples of Khajuraho, we invite you to 
                        experience the magic of central India while enjoying our unparalleled hospitality.
                    </p>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Gallery