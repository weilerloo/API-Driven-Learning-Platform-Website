import BlogCards from "../components/BlogCards"

export default function Tutors() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-8">Meet Our Tutors</h1>
      <p className="text-2xl mb-8">They have experiences, let the experiences told the story.</p>
      <BlogCards />
    </div>
  );
}
