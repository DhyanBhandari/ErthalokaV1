import React from 'react';
export default function Subscribe() {
  return (
    <section className="max-w-6xl mx-auto space-y-8 py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-accent-green mb-8">Choose Your Plan</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-purple-500 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Warrior</h2>
          <p className="mb-2 text-center">Free Sign-up</p>
          <p className="mb-6 text-center">Access co-work spaces @ 99/- per day</p>
          <button className="rounded-full bg-purple-600 px-6 py-2 hover:scale-105 transition-transform">Select Plan</button>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-blue-500 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Ambassador</h2>
          <p className="mb-2 text-center">3333/- per month</p>
          <p className="mb-6 text-center">Full access to community spaces</p>
          <button className="rounded-full bg-blue-600 px-6 py-2 hover:scale-105 transition-transform">Select Plan</button>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-green-500 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Resident</h2>
          <p className="mb-2 text-center">9999/- per month</p>
          <p className="mb-6 text-center">Priority access to all events</p>
          <button className="rounded-full bg-green-600 px-6 py-2 hover:scale-105 transition-transform">Select Plan</button>
        </div>
      </div>
    </section>
  );
}
