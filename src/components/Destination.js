import "./DestinationStyles.css";
import des1 from "../assets/des1.jpg";
import des2 from "../assets/des2.jpg";
import des3 from "../assets/des3.jpg";
import des4 from "../assets/des4.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give the opportunity to see a lot, within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Mathura-Vrindavan with Agra- Fatehpur sikri"
        text=" Experience the Sacred Heart of India: Mathura, Vrindavan, Agra, and
      Fatehpur Sikri
      
      1. Mathura: The birthplace of Lord Krishna, Mathura exudes
      devotion in its bustling streets and vibrant temples, offering a
      spiritual journey during festivals like Janmashtami.
     
       2. Vrindavan: Immerse in the divine romance of Radha and
      Krishna amidst ancient temples resonating with bhajans and vibrant
      Holi celebrations.
     
      3. Agra: Witness the eternal love embodied by the Taj Mahal,
      marvel at the majestic Agra Fort, and delve into the rich Mughal
      history and culture.
      
      4. Fatehpur Sikri: Explore the deserted streets of Emperor
      Akbar's vision, adorned with magnificent structures like the Buland
      Darwaza and Jama Masjid, echoing tales of a glorious past."
        img1={des1}
        img2={des2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Discover Dubai: Where Luxury Meets Adventure in the Jewel of the Desert"
        text=" Welcome to Dubai, a city where dreams materialize into reality amidst the golden sands of the Arabian Desert. Here, modern marvels stand tall alongside ancient traditions, creating a captivating tapestry of experiences waiting to be explored.

        Dubai's skyline is a testament to human ingenuity, with iconic structures like the Burj Khalifa piercing the heavens. Marvel at the city's architectural wonders as you stroll along the Dubai Marina or take a sunset cruise along the pristine coastline.
        
        Whether you seek adrenaline-pumping adventures, cultural immersion, or simply a luxurious escape, Dubai promises an unforgettable journey filled with endless possibilities and boundless wonders."
        img1={des3}
        img2={des4}
      />
    </div>
  );
};

export default Destination;
