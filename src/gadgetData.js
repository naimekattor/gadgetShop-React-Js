const gadgetItems = [
  {
    id: 1,
    name: "Smartphone Pro X",
    description: "A flagship smartphone with 120Hz AMOLED display and triple cameras.",
    rating: 4.8,
    price:1000,
    categories: "Smartphones", 
    bestseller: true,
    mainImage: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 2,
    name: "Wireless Earbuds Ultra",
    description: "Noise-canceling wireless earbuds with immersive sound quality.",
    rating: 4.6,
    price:2000,
    categories: "Audio",
    bestseller: true,
    mainImage: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/30009009/pexels-photo-30009009/free-photo-of-minimalist-wireless-earbuds-on-black-surface.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 3,
    name: "4K Action Camera",
    description: "Waterproof 4K action camera with wide-angle lens and image stabilization.",
    rating: 4.5,
    price:1050,
    categories: "Cameras",
    bestseller: false,
    mainImage: "https://images.pexels.com/photos/690806/pexels-photo-690806.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/1276531/pexels-photo-1276531.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/28040516/pexels-photo-28040516/free-photo-of-gopro-hero-11.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 4,
    name: "Smart Watch Series 5",
    description: "Advanced fitness tracker with heart rate monitoring and GPS.",
    rating: 4.7,
    price:1048,
    categories:  "Fitness",
    bestseller: true,
    mainImage: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/437036/pexels-photo-437036.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 5,
    name: "Gaming Laptop Z",
    description: "High-performance gaming laptop with RTX graphics and 16GB RAM.",
    rating: 4.9,
    price:2570,
    categories: "Laptops", 
    bestseller: true,
    mainImage: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 6,
    name: "Bluetooth Speaker Max",
    description: "Portable Bluetooth speaker with deep bass and long battery life.",
    rating: 4.4,
    price:800,
    categories: "Audio", 
    bestseller: false,
    mainImage: "https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/14309811/pexels-photo-14309811.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/14309813/pexels-photo-14309813.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 7,
    name: "Noise-Canceling Headphones",
    description: "Over-ear headphones with premium sound and noise-canceling features.",
    rating: 4.6,
    price:4000,
    categories: "Audio",
    bestseller: true,
    mainImage: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 8,
    name: "Drone HD Pro",
    description: "Compact drone with 4K camera and advanced flight stabilization.",
    rating: 4.3,
    price:1540,
    categories: "Drones",
    bestseller: false,
    mainImage: "https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/2100075/pexels-photo-2100075.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 9,
    name: "Tablet Air",
    description: "Lightweight tablet with high-resolution display and pen support.",
    rating: 4.5,
    price:2540,
    categories: "Tablets",
    bestseller: false,
    mainImage: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1251844/pexels-photo-1251844.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 10,
    name: "Smart Home Speaker",
    description: "Voice-controlled smart speaker with built-in assistant.",
    rating: 4.2,
    price:1320,
    categories: "Smart Home",
    bestseller: false,
    mainImage: "https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1034651/pexels-photo-1034651.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 11,
    name: "Electric Scooter X",
    description: "Foldable electric scooter with a range of 25 miles.",
    rating: 4.6,
    price:3410,
    categories:  "Electronics",
    bestseller: true,
    mainImage: "https://images.pexels.com/photos/2547627/pexels-photo-2547627.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/1731751/pexels-photo-1731751.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/3671151/pexels-photo-3671151.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 12,
    name: "Fitness Tracker Band",
    description: "Slim fitness band with step counter and sleep tracking.",
    rating: 4.1,
    price:1230,
    categories:  "Wearables",
    bestseller: false,
    mainImage: "https://images.pexels.com/photos/18078943/pexels-photo-18078943/free-photo-of-close-up-of-a-digital-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/7671475/pexels-photo-7671475.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/437036/pexels-photo-437036.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 13,
    name: "Portable Power Bank",
    description: "High-capacity power bank with fast charging capabilities.",
    rating: 4.8,
    price:480,
    categories: "Accessories", 
    bestseller: true,
    mainImage: "https://images.pexels.com/photos/5208777/pexels-photo-5208777.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/5208776/pexels-photo-5208776.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/5208781/pexels-photo-5208781.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 14,
    name: "Smart Thermostat",
    description: "Energy-saving smart thermostat with app control.",
    rating: 4.4,
    price:1008,
    categories: "Smart Home",
    bestseller: false,
    mainImage: "https://images.pexels.com/photos/190048/pexels-photo-190048.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/8180073/pexels-photo-8180073.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/9736233/pexels-photo-9736233.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 15,
    name: "Robotic Vacuum Cleaner",
    description: "Smart vacuum cleaner with automated cleaning and mapping.",
    rating: 4.6,
    price:6560,
    categories:  "Cleaning",
    bestseller: true,
    mainImage: "https://images.pexels.com/photos/8566420/pexels-photo-8566420.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/4107248/pexels-photo-4107248.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/8566420/pexels-photo-8566420.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 16,
    name: "Wireless Charging Pad",
    description: "Fast wireless charger compatible with multiple devices.",
    rating: 4.3,
    price:2453,
    categories:  "Electronics",
    bestseller: false,
    mainImage: "https://images.pexels.com/photos/7952558/pexels-photo-7952558.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/7742584/pexels-photo-7742584.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/7742588/pexels-photo-7742588.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 17,
    name: "Portable Mini Projector",
    description: "Compact projector with full HD resolution and HDMI input.",
    rating: 4.5,
    price:700,
    categories: "Projectors", 
    bestseller: false,
    mainImage: "https://images.pexels.com/photos/13002935/pexels-photo-13002935.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/7991486/pexels-photo-7991486.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/7991486/pexels-photo-7991486.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 18,
    name: "High-Speed USB Drive",
    description: "128GB USB 3.2 drive with fast data transfer speeds.",
    rating: 4.7,
    price:5654,
    categories: "Storage", 
    bestseller: true,
    mainImage: "https://images.pexels.com/photos/5474292/pexels-photo-5474292.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/5474287/pexels-photo-5474287.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/4087263/pexels-photo-4087263.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 19,
    name: "Gaming Console X",
    description: "Next-generation gaming console with 4K HDR support.",
    rating: 4.9,
    price:7454,
    categories: "Gaming", 
    bestseller: true,
    mainImage: "https://images.pexels.com/photos/1365795/pexels-photo-1365795.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/4219892/pexels-photo-4219892.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/1637438/pexels-photo-1637438.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 20,
    name: "Digital Photo Frame",
    description: "Wi-Fi enabled digital photo frame with cloud storage.",
    rating: 4.3,
    price:5465,
    categories: "Smart Home", 
    bestseller: false,
    mainImage: "https://images.pexels.com/photos/1214205/pexels-photo-1214205.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: ["https://images.pexels.com/photos/2011173/pexels-photo-2011173.jpeg?auto=compress&cs=tinysrgb&w=600", "https://images.pexels.com/photos/587441/pexels-photo-587441.jpeg?auto=compress&cs=tinysrgb&w=600"]
  }
];
export default gadgetItems;