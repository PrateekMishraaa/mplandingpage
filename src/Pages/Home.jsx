import React from 'react';
import Navbar from '../Components/Navbar';
import Lion from "../assets/lion.webp"
import Lion2 from "../assets/liontwo.webp"
import Lion3 from "../assets/lionthree.webp"
import Banner from "../assets/banner.jpg";
import Lotus from "../assets/Lotus.svg";
import Tour from "../assets/tour.webp"
import River from "../assets/river.webp"
import Boat from "../assets/boat.webp"
import Fort from "../assets/fort.webp"
import Lokeshwar from "../assets/lok.webp"
import Kanha from "../assets/kanha.webp"
import Omkar from "../assets/omkar.webp"
import Padawali from "../assets/padawali.webp"
import Khajuraho from "../assets/khajuraho.webp"
import Gwalior from "../assets/Gwalior-fort.webp"
import Indore from "../assets/Indore.jpg"
import Lake from "../assets/Upper Lake.webp"
import Bhopal from "../assets/Bhopal.webp"
import BaraSingha from "../assets/Barasingha.webp"
import Splendour from "../assets/Medieval splendour.webp"
import Gwaliorr from "../assets/Gwalior.webp"
import Narmada from "../assets/narmada.webp"
import Nature from "../assets/Nature.webp"
import Footer from '../Components/Footer';

