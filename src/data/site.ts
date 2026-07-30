export const COMPANY = {
  name: "Magnertia Private Limited",
  short: "Magnertia",
  tagline: "The Future of Autonomous Charging",
  website: "www.magnertia.com",
  phone: "+91 98765 43210",
  email: "contact@magnertia.com",
  location: "Bengaluru, Karnataka, India",
  whatsapp: "919876543210",
  linkedin: "https://www.linkedin.com/company/magnertia",
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  blurb: string;
  power: string;
  specs: { label: string; value: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "mag-w2",
    name: "Magnertia W2",
    category: "Two Wheeler",
    blurb:
      "Compact wireless pad engineered for scooters, motorcycles and last-mile delivery fleets parked in tight urban bays.",
    power: "1.2 kW",
    specs: [
      { label: "Output Power", value: "1.2 kW" },
      { label: "Efficiency", value: "92%" },
      { label: "Air Gap", value: "40 – 90 mm" },
      { label: "Input", value: "230 V AC, 1-Phase" },
      { label: "Standard", value: "SAE J2954 aligned" },
      { label: "Protection", value: "IP67 · F.O.D. · Thermal" },
      { label: "Connectivity", value: "Wi-Fi · BLE · 4G IoT" },
      { label: "Alignment", value: "±75 mm tolerance" },
    ],
  },
  {
    slug: "mag-p11",
    name: "Magnertia P11",
    category: "Passenger EV",
    blurb:
      "Flagship home and workplace wireless charger with autonomous alignment guidance and live telemetry to the Magnertia app.",
    power: "11 kW",
    specs: [
      { label: "Output Power", value: "11 kW" },
      { label: "Efficiency", value: "94%" },
      { label: "Air Gap", value: "120 – 220 mm" },
      { label: "Input", value: "415 V AC, 3-Phase" },
      { label: "Standard", value: "SAE J2954 WPT3" },
      { label: "Protection", value: "IP68 · F.O.D. · LOD · Thermal" },
      { label: "Connectivity", value: "OCPP 2.0.1 · 4G · Ethernet" },
      { label: "Alignment", value: "Auto-guided ±100 mm" },
    ],
  },
  {
    slug: "mag-r30",
    name: "Magnertia R30 Robotic",
    category: "Autonomous Arm",
    blurb:
      "Fully autonomous robotic charging arm. Park, walk away — computer vision locates the port and completes the session.",
    power: "30 kW DC",
    specs: [
      { label: "Output Power", value: "30 kW DC" },
      { label: "Connection Time", value: "< 25 seconds" },
      { label: "Vision", value: "Stereo depth + AI port detection" },
      { label: "Degrees of Freedom", value: "6-axis" },
      { label: "Standard", value: "CCS2 · IEC 61851" },
      { label: "Protection", value: "Force limiting · F.O.D. · E-stop" },
      { label: "Connectivity", value: "OCPP 2.0.1 · Fleet API" },
      { label: "Weather", value: "-10 °C to 55 °C, IP65 cabinet" },
    ],
  },
  {
    slug: "mag-f120",
    name: "Magnertia F120 Fleet",
    category: "Commercial & Heavy Duty",
    blurb:
      "Depot-scale dynamic charging platform for buses, trucks and heavy-duty fleets with scheduled autonomous cycling.",
    power: "120 kW",
    specs: [
      { label: "Output Power", value: "120 kW (scalable to 360 kW)" },
      { label: "Efficiency", value: "93%" },
      { label: "Air Gap", value: "180 – 300 mm" },
      { label: "Input", value: "415 V AC, 3-Phase" },
      { label: "Standard", value: "SAE J2954/2 · ISO 15118" },
      { label: "Protection", value: "IP68 · F.O.D. · Thermal · Surge" },
      { label: "Connectivity", value: "OCPP 2.0.1 · SCADA · Fleet API" },
      { label: "Scheduling", value: "AI load balancing, 24/7" },
    ],
  },
];

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Francis", to: "/francis" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
