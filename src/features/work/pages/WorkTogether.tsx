import { FaUsers, FaSeedling, FaLightbulb, FaHeart } from 'react-icons/fa';

const perks = [
  {
    icon: FaUsers,
    title: 'Inclusive Environment',
    description:
      'We celebrate diversity and foster a culture of respect and genuine collaboration.',
  },
  {
    icon: FaSeedling,
    title: 'Growth Opportunities',
    description:
      "Whether in the kitchen or on the creative team, there's always room to evolve and grow.",
  },
  {
    icon: FaHeart,
    title: 'Purpose-Driven Work',
    description:
      'Every day, you contribute to a healthier planet and a more compassionate food system.',
  },
  {
    icon: FaLightbulb,
    title: 'Creative Freedom',
    description:
      'Have an idea for a new dish or campaign? Innovation is in our DNA — we want to hear it.',
  },
];

const openRoles = [
  'Chefs passionate about plant-based cuisine',
  'Content creators who live and breathe sustainability',
  'Customer service stars with a heart for hospitality',
  'Tech-savvy minds ready to elevate our digital presence',
];

function WorkTogether() {
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="text-center px-6 py-16 md:py-20" aria-labelledby="work-heading">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-4 py-1.5 text-sm font-medium mb-7">
          <FaUsers aria-hidden="true" className="text-xs" />
          Join Our Team
        </div>

        <h1
          id="work-heading"
          className="text-4xl md:text-5xl font-bold text-stone-900 mb-5 max-w-2xl mx-auto leading-tight"
        >
          Build a greener future with{' '}
          <span className="text-emerald-700">VeggieVibes</span>
        </h1>

        <p className="text-stone-600 text-lg max-w-xl mx-auto leading-relaxed">
          We're not just serving food — we're building a movement. Join a team that puts
          sustainability, health, and compassion at the heart of everything it does.
        </p>
      </section>

      {/* Why join */}
      <section className="px-6 mb-16" aria-labelledby="perks-heading">
        <h2
          id="perks-heading"
          className="text-2xl font-bold text-stone-900 mb-10 text-center"
        >
          Why Join VeggieVibes?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {perks.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-4">
                <Icon className="text-emerald-600 text-base" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-stone-900 mb-2">{title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open roles */}
      <section className="px-6 mb-16" aria-labelledby="roles-heading">
        <div className="max-w-3xl mx-auto bg-emerald-50 border border-emerald-100 rounded-3xl p-8 sm:p-10">
          <h2 id="roles-heading" className="text-2xl font-bold text-stone-900 mb-7">
            We're Looking For
          </h2>
          <ul className="space-y-4" role="list">
            {openRoles.map((role) => (
              <li key={role} className="flex items-start gap-3 text-stone-700">
                <FaSeedling
                  className="text-emerald-600 mt-0.5 shrink-0 text-sm"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed">{role}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 text-center" aria-labelledby="apply-heading">
        <div className="max-w-lg mx-auto">
          <h2 id="apply-heading" className="text-xl font-bold text-stone-900 mb-3">
            Ready to make a difference?
          </h2>
          <p className="text-stone-600 mb-7 leading-relaxed">
            Take the first step towards something meaningful — one delicious dish at a time.
          </p>
          <a
            href="/form"
            className="inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-3.5 rounded-xl transition-all active:scale-[0.97] shadow-sm"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}

export default WorkTogether;
