import Card from "./Card";
import "../App.css";

let employees = [
  {
    name: "Abdul Hakeem",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/300?img=12",
    email: "abdul@example.com",
    location: "Karachi, Pakistan",
  },
  {
    name: "Ayesha Khan",
    role: "UX Designer",
    image: "https://i.pravatar.cc/300?img=47",
    email: "ayesha@example.com",
    location: "Lahore, Pakistan",
  },
  {
    name: "Omar Farooq",
    role: "Product Manager",
    image: "https://i.pravatar.cc/300?img=11",
    email: "omar@example.com",
    location: "Islamabad, Pakistan",
  },
  {
    name: "Sara Malik",
    role: "React Engineer",
    image: "https://i.pravatar.cc/300?img=32",
    email: "sara@example.com",
    location: "Multan, Pakistan",
  },
  {
    name: "Hamza Ali",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/300?img=68",
    email: "hamza@example.com",
    location: "Peshawar, Pakistan",
  },
  {
    name: "Maha Noor",
    role: "Content Strategist",
    image: "https://i.pravatar.cc/300?img=44",
    email: "maha@example.com",
    location: "Quetta, Pakistan",
  },
  {
    name: "Bilal Ahmed",
    role: "DevOps Engineer",
    image: "https://i.pravatar.cc/300?img=13",
    email: "bilal@example.com",
    location: "Rawalpindi, Pakistan",
  },
  {
    name: "Hira Shah",
    role: "Visual Designer",
    image: "https://i.pravatar.cc/300?img=49",
    email: "hira@example.com",
    location: "Faisalabad, Pakistan",
  },
  {
    name: "Danish Raza",
    role: "QA Engineer",
    image: "https://i.pravatar.cc/300?img=57",
    email: "danish@example.com",
    location: "Hyderabad, Pakistan",
  },
  {
    name: "Zainab Iqbal",
    role: "Data Analyst",
    image: "https://i.pravatar.cc/300?img=23",
    email: "zainab@example.com",
    location: "Sialkot, Pakistan",
  },
];

function Main() {
  return (
    <main className="main-section">
      <div className="section-heading">
        <p className="section-kicker">THE CREATIVE COLLECTIVE</p>
        <h1>Meet the minds behind the work.</h1>
        <p>Ten curious builders, designers, and problem-solvers moving ideas forward.</p>
      </div>

      <div className="cards-container">
        {employees.map((member) => (
          <Card key={member.email} {...member} />
        ))}
      </div>
    </main>
  );
}

export default Main;