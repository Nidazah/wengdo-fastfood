"use client";

export default function CommentForm() {
  return (
    <div className="mt-16">
      <h2 className="mb-8 text-3xl font-black">
        Leave A Comment
      </h2>

      <form className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-full border border-gray-200 px-6 py-4 outline-none focus:border-[#FF6B00]"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="rounded-full border border-gray-200 px-6 py-4 outline-none focus:border-[#FF6B00]"
          />
        </div>

        <textarea
          rows={6}
          placeholder="Write your comment..."
          className="w-full rounded-[25px] border border-gray-200 p-6 outline-none focus:border-[#FF6B00]"
        />

        <button
          type="submit"
          className="cursor-pointer rounded-full bg-[#FF6B00] px-10 py-4 font-bold text-white transition hover:bg-[#1F1F1F]"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
}