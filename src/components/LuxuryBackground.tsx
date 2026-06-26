export default function LuxuryBackground() {
  return (
    <>
      {/* Base Background */}
      <div className="fixed inset-0 -z-50 bg-[#12080b]" />

      {/* Main Wine Gradient */}
      <div
        className="
          fixed
          inset-0
          -z-40
        "
        style={{
          background: `
            radial-gradient(circle at top center,
              rgba(124,20,43,.45),
              rgba(26,11,15,.96) 45%,
              #12080b 100%)
          `,
        }}
      />

      {/* Gold Glow */}
      <div
        className="
          fixed
          top-[-180px]
          right-[-160px]
          -z-30
          h-[520px]
          w-[520px]
          rounded-full
          blur-[80px]
          opacity-80
        "
        style={{
          background:
            "radial-gradient(circle, rgba(196,155,71,.20), transparent 70%)",
        }}
      />

      {/* Burgundy Glow */}
      <div
        className="
          fixed
          bottom-[-220px]
          left-[-180px]
          -z-30
          h-[620px]
          w-[620px]
          rounded-full
          blur-[100px]
          opacity-90
        "
        style={{
          background:
            "radial-gradient(circle, rgba(124,20,43,.35), transparent 70%)",
        }}
      />
    </>
  );
}