// Sample posts data
const posts = [
  {
    id: 1,
    image: Lion,// Replace with your own image path
    title: "Narmada River Heritage Trail",
    description: "This journey takes us through central Madhya Pradesh, meandering along the Narmada River, a lifeline of Central India. Learn how the fates of the historical towns of Indore, Maheshwar, and Mandu are intertwined with this river. Empires came and perished for control of this holy river, second only to the Ganges River in sanctity.",
    startCity: "Indore",
    theme: "Heritage",
   
  },
  {
    id: 2,
    image: Lion2,// Replace with your own image path
    title: "Tiger Trail - Explore the Wild Heart of India: A Safari Adventure Through Bandhavgarh, Kanha, and Pench",
    description: "Embark on an exhilarating Tiger Trail through Bandhavgarh, Kanha, and Pench. Discover majestic wildlife, lush landscapes, and thrilling safaris in the heart of India's iconic national parks.",
    startCity: "Jabalpur",
    theme: "Wildlife",
    days: 7,
  },
  {
    id: 1,
    image: Lion3,// Replace with your own image path
    title: "Satpura Delight:WildLife,Heritage & Hills",
    description: "Embark on a captivating journey through central India, starting in Nagpur and transferring to Pench National Park for a stay at a charming resort. Enjoy activities like a nature walk, tribal dance, or an exhilarating night safari. Experience a thrilling jungle safari before heading to the serene hill station of Pachmarhi, exploring attractions such as Jata Shankar and ...",
    startCity: "Pench",
    theme: "Wildlife,Heritage,Hills,Adventure",
   
  },
  {
    id: 2,
    image: Tour, // Replace with your own image path
    title: "Majestic Madhya Pradesh:A-19- Day Journey Through History,Nature,and Heritage",
    description: "Explore the majestic beauty of Madhya Pradesh with a captivating itinerary that takes you through rich history, stunning nature, and vibrant heritage for an unforgettable journey. ...",
    startCity: "Gwalior",
    theme: "History,Nature,Heritage",
    days: 7,
  },
  {
    id: 1,
    image: River,// Replace with your own image path
    title: "A 6-Day Journey Through Madhya Pradesh's Nature Paradise",
    description: "Embark on a 6-day journey through Madhya Pradesh's nature paradise. Explore lush wildlife, breathtaking landscapes, and rich heritage. A perfect blend of adventure and tranquility awaits! ...",
    startCity: "Madai",
    theme: "Wildlife,Nature,Heritage",
   
  },
  {
    id: 2,
    image:Boat,// Replace with your own image path
    title: "Marble Magic Tour: 5-Day Journey Through Panna, Khajuraho & Jabalpur's Stunning Landscapes",
    description: "Discover the 'Marble Magic' tour: 5 days of exploring Panna's safaris, Khajuraho's temples, and Jabalpur's Dhuandhar Falls, Marble Rocks, and more. A perfect blend of nature and culture in MP! ...",
    startCity: " Panna",
    theme: "Nature,Wildlife,Heritage",
    days: 7,
  },
  {
    id: 1,
    image: Fort,// Replace with your own image path
    title: "Malwa Tour Itinerary: A Spiritual & Historical Journey in Madhya Pradesh",
    description: "Experience the 4N/5D Malwa Tour: Explore Ujjain's Mahakal Jyotirling, Omkareshwar temples, Maheshwar's forts & sarees, and Mandu's rich history in a compact spiritual journey. ...",
    startCity: "Ujjain",
    theme: "Spiritual,Historical",
   
  },
  {
    id: 2,
    image:Kanha,// Replace with your own image path
    title: "Majestic Madhya Pradesh: 8-Day Cultural, Nature & Wildlife Tour",
    description: "Explore MP's rich heritage and natural beauty with the 'Leisure & Wild' tour: Bhopal, Pachmarhi, Kanha, & Jabalpur. Enjoy history, wildlife safaris, and scenic wonders with 3-5 star stays. ...",
    startCity: "Bhopal",
    theme: "Culture, Nature,Wildlife",
    days: 7,
  },
  {
    id: 1,
    image: Lokeshwar,// Replace with your own image path
    title: "Jyotirlinga Tour of Madhya Pradesh: Ujjain, Omkareshwar & Indore - A Spiritual Sojourn",
    description: "Embark on a Jyotirlinga tour in MP: Explore Ujjain, Omkareshwar & Indore for a divine journey through sacred shrines and spiritual bliss. .",
    startCity: "Ujjain",
    theme: "Spiritual",
   
  },
  {
    id: 2,
    image: Omkar, // Replace with your own image path
    title: "Explore West and Central Madhya Pradesh: Shrines, Heritage, Wildlife & Nature",
    description: "Discover the best of West and Central Madhya Pradesh with this itinerary. Explore sacred shrines, timeless heritage, and cultural gems in a journey through history and spirituality. ...",
    startCity: "Omkareshwar",
    theme: "Spiritual,Heritage,Wildlife,Nature",
    days: 7,
  },
  {
    id: 1,
    image: Padawali,// Replace with your own image path
    title: "Heritage & Wildlife Tour: Northern Madhya Pradesh Itinerary",
    description: "Heritage & Wildlife of Northern Madhya Pradesh combines history and adventure with visits to iconic forts, temples, and thrilling wildlife experiences. ...",
    startCity: " Gwalior",
    theme: "Heritage,Wildlife",
   
  },
  {
    id: 2,
    image: Khajuraho, // Replace with your own image path
    title: "Explore the Rich Heritage of Madhya Pradesh: A Journey through History, Temples, and Wildlife",
    description: "Explore Madhya Pradesh, the 'Heart of India,' through the Gwalior, Orchha, and Khajuraho itinerary, featuring rich heritage, iconic temples, forts, and vibrant wildlife. ...",
    startCity: "Gwalior",
    theme: "History,Temples,Wildlife",
    days: 7,
  },
  {
    id: 1,
    image: Gwalior,// Replace with your own image path
    title: "Embark on a mesmerizing journey through Gwalior, Khajuraho, Bandhavgarh & more. Discover iconic monuments, rich culture & thrilling wildlife in Madhya Pradesh! ...",
    description: "This journey takes us through central Madhya Pradesh, meandering along the Narmada River, a lifeline of Central India. Learn how the fates of the historical towns of Indore, Maheshwar, and Mandu are intertwined with this river. Empires came and perished for control of this holy river, second only to the Ganges River in sanctity.",
    startCity: "Gwalior",
    theme: " Heritage,History,Culture,Nature",
   
  },
  {
    id: 2,
    image: Indore, // Replace with your own image path
    title: "Spiritual and Historical Gems: A Journey through Indore, Ujjain, Omkareshwar, Mandu, and Maheshwar",
    description: "Discover the Spiritual and Historical Marvels of Madhya Pradesh: A 5 Nights / 6 Days Itinerary(Indore - Ujjain - Omkareshwar - Mandu - Maheshwar) ...",
    startCity: "Indore",
    theme: "Heritage,Spritual",
    days: 7,
  },
  {
    id: 1,
    image: Lake,// Replace with your own image path
    title: "Heritage, Wildlife & Scenic Wonders: A 8-Day Journey through Madhya Pradesh",
    description: "Embark on an 8-day adventure exploring Bhopal's heritage, Pachmarhi's scenic beauty, Jabalpur's marble cliffs, and Kanha's vibrant wildlife, blending history, nature, and thrill in Madhya Pradesh. ...",
    startCity: "Bhopal",
    theme: "Heritage,Wildlife Nature",
   
  },
  {
    id: 2,
    image: Bhopal, // Replace with your own image path
    title: "Explore the Heart of India: A 7-Day Journey through Bhopal, Sanchi, Pachmarhi, and Satpura",
    description: "Explore Bhopal's rich heritage, Sanchi's UNESCO stupa, Gyaraspur's history, Bhimbetka's ancient caves, Pachmarhi's serene hills, and Satpura's tiger reserve! ...",
    startCity: "Bhopal",
    theme: "Heritage,Nature,Spiritual",
    days: 7,
  },
  {
    id: 1,
    image: BaraSingha,// Replace with your own image path
    title: "Call of the Wild - Kanha",
    description: "There is something magical about being on a wildlife safari!  Travelers pack your bags to get the glimpse of what you can see on your excursion to Kanha National Park. ...",
    startCity: "Kanha",
    theme: "Wildlife,Nature",
   
  },
  {
    id: 2,
    image: Splendour, // Replace with your own image path
    title: "Medieval Splendour",
    description: "Madhya Pradesh is frittered with several destinations boasting a variety of tourist attractions that are rich in spirituality, culture and much more. Khajuraho and Orchha are two of such des ...",
    startCity: "Orchha",
    theme: "Heritage",
    days: 7,
  },
  {
    id: 1,
    image: Gwaliorr,// Replace with your own image path
    title: "Down Memory Lane",
    description: "Madhya Pradesh is bestowed with so many mindblowing tresures to be explored all round the year. Come and roam around in the lane of these magnifient cities.  ...",
    startCity: "Gwalior",
    theme: "Heritage",
   
  },
  {
    id: 2,
    image: Narmada, // Replace with your own image path
    title: "Alongside Narmada",
    description: "Hanuwantiya, Omkareshwar and Maheswar emcompasses everything that nature and heritage lover would like to experience during their visit in Madhya Pradesh. Visit the heartland of India and take away lots of good memories to cherish lifetime. ....",
    startCity: " Indore",
    theme: "Nature",
    days: 7,
  },
  {
    id: 1,
    image: Nature,// Replace with your own image path
    title: "Nature and Heritage",
    description: "Bandhavgarh and khajuraho the amazing destination of Madhya Pradesh will showcase serenity and great structures. After visiting these location you'll take great memories and ensure your visit again to the heartland of India.  ...",
    startCity: "Jabalpur",
    theme: "Wildlife",
   
  },
 
];

