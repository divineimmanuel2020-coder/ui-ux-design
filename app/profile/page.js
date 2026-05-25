import { Star, MapPin } from 'lucide-react';

export default function Profile() {
  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="flex gap-12">
        <div className="w-80">
          <div className="bg-white rounded-3xl border overflow-hidden">
            <div className="h-56 bg-gradient-to-br from-primary-500 to-sky-600" />
            <div className="px-8 -mt-12">
              <div className="w-28 h-28 bg-white p-1 rounded-3xl">
                <div className="w-full h-full bg-neutral-800 rounded-3xl flex items-center justify-center text-5xl text-white font-bold">SA</div>
              </div>
            </div>
            <div className="px-8 pb-8">
              <h2 className="text-3xl font-semibold mt-6">Sarah Altman</h2>
              <p className="text-primary-600">Product Designer • Webflow Expert</p>
              <div className="flex items-center gap-2 mt-6">
                <div className="flex text-amber-400">★★★★★</div>
                <span className="font-medium">4.98</span>
              </div>
              <div className="flex items-center gap-2 mt-8">
                <MapPin size={20} />
                Lagos, Nigeria
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-semibold mb-8">Portfolio</h1>
          <div className="grid grid-cols-2 gap-6">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-video rounded-3xl overflow-hidden border">
                <img src={`https://picsum.photos/id/${30+i}/700/400`} alt="Portfolio" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}