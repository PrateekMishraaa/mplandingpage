import React from 'react'
import Navbar from '../Components/Navbar'
import Nature from "../assets/natures.webp"
import Lotus from "../assets/Lotus.svg"
import Footer from '../Components/Footer'
import Banner from "../assets/banner.jpg"
import Barasingha from "../assets/Barasingha.webp"
import Bhopal from "../assets/Bhopal.webp"
import Fort from "../assets/fort.webp"
import Gwalior_fort from "../assets/Gwalior-fort.webp"
import Gwalior from "../assets/Gwalior.webp"
import h1 from "../assets/h1.jpg"
import h2 from "../assets/h2.jpg"
import h3 from "../assets/h3.jpg"
import h4 from "../assets/h4.jpg"
import h5 from "../assets/h5.jpg"
import h6 from "../assets/h6.jpg"
import h9 from "../assets/h9.jpg"
import h22 from "../assets/h22.jpg"
import Indore from "../assets/Indore.jpg"
import Kanha from "../assets/kanha.webp"
import Khajuraho from "../assets/Khajuraho.webp"
import L1 from "../assets/l1.jpg"
import L2 from "../assets/l2.jpg"
import L3 from "../assets/l3.jpg"
import L4 from "../assets/l4.jpg"
import L5 from "../assets/l5.jpg"
import Lion from "../assets/lion.webp"
import Lion2 from "../assets/liontwo.webp"
import Lion3 from "../assets/lionthree.webp"
import Lok from "../assets/Lok.webp"
import Narmada from "../assets/narmada.webp"
import Maheshwar from "../assets/maheswar.webp"
import Naturee from "../assets/Nature.webp"
import Omkar from "../assets/omkar.webp"
import P1 from "../assets/p1.jpg"
import P2 from "../assets/p2.jpg"
import P3 from "../assets/p3.jpg"
import P4 from "../assets/p4.jpg"
import Padawali from "../assets/padawali.webp"
const Blogs = () => {
    const blogs = [
        {
            image: Banner,
            Title: "Untravelling the Intangible Heritage of Madhya Pradesh",
            Description: "Madhya Pradesh the heart of India, is a treasure trove of cultural wealth,where traditions are not just preserved but lived through generat...."
        },
        {    image:Barasingha,
            Title: "Traditional Homestays in Khajuraho: Explore Culture and Comfort",
            Description: "Khajuraho, famous for its stunning UNESCO listed temples, is not just a destination but a journey into Madhya Pradesh's ri ..."
        },
        {   image:Bhopal,
            Title: "Madhya Pradesh's Heritage Trail: Newly Added Sites on UNESCO's Tentative List",
            Description: "Madhya Pradesh, often celebrated as the heart of India, is a land of timeless heritage, where ..."
        },
        {   image:Fort,
            Title: "Trekking Adventures in Madhya Pradesh : Into the Heart of the Wilderness",
            Description: "Trekking in Madhya Pradesh presents a unique adventure that stands apart from the rest. The paths lead you through lush forests, undulating v ..."
        },
        {   image:Gwalior_fort,
            Title: "Three Remarkable Treasures of Madhya Pradesh Added to UNESCO's Tentative Heritage List",
            Description: "Madhya Pradesh celebrates a significant milestone as three extraordinary sites - the ingenious Khooni Bhandara water system of Burhanpur, the ..."
        },
        {   image:Gwalior,
            Title: "Island Resorts of Madhya Pradesh: A Hidden Paradise",
            Description: "When you think of an island getaway, your mind might drift to tropical beaches, swaying palm trees, and ocean waves. But did you know that Ma ..."
        },
        {   image:h1,
            Title: "Triveni Museum, Ujjain: A Timeless Walk Through History",
            Description: "A Tapestry of History and CultureUjjain holds a prominent place in Indian history. It was onc ..."
        },
        {
            image:h2,
            Title: "Journey Through the Traditional Folk Dances of Madhya Pradesh: A Celebration of Culture and Tradition",
            Description: "Madhya Pradesh, the heart of India, has a rich cultural heritage, beautifully reflected in its diverse folk dances. These dances, deeply root ..."
        },
        {   image:h3,
            Title: "Magnificent Escapes: Must-Visit Destinations Around Indore",
            Description: "Nestled in the heart of Madhya Pradesh, Indore is a city that perfectly blends historical charm with modern vibrance. Known for its delectabl ..."
        },
        {   image:h4,
            Title: "Ratapani Wildlife Sanctuary & Tiger Reserve Near Bhopal (2025)",
            Description: "Madhya Pradesh Strengthens Tiger Conservation with 8th Dedicated ReserveImagine finding a t ..."
        },
        {   image:h5,
            Title: "Holiday Calendar 2025: Unveil the Wonders of Madhya Pradesh on Long Weekends!",
            Description: "Step into 2025 with a golden opportunity to map out your year! With 16 gazetted holidays and 29 additional day-offs, it's the perfect time to ..."
        },
        {   image:h6,
            Title: "American newspaper includes Madhya Pradesh in the list of 2025's go-to global destination",
            Description: "Madhya Pradesh has been recognised by a popular American newspaper as one of the Go-To Destinations for 2025. The state is adorne ..."
        },
        {   image:h9,
            Title: "Kakanmath Temple: A Testament to Timeless Grandeur in Morena, Madhya Pradesh",
            Description: "Nestled in the historic land of Morena, this ancient Shiva temple, believed to have been built by Kachchhapaghata ruler Kirtiraj, stands as a ..."
        },
        {   image:h22,
            Title: "The Journey of Gond Art: From Mud Walls to International Galleries",
            Description: "While a number of traditional Indian arts and crafts are popular across the globe, Gond Adivasi Chitrakala holds a significant place of its o ..."
        },
        {   image:h9,
            Title: "Chanderi Eco-Retreat : A Celebration of Elegance, Heritage, and Luxury",
            Description: "Renowned travel chroniclers such as Abul Afzl and Ibn Batuta once described Chanderi - a historic town in the Ashoknagar district of Madhya P ..."
        },
        {   image:Indore,
            Title: "Narmada Parikrama Yatra: The Sacred Journey To Discover The Self",
            Description: "Rivers have always held a sacred place in Hindu culture, and among them, the Narmada is revered as one of the holiest. The Narmada River basi ..."
        },
        {   image:Kanha,
            Title: "Bhagoriya Festival: A Vibrant Celebration of Tribal Culture in Madhya Pradesh",
            Description: "Madhya Pradesh, the cultural heart of India, is home to a tapestry of traditions, each resonating with stories of legacy and joy. Among these ..."
        },
        {   image:Khajuraho,
            Title: "Madhya Pradesh: The Ultimate MICE Destination - Merging Business with leisure",
            Description: "Madhya Pradesh is a premier hub for MICE tourism, with key destinations like Bhopal, Khajuraho, Jabalpur, Indore, and Gwal ..."
        },
        {   image:L1,
            Title: "Discover the Spiritual Legacy of Sandipani Ashram in Ujjain: A Journey into the Ancient Wisdom",
            Description: "Nestled on the banks of the sacred Kshipra River, just 6 km from Ujjain Junction, lies the revered Sandipani Ashram - one of Ujjain's most si ..."
        },
        {   image:L2,
            Title: "Tent Cities of Madhya Pradesh: Experience Adventure, Culture, and Comfort Amidst Nature",
            Description: "Madhya Pradesh, the heart of India, is not just a destination; it's an experience that brings together a blend of culture, adventure, and nat ..."
        },
        {   image:L3,
            Title: "Harsiddhi Temple: A Spiritual Odyssey to Ujjain's Sacred Shakti Peetha",
            Description: "Nestled in the heart of Ujjain, the Harsiddhi temple is one of the two revered Shakti Peethas of Madhya Pradesh. One of the most ancient temp ..."
        },
        {   image:L4,
             Title: "Terracotta Art of Madhya Pradesh: Breathing Life into Festivals and Fairs",
            Description: "Madhya Pradesh, the heart of India, is a vibrant tapestry of diverse cultures, rich traditions, and timeless craftsmanship. Among its many tr ."
        },
        {   image:L5,
            Title: "The Timeless Symphony of Tansen Samaroh: A Celebration of the 100th Edition",
            Description: "Classical music, with its profound melodies, has the unique ability to transcend time and touch the soul. In India, classical music forms the ..."
        },
        {   image:Lion,
            Title: "Exploring Homestays in Gwalior: A perfect blend of comfort and luxury!",
            Description: "Imagine waking up to the warmth of a local family, surrounded by the rustic charm of Madhya Pradesh's villages or the scenic beauty of its to ..."
        },
        {   image:Lion2,
            Title: "Madhya Pradesh: A Kaleidoscope of Rich Cultural Experiences",
            Description: "Madhya Pradesh, the heart of Incredible India, is a vibrant tapestry of culture and tradition, where every corner reveals a new facet of its ..."
        },
        {   image:Lion3,
            Title: "Discovering the Ancient Dharmrajeshwar Cave Temple in Mandsaur",
            Description: "Nestled in the heart of Madhya Pradesh, the Dharmarajeshwar cave temple is a hidden gem that radiates an ancient charm and spiritual aura. Lo ..."
        },
        {   image:Lok,
            Title: "Raneh Falls - A Captivating Waterfall Near Khajuraho, Madhya Pradesh",
            Description: "Nestled in Madhya Pradesh, near the historic town of ..."
        },
        {   image:Maheshwar,
            Title: "Raneh Falls - A Captivating Waterfall Near Khajuraho, Madhya Pradesh",
            Description: "Nestled in Madhya Pradesh, near the historic town of ..."
        },
        {   image:Narmada,
            Title: "Discovering the Charming Homestays near Orchha for Memorable Stays",
            Description: "Nestled along the serene banks of the Betwa River in Madhya Pradesh, Orchha is a hidden gem that enchants visitors with its timeless beauty, ..."
        },
        {   image:Naturee,
            Title: "Experience the Grand Mahakal Sawari in Ujjain",
            Description: "Nestled in the heart of Madhya Pradesh, Ujjain stands as a beacon of spiritual devotion and cultural heritage. This ancient city, home to the ..."
        },
        {    image:Omkar,
            Title: "Exploring State Museums: Discover the Rich Heritage of Madhya Pradesh",
            Description: "Madhya Pradesh invites you to explore its rich cultural heritage through its captivating state museums. These repositories of history offer a ..."
        },
        {    image:P1,
            Title: "Dhuandhar Falls and Bhedaghat - Must See Natural wonders of Jabalpur",
            Description: "Jabalpur is graced with picturesque landscapes and numerous must-see attractions, making it a premier multi-specialty destination. The enchan ..."
        },
        {   image:P2,
            Title: "Homestays Near Pachmarhi: A Gateway to the Scenic Beauty of Madhya Pradesh",
            Description: "Madhya Pradesh, the land of endless possibilities, has always been a talking point among travellers and enthusiasts across India. The destina ..."
        },
        {   image:P3,
            Title: "Dive into History and Mystery at Matangeshwar Temple, Khajuraho",
            Description: "Nestled in the historic town of Khajuraho, Madhya Pradesh, the Matangeshwar Temple stands as a testament to India's rich spiritual and cultur ..."
        },
        {   image:P4,
            Title: "Discover Madhya Pradesh from New Heights with Air Taxis!",
            Description: "Madhya Pradesh, the heart of India, is set to revolutionise travel with the launch of Air Taxis! Imagine soaring over lush green landscapes, ..."
        },
        {   image:Padawali,
            Title: "Discovering the Historical Marvels of Central India: A Heritage Exploration in Madhya Pradesh - Part 2",
            Description: "As we continue our journey through the rich tapestry of historical wonders of Madhya Pradesh, we find ourselves immersed in a realm where the ..."
        },
    ]
    return (
        <>
            <Navbar />
            <section className="h-96 w-full relative">
                <img src={Nature} alt="" className="h-full w-full" />
                <p className="absolute bottom-20 left-1/2 transform -translate-x-1/2 font-bold font-serif text-white text-4xl bg-black/80 p-2 rounded-2xl">
                    Madhya Pradesh Tourism Blogs
                </p>
                <img src={Lotus} alt="Lotus" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20" />
            </section>
            <section className="w-full px-4 py-8">
                <div className="max-w-6xl mx-auto grid gap-8">
                    {blogs.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 items-start border-b pb-6">
                            <img
                                src={item.image} // Replace with your blog images later
                                alt="Blog Image"
                                className="w-full md:w-48 h-36 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                                <h2 className="text-xl font-semibold text-[#5b0b0b] mb-2">{item.Title}</h2>
                                <p className="text-gray-700">{item.Description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Blogs
