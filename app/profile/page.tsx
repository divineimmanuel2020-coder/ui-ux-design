import { Star, MapPin } from 'lucide-react';

export default function Profile() {
  return (
    <div className="max-w-6xl mx-auto p-10">
      <div className="flex gap-12">
        <div className="w-96">
          <div className="bg-white rounded-3xl overflow-hidden border">
            <div className="h-56 bg-gradient-to-br from-primary-500 to-sky-600" />
            <div className="-mt-12 px-8">
              <div className="w-28 h-28 bg-white rounded-3xl p-1.5">
                <div className="w-full h-full bg-neutral-800 rounded-3xl flex items-center justify-center text-5xl text-white font-bold">SA</div>
              </div>
            </div>

            <div className="px-8 pb-8">
              <h2 className="text-3xl font-semibold mt-6">Sarah Altman</h2>
              <p className="text-primary-600">Product Designer &amp; Webflow Expert</p>

              <div className="flex items-center gap-2 mt-6">
                <div className="flex text-amber-400">★★★★★</div>
                <span className="font-medium">4.98</span>
                <span className="text-neutral-500">(142)</span>
              </div>

              <div className="mt-8 flex items-center gap-2">
                <MapPin size={20} className="text-neutral-400" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-semibold mb-8">Portfolio</h1>
          <div className="grid grid-cols-2 gap-6">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-video bg-neutral-200 rounded-3xl overflow-hidden">
                <img src={`https://picsum.photos/id/${20+i}/700/400`} alt="" className="object-cover w-full h-full" />
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {["Webflow", "Figma", "Framer", "UI/UX Design", "Branding", "GSAP", "After Effects", "Prototyping"].map(s => (
                <div key={s} className="bg-white border px-6 py-3 rounded-2xl">{s}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}