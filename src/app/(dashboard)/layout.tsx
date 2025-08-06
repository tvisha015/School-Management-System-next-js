export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-1/6 bg-red-200">left</div>
      {/* RIGHT */}
      <div className="w-5/6 bg-blue-200">right</div>
    </div>
  );
}