import Container from "@/components/common/Container";

export default function Loading() {
  return (
    <section className="bg-[#FFF8EE] py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[30px] bg-white"
            >
              <div className="h-64 animate-pulse bg-gray-200" />

              <div className="space-y-4 p-6">
                <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />

                <div className="h-8 animate-pulse rounded bg-gray-200" />

                <div className="h-20 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}