const Home = () => {
  return (
    <>
      <Navbar />
      
      <section className="min-h-screen w-full">
        {/* Banner Section */}
        <div className="h-[60vh] w-full relative">
          <img src={Banner} alt="Banner" className="h-full w-full object-cover" />
          <p className="absolute bottom-20 left-1/2 transform -translate-x-1/2 font-bold italic text-white text-5xl bg-black/80 p-2 rounded-2xl">
            Suggested Itineraries
          </p>
          <img src={Lotus} alt="Lotus" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20" />
        </div>

        {/* Posts Section */}
        <section className="py-12 px-4 sm:px-8 lg:px-24 bg-white">
          {posts.map(post => (
            <div key={post.id} className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
              {/* Image */}
              <img src={post.image} alt={post.title} className="w-full md:w-1/3 h-60 object-cover rounded-lg shadow-md" />
              
              {/* Text Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-red-800 mb-4">{post.title}</h2>
                <p className="text-gray-600 leading-6 mb-4">{post.description}</p>
                <p className="font-semibold mb-2"><span className="text-black">Travel Start City:</span> {post.startCity}</p>
                <p className="font-semibold mb-4"><span className="text-black">Travel Theme:</span> {post.theme}</p>
                
                <div className="flex items-center justify-between mt-4">
                
                  <a href="https://mpholidays.in/" className="px-6 py-2 bg-green-700 font-semibold hover:bg-green-500  hover:text-white transition rounded-md">
                    View Detail
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

      </section>

      <Footer />
    </>
  );
};

export default Home;
