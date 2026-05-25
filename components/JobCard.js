import Link from 'next/link';
import { Clock, MapPin, DollarSign } from 'lucide-react';

export default function JobCard({ id, title, client, budget, duration, location, description, tags, proposals }) {
  return (
    <Link href={`/job/${id}`}>
      <div className="job-card bg-white border border-neutral-200 rounded-3xl p-8 hover:border-primary-200 h-full flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-xl">{title}</h3>
            <p className="text-neutral-500 mt-1">{client}</p>
          </div>
          <div className="text-emerald-600 font-semibold text-lg flex items-center gap-1">
            <DollarSign size={20} />{budget}
          </div>
        </div>

        <p className="mt-6 text-neutral-600 line-clamp-3 flex-1">{description}</p>

        <div className="flex gap-6 mt-8 text-sm text-neutral-500">
          <div className="flex items-center gap-1.5"><Clock size={18} />{duration}</div>
          <div className="flex items-center gap-1.5"><MapPin size={18} />{location}</div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs bg-neutral-100 px-4 py-1 rounded-full">{tag}</span>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t flex justify-between text-sm">
          <span className="text-neutral-500">{proposals} proposals</span>
          <span className="text-primary-600 font-medium">View details →</span>
        </div>
      </div>
    </Link>
  );
}