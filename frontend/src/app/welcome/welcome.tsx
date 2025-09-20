import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Build Your Future with Coding',
    description:
      'Learn step by step with guided lessons, interactive projects, and expert feedback to help you grow into a confident developer.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Unlock Your True Coding Potential',
    description:
      'Our platform adapts to your pace, giving you the freedom to explore, practice, and master coding skills with confidence.',
    icon: LockClosedIcon,
  },
  {
    name: 'Start Learning Instantly',
    description:
      'Jump right into coding with hands-on exercises and real-world examples — no waiting, no barriers, just learning.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Prepare for In-Demand Tech Careers',
    description:
      'Gain the practical skills employers are looking for and get career-ready with courses designed by industry experts.',
    icon: FingerPrintIcon,
  },
]

const stats = [
  { id: 1, name: 'Courses available', value: '1,200+' },
  { id: 2, name: 'Active learners worldwide', value: '85,000+' },
  { id: 3, name: 'Certified tutors', value: '500+' },
  { id: 4, name: 'Average course completion rate', value: '92%' },
  { id: 5, name: 'Average employement rate', value: '99.5%' },
];



export default function Welcome() {
  return (
    <div className="py-10 bg-gray-900  w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto my-30 max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">Elice Learning Platform</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-balance">
            Our online coding programs let you learn anytime, anywhere.
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
            with access to rich resources like practical projects, quizzes, and personalized guidance from expert instructors.
          </p>
        </div>
        <div className="mx-auto my-30 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto my-30 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-20 gap-y-20 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600 dark:text-gray-400">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-30 mb-10">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-white">Subscribe to our newsletter</h2>
              <p className="mt-4 text-lg text-gray-300">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                dolore.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <CalendarDaysIcon aria-hidden="true" className="size-6 text-white" />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">Weekly articles</dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <HandRaisedIcon aria-hidden="true" className="size-6 text-white" />
                </div>
                <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
