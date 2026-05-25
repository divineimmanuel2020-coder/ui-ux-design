import JobCard from '@/components/JobCard';

const featured = [
  {
    id: "1",
    title: "Senior Webflow Developer for SaaS Landing Page",
    client: "Nova Dynamics",
    budget: "$4,800",
    duration: "3 weeks",
    location: "Remote",
    description: "Expert Webflow developer needed to build high-converting marketing site with animations and CMS.",
    tags: ["Webflow", "Animation", "SaaS"],
    proposals: 23,
  },
  {
    id: "2",
    title: "Brand Identity + Logo Design",
    client: "Lumina Labs",
    budget: "$2,200",
    duration: "2 weeks",
    location: "Remote",
    description: "Full brand identity including logo, guidelines, and visual system.",
    tags: ["Branding", "Logo", "Figma"],
    proposals: 41,
  },
];

export default function Home() {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-5xl font-semibold tracking-tighter">Good morning, John 👋</h1>
        <p className="text-xl text-neutral-600 mt-2">Discover top opportunities today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          { label: "Active Projects", value: "4", change: "↑2" },
          { label: "Total Spent", value: "$18.4k", change: "↑12%" },
          { label: "Avg. Project", value: "$3.2k" },
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-neutral-100 rounded-3xl p-8">
            <p className="text-neutral-500 text-sm">{stat.label}</p>
            <p className="text-6xl font-semibold mt-4">{stat.value}</p>
            {stat.change && <p className="text-emerald-600 text-sm mt-6">{stat.change}</p>}
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-semibold mb-8">Featured Opportunities</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featured.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
}