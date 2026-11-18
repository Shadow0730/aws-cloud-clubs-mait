import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard, { EventCardProps } from "@/components/EventCard";
import UpcomingEventsNotice from "@/components/UpcomingEventsNotice";

const upcomingEvents: EventCardProps[] = [
  {
    title: "AWS Serverless Workshop",
    date: "April 15, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium, MAIT",
    description: "Dive deep into AWS Serverless architecture. Learn how to build scalable applications using AWS Lambda, API Gateway, and DynamoDB without managing any servers.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUBtelsMGh-o7CYU6HEhr7ox9Bmb2LHzki8F_BI1cCQbuL7BXZC6Qd7dC1JET92YWwz1Y0vN6hYHZHurxxD4WZ4iUHLl0geUaoJ-JJo1a_G7zEzRgkGBnELz72V4mdusuFl-Jma3AAfbkYAKV3hZccIO_9pRAHDohvrNEQZVHO0bz5fav10A8vOicHwya9hPYCw31F9EN9yX1ZeQAKAMlk7AT6W-2zLO7qzdDNZ1q5-CaICSNF-RQEV1DWQGw6Prp8R1zgoZBeD6um", // using a placeholder from Hero
    type: "upcoming",
    link: "https://www.meetup.com/aws-cloud-club-at-maharaja-agrasen-inst-of-technology/",
  },
  {
    title: "Cloud Computing 101",
    date: "April 22, 2026",
    time: "4:00 PM - 6:00 PM",
    location: "Virtual (Zoom)",
    description: "An introductory session for beginners to understand the basics of cloud computing, deployment models, and why AWS is an industry leader. Perfect for first-year students.",
    type: "upcoming",
  },
  {
    title: "HackTheCloud 2026",
    date: "May 10-12, 2026",
    time: "48 Hours",
    location: "Block 4 Labs, MAIT",
    description: "Our flagship 48-hour cloud hackathon! Form teams, brainstorm innovative solutions, and deploy your projects exclusively on AWS. Huge prizes and swags to be won.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUBtelsMGh-o7CYU6HEhr7ox9Bmb2LHzki8F_BI1cCQbuL7BXZC6Qd7dC1JET92YWwz1Y0vN6hYHZHurxxD4WZ4iUHLl0geUaoJ-JJo1a_G7zEzRgkGBnELz72V4mdusuFl-Jma3AAfbkYAKV3hZccIO_9pRAHDohvrNEQZVHO0bz5fav10A8vOicHwya9hPYCw31F9EN9yX1ZeQAKAMlk7AT6W-2zLO7qzdDNZ1q5-CaICSNF-RQEV1DWQGw6Prp8R1zgoZBeD6um",
    type: "upcoming",
    link: "https://www.meetup.com/aws-cloud-club-at-maharaja-agrasen-inst-of-technology/",
  }
];

