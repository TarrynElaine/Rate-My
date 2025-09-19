export default function Home() {
  return (
    <div className="min-h-screen bg-teal-900 text-white p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">RATE MY</h1>
        <input
          type="text"
          placeholder="Search by name or property"
          className="px-4 py-2 rounded text-black"
        />
        <nav className="space-x-4">
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
        </nav>
      </header>

      <section className="bg-teal-800 p-6 rounded mb-6">
        <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
        <div className="flex space-x-2 mb-4">
          {"★".repeat(5).split("").map((star, i) => (
            <span key={i} className="text-yellow-400 text-2xl">{star}</span>
          ))}
        </div>
        <textarea
          placeholder="Write your review..."
          className="w-full p-2 rounded text-black mb-4"
        ></textarea>
        <button className="bg-teal-600 px-4 py-2 rounded">Submit</button>
      </section>

      <section className="space-y-4">
        <div className="bg-teal-800 p-4 rounded">
          <h3 className="font-bold">John Doe</h3>
          <p className="text-yellow-400">★★★★★</p>
          <p>Great landlord, very responsive and helpful. Highly recommend!</p>
        </div>
        <div className="bg-teal-800 p-4 rounded">
          <h3 className="font-bold">Jane Smith</h3>
          <p className="text-yellow-400">★★★★★</p>
          <p>The apartment was well-maintained and in a great location.</p>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <button className="bg-teal-700 py-3 rounded">5-Star Tenants</button>
        <button className="bg-teal-700 py-3 rounded">5-Star Landlords</button>
      </div>

      <footer className="mt-8">
        <h2 className="text-xl font-bold mb-2">Rated Suppliers</h2>
        <div className="flex space-x-4">
          <a href="#">Plumbers</a>
          <a href="#">Cleaning</a>
          <a href="#">Electricians</a>
          <a href="#">Moving</a>
        </div>
      </footer>
    </div>
  );
}
