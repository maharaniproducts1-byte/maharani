import ClientAnalyzer from "@/components/ClientAnalyzer";

export const metadata = {
  title: "Admin - Client Analyzer",
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <ClientAnalyzer />
    </div>
  );
}
