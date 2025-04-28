import React from 'react'
import Navbar from '../Components/Navbar'
import Adventure from "../assets/adventures.webp"
import FirstImage from "../assets/h1.jpg"
import SecondImage from "../assets/h2.jpg"
import Footer from '../Components/Footer'
import ThirdImage from "../assets/h3.jpg"
import ForthImage from "../assets/h4.jpg"
import FifthImage from "../assets/h5.jpg"
import SixthImage from "../assets/h6.jpg"
import SeventhImage from "../assets/h22.jpg"
import EightImage from "../assets/h9.jpg"
import NinethImage from "../assets/l1.jpg"
import TenthImage from "../assets/l2.jpg"
import EleventhImage from "../assets/l3.jpg"
import TewelveImage from "../assets/l4.jpg"
import ThirteenImage from "../assets/l5.jpg"
import FortheenImage from "../assets/w1.jpg"
import FifteenImage from "../assets/w2.jpg"
import SixteenImage from "../assets/w3.jpg"
import SeventeenImage from "../assets/w4.jpg"
const Experience = () => {
    return (
        <>
            <Navbar />
            <section className="relative min-h-screen flex items-center justify-center">
                {/* Background Image */}
                <img
                    src={Adventure}
                    alt="Adventure Background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="relative z-10 text-center text-white">
                    {/* Small Text */}
                    <h2 className="text-2xl md:text-3xl font-light mb-4 italic">
                        experience the best of
                    </h2>

                    {/* Big Colorful Text */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-4">
                        <span className="text-pink-400">A</span>
                        <span className="text-green-400">D</span>
                        <span className="text-blue-400">V</span>
                        <span className="text-yellow-300">E</span>
                        <span className="text-pink-400">N</span>
                        <span className="text-blue-400">T</span>
                        <span className="text-purple-400">U</span>
                        <span className="text-pink-300">R</span>
                        <span className="text-purple-300">E</span>
                    </h1>

                    {/* Divider Decoration */}
                    <div className="mt-4 flex justify-center">
                        <div className="w-32 h-2 bg-white rounded-full"></div>
                    </div>
                </div>

                {/* Dark Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
            </section>
            <section className="h-screen w-full">
                <section className="flex flex-col md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={FirstImage}
                            alt="Luxury Tent Cities in Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <p className="text-3xl md:text-4xl font-bold mb-4">
                            Khajuraho
                        </p>

                        <p className="mb-6 text-gray-300 italic">
                            Most Khajuraho temples were built between 885 AD and 1050 AD by the Chandela dynasty. Historical records note that the Khajuraho temple site had 85 temples by the 12th century, spread over 20 square kilometers. Of these, only about 25 temples have survived, spread over six square kilometers Of the surviving temples, the Kandariya Mahadeva Temple is decorated with a profusion of sculptures with intricate details, symbolism and expressiveness of ancient Indian art.
                        </p>

                        <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-600 trasition  hover:text-slate-900 transition duration-300">
                            READ MORE
                        </a>
                    </div>
                </section>

                {/* Road Trip Section */}
                <section className="flex flex-col-reverse md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <p className="text-3xl md:text-4xl font-bold mb-4">
                            Gwalior
                        </p>

                        <p className="mb-6 text-gray-300 italic">
                            Gwalior is a major city in the central Indian state of Madhya Pradesh; it lies in northern part of the state and is one of the Counter-magnet cities. Located 343 kilometres (213 mi) south of Delhi, the capital city of India, 120 kilometres (75 mi) from Agra and 414 kilometres (257 mi) from Bhopal, the state capital, Gwalior occupies a strategic location in the Gird region of India. The historic city and its fortress have been ruled by several historic northern Indian kingdoms. From the Kachchhapaghatas in the 10th century, Tomars in the 13th century, it was passed on to the Mughal Empire, then to the Maratha in 1754, followed by the Scindia in the 18th century. In April 2021, It was found that Gwalior had the best air quality index (AQI 152) amongst the 4 major cities in Madhya Pradesh</p>

                            <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-600 trasition  hover:text-slate-900 transition duration-300">
                                READ MORE
                            </a>
                    </div>

                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={SecondImage}
                            alt="Scenic road through Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>
                </section>
                <section className="flex flex-col md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={ThirdImage}
                            alt="Luxury Tent Cities in Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <p className="text-3xl md:text-4xl font-bold mb-4">
                            Orchha
                        </p>

                        <p className="mb-6 text-gray-300 italic">
                        Orchha (or Urchha) is a town in Niwari district of Madhya Pradesh state, India. The town was established by rajput ruler Rudra Pratap Singh some time after 1501, as the seat of an eponymous former princely state of covering parts of central & north India, in the Bundelkhand region. Orchha lies on the Betwa River, 80 km from Tikamgarh & 15 km from Jhansi in Uttar Pradesh.
                        </p>

                        <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-600 trasition  hover:text-slate-900 transition duration-300">
                                READ MORE
                            </a>
                    </div>
                </section>

                {/* Road Trip Section */}
                <section className="flex flex-col-reverse md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <p className="text-3xl md:text-4xl font-bold mb-4">
                           Chanderi
                        </p>

                        <p className="mb-6 text-gray-300 italic">
                        Chanderi, is a town of historical importance in Ashoknagar District of the state Madhya Pradesh in India. It is situated at a distance of 127 km from Shivpuri, 37 km from Lalitpur, 55 km from Ashok Nagar and about 46 km from Isagarh. It is surrounded by hills southwest of the Betwa River. Chanderi is surrounded by hills, lakes and forests and is spotted with several monuments of the Bundela Rajputs and Malwa sultans. It is famous for ancient Jain Temples. Its population in 2011 was 33,081.
                        </p>

                        <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-700 hover:text-slate-900 transition duration-300">
                            READ MORE
                        </a>
                    </div>

                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={ForthImage}
                            alt="Scenic road through Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>
                </section>
                <section className="flex flex-col md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={FifthImage}
                            alt="Luxury Tent Cities in Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <p className="text-3xl md:text-4xl font-bold mb-4">
                       Datia
                        </p>

                        <p className="mb-6 text-gray-300 italic">
                        Datia is the district headquarter of the Datia District in north central Madhya Pradesh,a state of Central India. It is an ancient town, mentioned in the Mahabharata ruled by King Dantavakra. The city is 78 km from Gwalior, 325 km south of New Delhi and 344 km north of Bhopal. About 18 km from Datia is Sonagiri, a sacred Jain hill. Datia is also about 31 km from Jhansi and 52 km from Orchha. The nearest airport is at Gwalior. It was formerly the seat of the eponymous princely state in the British Raj. Datia is situated near Gwalior and on the border with Uttar Pradesh (U.P.).
                        </p>

                        <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-700 hover:text-slate-900 transition duration-300">
                            READ MORE
                        </a>
                    </div>
                </section>

                {/* Road Trip Section */}
                <section className="flex flex-col-reverse md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <p className="text-3xl md:text-4xl font-bold mb-4">
                           Sanchi
                        </p>

                        <p className="mb-6 text-gray-300 italic">
                        Sanchi is a Buddhist complex, famous for its Great Stupa, on a hilltop at Sanchi Town in Raisen District of the State of Madhya Pradesh, India. It is located in 46 kilometres (29 mi) north-east of Bhopal, capital of Madhya Pradesh.
                        </p>

                        <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-700 hover:text-slate-900 transition duration-300">
                            READ MORE
                        </a>
                    </div>

                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={SixthImage}
                            alt="Scenic road through Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>
                </section>
                <section className="flex flex-col md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={SeventhImage}
                            alt="Luxury Tent Cities in Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <p className="text-3xl md:text-4xl font-bold mb-4 ">
                            Tent Cities of Madhya Pradesh: Experience Adventure, Culture, and Comfort Amidst Nature
                        </p>

                        <p className="mb-6 text-gray-300 italic">
                            Madhya Pradesh, the heart of India, is not just a destination; it's an experience that brings
                            together a blend of culture, adventure, and natural beauty. The state is known for its diverse
                            range of accommodations, from luxurious hotel chains...
                        </p>

                        <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-700 hover:text-slate-900 transition duration-300">
                            READ MORE
                        </a>
                    </div>
                </section>

                {/* Road Trip Section */}
                <section className="flex flex-col-reverse md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Mandu
                        </h2>

                        <p className="mb-6 text-gray-300 italic">
                        Mandu or Mandavgad is an ancient city in the present-day Mandav area of the Dhar district. It is located in the Malwa and Nimar region of western Madhya Pradesh, India, at 35 km from Dhar city. In the 11th century, Mandu was the sub division of the Tarangagadh or Taranga kingdom. This fortress town on a rocky outcrop about 100 km (62 mi) from Indore is celebrated for its architecture.
                        </p>

                        <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-700 hover:text-slate-900 transition duration-300">
                            READ MORE
                        </a>
                    </div>

                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={EightImage}
                            alt="Scenic road through Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>
                </section>
                <section className="flex flex-col md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={NinethImage}
                            alt="Luxury Tent Cities in Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <p className="text-3xl md:text-4xl font-bold mb-4">
                        Bhopal
                        </p>

                        <p className="mb-6 text-gray-300 italic">
                        Bhopal is the capital city of the Indian state of Madhya Pradesh and the administrative headquarters of both Bhopal district and Bhopal division. It is known as the City of Lakes for its various natural and artificial lakes and for being one of the greenest cities in India. It is the 16th largest city in India and 131st in the world. After formation of Madhya Pradesh, the state capital Bhopal was a part of the Sehore district. It was bifurcated in 1972 and a new district Bhopal was formed. Flourishing around 1707, the city was the capital of the former Bhopal State, a princely state of the British ruled by the Nawabs of Bhopal. Numerous heritage structures from this period include the Taj-ul-Masajid and Taj Mahal palace. In 1984, the city was struck by the Bhopal disaster, one of the worst industrial disasters in history.
                        </p>

                        <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-700 hover:text-slate-900 transition duration-300">
                            READ MORE
                        </a>
                    </div>
                </section>

                {/* Road Trip Section */}
                <section className="flex flex-col-reverse md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Shivpuri
                        </h2>

                        <p className="mb-6 text-gray-300 italic">
                        Shivpuri is a city and a municipality in Shivpuri district located in the central Indian state of Madhya Pradesh. It is in the Gwalior Division of northwest Madhya Pradesh and is the administrative headquarters of Shivpuri District. It is situated at an altitude of 1,515 feet (462 m) above sea level.The city is a tourist destination in the monsoon season as it has a number of waterfalls like Bhura kho and Tunda Bharkha kho. Lakes in Shivpuri include Chandpatha jheel, Jadhav Sagar jheel, and other small lakes. The city is known for its greenery, forests and also as the former summer capital of the Scindia family who at one time ruled the Gwalior. The Indian leader Tatya Tope was hanged in Shivpuri in 1859. It also refers to a village in Muzaffarnagar.
                        </p>

                        <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-700 hover:text-slate-900 transition duration-300">
                            READ MORE
                        </a>
                    </div>

                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={TenthImage}
                            alt="Scenic road through Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>
                </section>
                <section className="flex flex-col md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={EleventhImage}
                            alt="Luxury Tent Cities in Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <p className="text-3xl md:text-4xl font-bold mb-4">
                           Jabalpur
                        </p>

                        <p className="mb-6 text-gray-300 italic">
                        Jabalpur (formerly Jubbulpore) is a city situated on the banks of Narmada River in the state of Madhya Pradesh, India. According to the 2011 census, it is the third-largest urban agglomeration in Madhya Pradesh and the country's 38th-largest urban agglomeration. Jabalpur is an important administrative, industrial and business center of Madhya Pradesh. The Madhya Pradesh High Court along with other important administrative headquarters of India and Madhya Pradesh are located in Jabalpur. It is generally accepted that the game of Snooker originated in Jabalpur. Jabalpur is the administrative headquarters of Jabalpur district (the second-most-populous district in Madhya Pradesh) and the Jabalpur division. It also is a major education centre in India. The city is known for the marble rocks on the river Narmada at Bhedaghat.
                        </p>

                        <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-700 hover:text-slate-900 transition duration-300">
                            READ MORE
                        </a>
                    </div>
                </section>

                {/* Road Trip Section */}
                <section className="flex flex-col-reverse md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Pachmarhi
                        </h2>

                        <p className="mb-6 text-gray-300 italic">
                        Embark on a mesmerizing journey to Pachmarhi with our meticulously crafted tour packages. Unveil the hidden gems of this enchanting destination and immerse yourself in its unparalleled beauty. With MP Holidays Pvt. Ltd., you can experience Pachmarhi tourism like never before. Explore the lush green forests, cascading waterfalls, and breathtaking viewpoints that adorn this picturesque hill station. Delight in the serenity of Bee Falls, witness the grandeur of Dhoopgarh sunset, and indulge in adventurous activities like trekking and rock climbing.
                        </p>

                        <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-700 hover:text-slate-900 transition duration-300">
                            READ MORE
                        </a>
                    </div>

                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={TewelveImage}
                            alt="Scenic road through Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>
                </section>
                <section className="flex flex-col md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={ThirteenImage}
                            alt="Luxury Tent Cities in Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <p className="text-3xl md:text-4xl font-bold mb-4">
                        Marble Rocks
                        </p>

                        <p className="mb-6 text-gray-300 italic">
                        The Marble Rocks is an area along the Narmada river in central India near the city of Jabalpur; in Bhedaghat of Jabalpur District, in the state of Madhya Pradesh. The river has carved the soft marble, creating a beautiful gorge of about 8 km in length. It is a popular Indian tourist destination. The local marble is mined and carved into various figures and transported all over India.
                        </p>

                        <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-700 hover:text-slate-900 transition duration-300">
                            READ MORE
                        </a>
                    </div>
                </section>

                {/* Road Trip Section */}
                <section className="flex flex-col-reverse md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Bandhavgarh National Park
                        </h2>

                        <p className="mb-6 text-gray-300 italic">
                        This park has a large biodiversity. The park has a large breeding population of leopards, and various species of deer. Maharaja Martand Singh of Rewa captured the first white tiger in this region in 1951. This white tiger, Mohan, is now stuffed and on display in the palace of the Maharajas of Rewa. Historically villagers and their cattle have been at a threat from the tiger. Rising mining activities around the park are putting the tigers at risk. The Park derived its name from the most prominent hill of the area which is said to have been given by Lord Rama to his brother Laxman to keep a watch on Lanka.
                        </p>

                        <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-700 hover:text-slate-900 transition duration-300">
                            READ MORE
                        </a>
                    </div>

                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={FortheenImage}
                            alt="Scenic road through Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>
                </section>
                <section className="flex flex-col md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={FifteenImage}
                            alt="Luxury Tent Cities in Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <p className="text-3xl md:text-4xl font-bold mb-4">
                        Kanha National Park
                        </p>

                        <p className="mb-6 text-gray-300 italic">
                        Kanha Tiger Reserve, also known as Kanha–Kisli National Park, is one of the tiger reserves of India and the largest national park of the state of Madhya Pradesh. The present-day Kanha area is divided into two protected areas, Hallon and Banjar, of 250 and 300 km2 (97 and 116 sq mi), respectively. Kanha National Park was created on 1 June 1955 and was designated a tiger reserve in 1973. Today, it encompasses an area of 940 km2 (360 sq mi) in the two districts Mandla and Balaghat.
                        </p>

                        <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-700 hover:text-slate-900 transition duration-300">
                            READ MORE
                        </a>
                    </div>
                </section>

                {/* Road Trip Section */}
                <section className="flex flex-col-reverse md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Panna National Park
                        </h2>

                        <p className="mb-6 text-gray-300 italic">
                        Panna National Park is a national park located in Panna and Chhatarpur districts of Madhya Pradesh in India. It has an area of 542.67 km2 (209.53 sq mi). It was declared in 1994 as the twenty second Tiger reserve of India and the fifth in Madhya Pradesh,[1] Panna was given the Award of Excellence in 2007 as the best maintained national park of India by the Ministry of Tourism of India. It is notable that by 2009, the entire tiger population had been eliminated by poaching with the collusion of forest department officials.
                        </p>

                        <a href="" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-700 hover:text-slate-900 transition duration-300">
                            READ MORE
                        </a>
                    </div>

                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={SixteenImage}
                            alt="Scenic road through Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>
                </section>
                <section className="flex flex-col md:flex-row bg-slate-900 text-white">
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            src={SeventeenImage}
                            alt="Luxury Tent Cities in Madhya Pradesh"
                            className="w-full h-full object-cover rounded"
                        />
                    </div>

                    <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                        <p className="text-3xl md:text-4xl font-bold mb-4">
                        Pench National Park
                        </p>

                        <p className="mb-6 text-gray-300 italic">
                        Pench National Park is a national park in India's Madhya Pradesh state, established in 1975 with an area of 257.26 km2 (99.33 sq mi). It includes Pench Tiger Reserve and derives its name from the Pench River that flows through the park from north to south dividing the park into almost equal western and eastern halves, the well-forested areas of Seoni and Chhindwara districts respectively. It was declared a sanctuary in 1965, raised to the status of national park in 1975 and enlisted as a tiger reserve in 1992.
                        </p>

                        <a href="https://mpholidays.in/" className="border border-white text-white px-6 py-2 w-40 hover:bg-green-700 hover:text-slate-900 transition duration-300">
                            READ MORE
                        </a>
                    </div>
                </section>

                {/* Road Trip Section */}
               
                <Footer />
            </section>

        </>
    )
}

export default Experience
