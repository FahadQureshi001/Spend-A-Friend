
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { Stocks } from "./pages/Stocks";
import { StockDetails } from "./pages/StockDetails";
import { Settings } from "./pages/Settings";
import { Payments } from "./pages/Payments";
import { Admin } from "./pages/Admin";
import { StripeConnect } from "./pages/StripeConnect";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/stocks" element={<Layout><Stocks /></Layout>} />
          <Route path="/stocks/:symbol" element={<Layout><StockDetails /></Layout>} />
          <Route path="/payments" element={<Layout><Payments /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          <Route path="/stripe-connect" element={<Layout><StripeConnect /></Layout>} />
          <Route path="/admin" element={<Layout><Admin /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
