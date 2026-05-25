import JobCard from '@/components/JobCard';

const jobs = [
  { id: "1", title: "Senior Webflow Developer for SaaS Landing Page", client: "Nova Dynamics", budget: "$4,800", duration: "3 weeks", location: "Remote", description: "Build high-converting SaaS landing page with Webflow.", tags: ["Webflow", "Framer"], proposals: 23 },
  { id: "2", title: "Brand Identity Design for Tech Startup", client: "Lumina Labs", budget: "$2,200", duration: "2 weeks", location: "Remote", description: "Complete brand identity and guidelines.", tags: ["Branding", "Figma"], proposals: 41 },
  { id: "3", title: "Next.js Full Stack Engineer", client: "PulseFlow", budget: "$12,000", duration: "8 weeks", location: "Remote", description: "Build MVP with Next.js 15 and Supabase.", tags: ["Next.js", "TypeScript"], proposals: 18 },
];

export default function JobsPage() {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      <div className="flex justify-between mb-10">
        <div>
          <h1 className="text-4xl font-semibold">Find Work</h1>
          <p className="text-neutral-600 mt-1">1,284 opportunities match your profile</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </div>
  );
}