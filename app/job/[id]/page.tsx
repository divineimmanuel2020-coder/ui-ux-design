import { ArrowLeft, Clock, MapPin, Users } from 'lucide-react';
import Link from 'next/link';

export default async function JobDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const job = {
    title: "Senior Webflow Developer for SaaS Landing Page",
    client: "Nova Dynamics",
    budget: "$4,800",
    duration: "3 weeks",
    location: "Remote",
    description: "We need an expert Webflow developer to create a stunning, high-converting marketing website for our AI SaaS platform.",
    requirements: [
      "5+ years Webflow experience",
      "Strong portfolio in SaaS design",
      "Advanced animation skills",
      "Figma to Webflow workflow"
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-10">
      <Link href="/jobs" className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-700 mb-8">
        <ArrowLeft size={20} /> Back to all jobs
      </Link>

      <div className="bg-white rounded-3xl border p-12">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-semibold leading-tight">{job.title}</h1>
            <p className="text-2xl text-neutral-500 mt-3">{job.client}</p>
          </div>
          <div className="text-right">
            <div className="text-5xl font-bold text-emerald-600">{job.budget}</div>
            <p className="text-sm text-neutral-500">Fixed Price</p>
          </div>
        </div>

        <div className="flex gap-8 mt-10">
          <div className="flex items-center gap-2"><Clock size={20} /> {job.duration}</div>
          <div className="flex items-center gap-2"><MapPin size={20} /> {job.location}</div>
          <div className="flex items-center gap-2"><Users size={20} /> 23 proposals</div>
        </div>

        <div className="mt-12">
          <h3 className="font-semibold text-lg mb-4">Project Description</h3>
          <p className="text-neutral-600 leading-relaxed text-lg">{job.description}</p>
        </div>

        <div className="mt-12">
          <h3 className="font-semibold text-lg mb-4">Requirements</h3>
          <ul className="space-y-4">
            {job.requirements.map((req, i) => (
              <li key={i} className="flex gap-3 text-neutral-700">
                <span className="text-primary-600 mt-1">•</span> {req}
              </li>
            ))}
          </ul>
        </div>

        <button className="mt-16 w-full bg-primary-600 hover:bg-primary-700 text-white py-5 rounded-2xl text-lg font-medium transition-colors">
          Submit Proposal
        </button>
      </div>
    </div>
  );
      }
