import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: building,
    title: "BUILDING",
    about:
      "Expertly crafting durable and innovative, Ensuring excellence from foundation to finish.",
  },
  {
    icon: construction,
    title: "ROAD CONSTRUCTION",
    about:
      " Specialize, high-quality roads that ensure safety, efficiency, and long-lasting performance for all types of infrastructure needs.",
  },
  {
    icon: design,
    title: "DESIGN & PLANNING",
    about:
      "Offering expert design and planning services, every project starts with a strong foundation.",
  },
  {
    icon: document,
    title: "RENOVATION",
    about:
      "Transforming spaces with our professional renovation services. results that exceed expectations.",
  },
  {
    icon: paint,
    title: "HYDROELECTRIC",
    about:
      "Hydroelectric construction services. Systems that harness the power of water to deliver reliable energy solutions.",
  },
  {
    icon: support,
    title: "PROJECT MANAGEMENT",
    about:
      "Comprehensive project management services, we ensure seamless planning, coordination, and execution to deliver projects",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "Quality Excellence",
    about:
      "Committed to delivering superior quality in every project",
  },
  {
    icon: MdOutlineDesignServices,
    title: "Innovation and Creativity",
    about:
      "Embrace modern technology and innovative approaches",
  },
  {
    icon: FaRegBuilding,
    title: "Teamwork and Collaboration",
    about:
      "Culture of collaboration, leveraging expertise of our skilled professionals",
  },
  {
    icon: FaSitemap,
    title: "Client-Centric Approach",
    about:
      "Value our clients' vision, working collaboratively to turn their ideas into reality",
  },
];

export const clients = [
  {
    image: client1,
    name: "ANTHONY BABATUNDE",
    about:
      "Empowering seamless technology integration for efficient construction operations. Proficient in managing network infrastructure, software systems, and cybersecurity. Enhancing productivity and collaboration while ensuring data integrity and IT support for the construction team.",
    post: "IT Engineer",
  },
  {
    image: client2,
    name: "OYEBANJI ARAOYE",
    about:
      "Experienced and innovative leader driving growth and success in the construction industry. Leading teams, driving efficiency, and delivering excellence. Dedicated to overseeing successful construction projects from inception to completion. Bringing expertise in planning, budgeting, and resource management to achieve exceptional results.",
    post: "Chairman, Managing Director",
  },
  {
    image: client3,
    name: "MARY TEMITAYO",
    about:
      "Leading teams, driving efficiency, and delivering excellence. Dedicated to overseeing successful construction projects from inception to completion. Bringing expertise in planning, budgeting, and resource management to achieve exceptional results.",
    post: "Project Manager",
  },
];
