import Container from "@/components/common/Container";

export default function Loading() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="h-[500px] animate-pulse rounded-[35px] bg-[#FFF8EE]" />

          <div className="space-y-6">
            <div className="h-8 w-32 animate-pulse rounded bg-gray-200" />

            <div className="h-14 w-72 animate-pulse rounded bg-gray-200" />

            <div className="h-10 w-32 animate-pulse rounded bg-gray-200" />

            <div className="h-36 animate-pulse rounded bg-gray-200" />

            <div className="h-14 w-64 animate-pulse rounded-full bg-gray-200" />
          </div>
        </div>
      </Container>
    </section>
  );
}