const pastEvents: EventCardProps[] = [
  {
    title: "AWS Cloud Genesis ’26",
    date: "September 22, 2026",
    time: "1:00 PM",
    location: "Auditorium, MAIT",
    description: "AWS Cloud Genesis ’26 is an exciting celebration of technology, innovation, learning, and community at MAIT. The event brings together students, industry professionals, and faculty for insightful sessions, engaging activities, interactive quizzes, and vibrant performances. Join us as we explore ideas, learn from inspiring speakers, and celebrate the spirit of innovation together.",
    image:"https://media.licdn.com/dms/image/v2/D5622AQGiaUColZDc0w/feedshare-shrink_800/B56aDVKjEEIUAc-/0/1790282712913?e=1796860800&v=beta&t=mHiOrW27k5nMgghQNlxjRw9RfbhZbyILwiEhC-chYXc",
    type: "past",
  },
  {
    title: "Beyond GenAI - AWS AI Services",
    date: "July 19, 2026",
    time: "5:00 PM",
    location: "Online",
    description: "Go beyond Generative AI and explore the broader AWS AI ecosystem with an industry expert. Learn about real-world AI applications, understand when and how to use different AWS AI services, see practical examples, and interact with the speaker during a live Q&A session.",
    image:"https://media.licdn.com/dms/image/v2/D5622AQHImUaqZgtJVg/feedshare-image-high-res/B56Z.s5EnoK4Ac-/0/1785312070385?e=1796860800&v=beta&t=2pyb1bCs6KdQXP0IygqaV64Z9tC4iVWWaRR_E_RV6d0",
    type: "past",
  },
  {
    title: "From PartyRock to Amazon Bedrock",
    date: "July 18, 2026",
    time: "5:00 PM",
    location: "Online",
    description: "Learn how to build production-ready Generative AI applications using Amazon Bedrock. Explore foundation models, prompt engineering techniques, and the differences between PartyRock and Bedrock through practical examples.",
    image:"https://media.licdn.com/dms/image/v2/D5622AQEtcS_Sm-2TCQ/feedshare-shrink_1280/B56Z.lg3J8KoAQ-/0/1785188283272?e=1796860800&v=beta&t=2qB11I8cgzD8fTfM-Iivg1wmbZevf7D6WsF43bXsz4Y",
    type: "past",
  },
  {
    title: "Build Your First AI App with PartyRock",
    date: "July 12, 2026",
    time: "5:00 PM",
    location: "Online",
    description: "In this hands-on session, you'll build your first AI application using AWS PartyRock. Guided by an AWS expert, you'll learn how to turn simple prompts into functional AI-powered apps—no coding experience required.Whether you're exploring Generative AI for the first time or looking to build something practical, this session will help you bring your ideas to life.",
    image:"https://media.licdn.com/dms/image/v2/D5622AQGmAJ7J3ysGpQ/feedshare-shrink_1280/B56Z.Fd7SAGUAM-/0/1784650642859?e=1796860800&v=beta&t=yf8qbnurMS_svkZCoSj-WKmK14oxvr1bX8KiJFrtCPQ",
    type: "past",
  },
  {
    title: "Introduction to Generative AI on AWS",
    date: "July 11, 2026",
    time: "5:00 PM",
    location: "Online",
    description: "In this introductory session, you'll learn the fundamentals of Generative AI, Large Language Models (LLMs), and real-world applications. Whether you're a beginner or just getting started with AI on AWS, this session will provide a strong foundation for the rest of the series.",
    image:"https://media.licdn.com/dms/image/v2/D5622AQHR-y8SlDQ8pg/feedshare-shrink_1280/B56Z.FWoQTKEAM-/0/1784648729939?e=1796860800&v=beta&t=8g16OV6CeycGMG-cBCsvVy3WvXckf-Kopix6Encilcw",
    type: "past",
  },
  {
    title: "Build with Cloud AWS Cloud Club MAIT Intro Event",
    date: "April 1, 2026",
    time: "1:00 PM",
    location: "11th Block,MAIT",
    description: "Explore how modern applications are built and scaled using Amazon Web Services.Get hands-on experience with real AWS tools, learn cloud fundamentals, and understand real-world applications — all in one session.",
    image:"https://media.licdn.com/dms/image/v2/D5622AQHQjtb9UKydXw/feedshare-shrink_800/B56Z1W.8soHoAc-/0/1775280835616?e=1796860800&v=beta&t=2w48qMphnbGj3GkCc46ysV5Li_ojC-G6SWmrjSh__bo",
    type: "past",
  }
];

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 opacity-10 bg-primary-container rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-10 w-96 h-96 opacity-10 bg-secondary rounded-full blur-3xl"></div>
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(#7c3aed 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <section className="relative z-10 py-16 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label text-xs font-bold tracking-widest uppercase">
              OUR MISSIONS
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tighter">
              CLUB <span className="text-primary italic">EVENTS</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto">
              Join our latest events, workshops, and cloud sessions. Level up your cloud skills with hands-on experience and community building.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-4xl">
                upcoming
              </span>
              Upcoming Events
            </h2>
            <UpcomingEventsNotice />
          </div>

          {/* Past Events Section */}
          <div>
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-4xl">
                history
              </span>
              Past Archives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
