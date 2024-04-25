import "./TripStyles.css";
import TripData from "./TripData";
import des5 from "../assets/des5.jpg";
import des6 from "../assets/des6.jpg";
import des7 from "../assets/des7.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You Can discover unique destinations using Trippy</p>

      <div className="tripcard">
        <TripData
          image={des5}
          heading="Trip in Australia"
          text="Experience the wonders of Australia, from Sydney's iconic skyline to the awe-inspiring Outback. Dive into the Great Barrier Reef, trek through lush rainforests, and immerse yourself in Aboriginal culture. Whether you're seeking adventure or relaxation, Australia offers an unforgettable journey filled with diverse landscapes and vibrant experiences."
        />

        <TripData
          image={des6}
          heading="Trip in Manali"
          text="Discover the beauty of Manali amidst the Himalayas. Explore ancient temples, thrill in outdoor adventures in Solang Valley, and indulge in Himachali cuisine. Shop for local treasures and unwind by a bonfire under starlit skies. Manali promises tranquility and excitement in equal measure."
        />

        <TripData
          image={des7}
          heading="Trip in Kerela"
          text="Embark on a serene journey through Kerala's backwaters, explore the historic charm of Kochi, and savor the flavors of authentic Keralan cuisine. Immerse yourself in cultural performances and rejuvenating Ayurvedic treatments. Kerala offers a sensory delight, a glimpse into the heart of India's southern soul."
        />
      </div>
    </div>
  );
}

export default Trip;
