export default function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_20px_50px_rgba(0,0,0,.08)]">
      <div className="h-72 animate-pulse bg-[#FFF8EE]" />

      <div className="space-y-4 p-8">
        <div className="mx-auto h-4 w-24 animate-pulse rounded bg-gray-200" />

        <div className="mx-auto h-8 w-52 animate-pulse rounded bg-gray-200" />

        <div className="mx-auto h-8 w-20 animate-pulse rounded bg-gray-200" />

        <div className="mt-6 h-14 animate-pulse rounded-full bg-gray-200" />
      </div>
    </div>
  );
}