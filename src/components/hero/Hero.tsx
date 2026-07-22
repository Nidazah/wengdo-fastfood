import Container from "@/components/common/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroImages from "./HeroImages";
import HeroAnimation from "./HeroAnimation";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-linear-to-br
        from-[#FFF8EE]
        via-[#FFF4D6]
        to-[#FFE79C]
        pt-28
        pb-16

        sm:pt-32
        sm:pb-20

        md:pt-40

        lg:min-h-screen
        lg:pt-32
      "
    >
      <HeroBackground />

      <div
        className="
          absolute
          -left-32
          top-40
          h-72
          w-72
          rounded-full
          bg-[#FFD54A]/20
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          -right-20
          -bottom-24
          h-80
          w-80
          rounded-full
          bg-[#FF6B00]/10
          blur-[120px]
        "
      />

      <Container className="relative z-20">
        <div
          className="
            grid
            items-center
            gap-8

            sm:gap-12

            md:gap-16

            lg:grid-cols-2
          "
        >
          <HeroAnimation direction="left">
            <HeroContent />
          </HeroAnimation>

          <HeroAnimation
            direction="right"
            className="
              relative
              mt-4

              sm:mt-8

              md:mt-12

              lg:mt-0
            "
          >
            <HeroImages />
          </HeroAnimation>
        </div>
      </Container>

      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          fill="#FFF8EE"
          d="M0 45L60 50C120 55 240 65 360 75C480 85 600 95 720 90C840 85 960 65 1080 55C1200 45 1320 45 1380 45H1440V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V45Z"
        />
      </svg>
    </section>
  );
}