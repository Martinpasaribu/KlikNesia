// app/about/layout.tsx
export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white p-0  w-full min-h-screen">
      <main>{children}</main> {/* <== Di sini konten page.tsx masuk */}
    </div>
  );
}
