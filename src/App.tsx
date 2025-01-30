import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
    import Index from "@/pages/Index";
    import QuotesPortal from "@/pages/QuotesPortal";
    import Orders from "@/pages/Orders";
    import Analytics from "@/pages/Analytics";
    import OrderDetails from "@/components/admin/OrderDetails";
    import WarrantyDetails from "@/components/admin/WarrantyDetails";
    import DealerManagement from "@/pages/DealerManagement";
    import SalesTeam from "@/pages/SalesTeam";
    import TrailerModels from "@/pages/TrailerModels";
    import Resources from "@/pages/Resources";
    import TerritoryMap from "@/pages/TerritoryMap";
    import LeadManagement from "@/pages/LeadManagement";
    import Parts from "@/pages/Parts";
    import Login from "@/pages/Login";
    import SalesDashboard from "@/pages/SalesDashboard";
    import { DealerCRMPage } from "@/pages/DealerCRMPage";
    import DealerDashboard from "@/pages/DealerDashboard";
    import { WarrantyPage } from "@/components/dealer/WarrantyPage";
    import ModelSelectionPage from "@/pages/ModelSelectionPage";
    import TestComponent from "@/components/TestComponent";

    export default function App() {
      return (
        <Router>
          <Routes>
            {/* Auth routes */}
            <Route path="/login" element={<Login />} />

            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/build-your-own" element={<ModelSelectionPage />} />
            <Route path="/quotes" element={<QuotesPortal />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/analytics" element={<Analytics />} />

            {/* Dealer routes */}
            <Route path="/dealer" element={<DealerDashboard />} />
            <Route path="/dealer/quotes" element={<QuotesPortal />} />
            <Route path="/dealer/orders" element={<Orders />} />
            <Route path="/dealer/parts" element={<Parts />} />
            <Route path="/dealer/resources" element={<Resources />} />

            {/* Sales routes */}
            <Route path="/sales" element={<SalesDashboard />} />
            <Route path="/dealer-crm" element={<DealerCRMPage />} />
            <Route path="/lead-management" element={<LeadManagement />} />
            <Route path="/territory-map" element={<TerritoryMap userRole="sales" />} />
            <Route path="/sales/quotes" element={<QuotesPortal />} />
            <Route path="/sales/orders" element={<Orders />} />
            <Route path="/sales/analytics" element={<Analytics />} />

            {/* Admin routes */}
            <Route path="/admin" element={<Index />} />
            <Route path="/dealer-management" element={<DealerManagement />} />
            <Route path="/sales-team" element={<SalesTeam />} />
            <Route path="/parts-catalog" element={<Parts />} />
            <Route path="/trailer-models" element={<TrailerModels />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/admin/territory-map" element={<TerritoryMap userRole="admin" />} />

            {/* Admin detail routes */}
            <Route path="/admin/quotes" element={<QuotesPortal />} />
            <Route path="/admin/quotes/:id" element={<QuotesPortal />} />
            <Route path="/admin/orders" element={<Orders />} />
            <Route path="/admin/orders/:id" element={<OrderDetails />} />
            <Route path="/admin/warranty" element={<Orders />} />
            <Route path="/admin/warranty/:id" element={<WarrantyDetails />} />

            {/* Test route */}
            <Route path="/test" element={<TestComponent />} />
          </Routes>
        </Router>
      );
    }
