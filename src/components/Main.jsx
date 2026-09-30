import Card from "./Card";
import "../App.css";

let employees = [
  {
    name: "Abdul Hakeem",
    role: "Frontend Developer",
    image: "/profile-images/profile-01.jpg",
    email: "abdul@example.com",
    location: "Karachi, Pakistan",
  },
  {
    name: "Ayesha Khan",
    role: "UX Designer",
    image: "/profile-images/profile-02.jpg",
    email: "ayesha@example.com",
    location: "Lahore, Pakistan",
  },
  {
    name: "Omar Farooq",
    role: "Product Manager",
    image: "/profile-images/profile-03.jpg",
    email: "omar@example.com",
    location: "Islamabad, Pakistan",
  },
  {
    name: "Sara Malik",
    role: "React Engineer",
    image: "/profile-images/profile-04.jpg",
    email: "sara@example.com",
    location: "Multan, Pakistan",
  },
  {
    name: "Hamza Ali",
    role: "Backend Developer",
    image: "/profile-images/profile-05.jpg",
    email: "hamza@example.com",
    location: "Peshawar, Pakistan",
  },
  {
    name: "Maha Noor",
    role: "Content Strategist",
    image: "/profile-images/profile-06.jpg",
    email: "maha@example.com",
    location: "Quetta, Pakistan",
  },
  {
    name: "Bilal Ahmed",
    role: "DevOps Engineer",
    image: "/profile-images/profile-07.jpg",
    email: "bilal@example.com",
    location: "Rawalpindi, Pakistan",
  },
  {
    name: "Hira Shah",
    role: "Visual Designer",
    image: "/profile-images/profile-08.jpg",
    email: "hira@example.com",
    location: "Faisalabad, Pakistan",
  },
  {
    name: "Danish Raza",
    role: "QA Engineer",
    image: "/profile-images/profile-09.jpg",
    email: "danish@example.com",
    location: "Hyderabad, Pakistan",
  },
  {
    name: "Zainab Iqbal",
    role: "Data Analyst",
    image: "/profile-images/profile-10.jpg",
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