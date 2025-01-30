import { Layout } from "@/components/Layout";

const AdminTrailerModels = () => {
  return (
    <Layout userRole="admin" userName="Admin User" companyName="Nitro Trailers">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Manage Trailer Models</h1>
        </div>
        <div className="text-center py-12 text-gray-500">
          Trailer models management coming soon.
        </div>
      </div>
    </Layout>
  );
};

export default AdminTrailerModels;
