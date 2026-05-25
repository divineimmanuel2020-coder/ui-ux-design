import JobCard from '@/components/JobCard';

const featuredJobs = [
  {
    id: "1",
    title: "Senior Webflow Developer for SaaS Landing Page",
    client: "Nova Dynamics",
    budget: "$4,800",
    duration: "3 weeks",
    location: "Remote",
    description: "Build a high-converting marketing website with animations and CMS integration.",
    tags: ["Webflow", "Animation", "SaaS"],
    proposals: 23
  },
  {
    id: "2",
    title: "Brand Identity Design for Tech Startup",
    client: "Lumina Labs",
    budget: "$2,200",
    duration: "2 weeks",
    location: "Remote",
    description: "Complete brand identity, logo, and visual guidelines.",
    tags: ["Branding", "Figma", "Logo"],
    proposals: 41
  }
];

export default function Home() {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-5xl font-semibold tracking-tight">Good morning, John 👋</h1>
        <p className="text-xl text-neutral-600 mt-3">Discover amazing opportunities today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white rounded-3xl p-8 border">
          <p className="text-neutral-500">Active Projects</p>
          <p className="text-6xl font-semibold mt-4">4</p>
        </div>
        <div className="bg-white rounded-3xl p-8 border">
          <p className="text-neutral-500">Total Spent</p>
          <p className="text-6xl font-semibold mt-4">$18.4k</p>
        </div>
        <div className="bg-white rounded-3xl p-8 border">
          <p className="text-neutral-500">Avg Project</p>
          <p className="text-6xl font-semibold mt-4">$3.2k</p>
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-8">Featured Opportunities</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featuredJobs.map(job => <JobCard key={job.id} {...job} />)}
      </div>
    </div>
  );
}