import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  ShoppingCart, 
  FileText, 
  Truck, 
  Shield, 
  Map,
  BarChart3,
  UserPlus,
  Building2,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const dealerMetrics = [
    { title: "Total Dealers", value: "245", icon: Users, description: "Active dealers across all territories" },
    { title: "New Dealers", value: "12", icon: UserPlus, description: "Added this month" },
    { title: "Territories", value: "35", icon: MapPin, description: "Active dealer territories" },
    { title: "Pending Approvals", value: "8", icon: FileText, description: "Dealer applications pending review" },
  ];

  return (
    <Layout userRole="admin" userName="Admin User" companyName="Nitro Trailers">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <div className="flex gap-3">
            <Button 
              variant="outline"
              onClick={() => navigate("/dealers")}
            >
              View All Dealers
            </Button>
            <Button 
              className="bg-nitro-red hover:bg-nitro-red/90"
              onClick={() => navigate("/dealers/new")}
            >
              Add New Dealer
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {dealerMetrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="h-24 flex flex-col gap-2"
                  onClick={() => navigate("/dealers")}
                >
                  <Users className="h-6 w-6" />
                  Manage Dealers
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex flex-col gap-2"
                  onClick={() => navigate("/territory")}
                >
                  <Map className="h-6 w-6" />
                  Territory Map
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex flex-col gap-2"
                  onClick={() => navigate("/models")}
                >
                  <Truck className="h-6 w-6" />
                  Manage Models
                </Button>
                <Button 
                  variant="outline" 
                  className="h-24 flex flex-col gap-2"
                  onClick={() => navigate("/resources")}
                >
                  <FileText className="h-6 w-6" />
                  Update Resources
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dealer Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Top Performing</span>
                  <span className="text-sm">ABC Trailers</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Most Orders</span>
                  <span className="text-sm">XYZ Motors</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Newest Dealer</span>
                  <span className="text-sm">123 Trailers</span>
                </div>
                <Button 
                  className="w-full mt-4" 
                  variant="outline"
                  onClick={() => navigate("/dealers")}
                >
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View All Dealers
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
