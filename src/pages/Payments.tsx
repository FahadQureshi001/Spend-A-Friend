
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Filter, Search, ShoppingCart, CreditCard } from 'lucide-react';

const mockPurchases = [
  { id: 'PUR001', date: '2024-01-20', merchant: 'Amazon', description: 'Electronics Purchase', amount: '$156.78', category: 'Electronics', paymentMethod: 'Credit Card' },
  { id: 'PUR002', date: '2024-01-19', merchant: 'Walmart', description: 'Groceries', amount: '$87.45', category: 'Groceries', paymentMethod: 'Debit Card' },
  { id: 'PUR003', date: '2024-01-18', merchant: 'Best Buy', description: 'Technology Purchase', amount: '$234.99', category: 'Electronics', paymentMethod: 'Credit Card' },
  { id: 'PUR004', date: '2024-01-17', merchant: 'Target', description: 'Household Items', amount: '$67.23', category: 'Home & Garden', paymentMethod: 'Credit Card' },
  { id: 'PUR005', date: '2024-01-16', merchant: 'Starbucks', description: 'Coffee & Pastries', amount: '$12.45', category: 'Food & Beverage', paymentMethod: 'Mobile Pay' },
  { id: 'PUR006', date: '2024-01-15', merchant: 'Gas Station', description: 'Fuel Purchase', amount: '$45.20', category: 'Transportation', paymentMethod: 'Credit Card' },
  { id: 'PUR007', date: '2024-01-14', merchant: 'Netflix', description: 'Monthly Subscription', amount: '$15.99', category: 'Entertainment', paymentMethod: 'Credit Card' },
  { id: 'PUR008', date: '2024-01-13', merchant: 'Local Restaurant', description: 'Dinner', amount: '$78.90', category: 'Food & Beverage', paymentMethod: 'Credit Card' },
];

const categoryColors = {
  'Electronics': 'bg-blue-100 text-blue-700 border-blue-200',
  'Groceries': 'bg-green-100 text-green-700 border-green-200',
  'Home & Garden': 'bg-purple-100 text-purple-700 border-purple-200',
  'Food & Beverage': 'bg-orange-100 text-orange-700 border-orange-200',
  'Transportation': 'bg-red-100 text-red-700 border-red-200',
  'Entertainment': 'bg-pink-100 text-pink-700 border-pink-200',
};

export const Payments = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Purchase History</h1>
          <p className="text-gray-600 mt-1">Track all your purchases and spending patterns.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search purchases..."
              className="bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-700 flex items-center">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Total Purchases
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">127</div>
            <p className="text-xs text-gray-500">This month</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-700 flex items-center">
              <CreditCard className="h-4 w-4 mr-2" />
              Total Spent
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">$2,847.32</div>
            <p className="text-xs text-gray-500">This month</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-700">Average Purchase</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">$22.42</div>
            <p className="text-xs text-gray-500">Per transaction</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-700">Auto-Invested</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">$284.73</div>
            <p className="text-xs text-green-600">From purchases</p>
          </CardContent>
        </Card>
      </div>

      {/* Category Breakdown */}
      <Card className="bg-white border-gray-200 shadow-sm">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="text-gray-900 text-xl font-semibold">Spending by Category</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(categoryColors).map(([category, colorClass]) => (
              <div key={category} className="text-center p-4 bg-gray-50 rounded-lg">
                <Badge className={`${colorClass} mb-2`}>
                  {category}
                </Badge>
                <div className="text-lg font-bold text-gray-900">$456</div>
                <div className="text-sm text-gray-600">18 purchases</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Purchase History Table */}
      <Card className="bg-white border-gray-200 shadow-sm">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="text-gray-900 text-xl font-semibold">Recent Purchases</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Purchase ID</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Date</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Merchant</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Description</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Amount</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Category</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Payment Method</th>
                </tr>
              </thead>
              <tbody>
                {mockPurchases.map((purchase, index) => (
                  <tr key={purchase.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-blue-600 font-mono text-sm">{purchase.id}</td>
                    <td className="py-4 px-6 text-gray-600">{purchase.date}</td>
                    <td className="py-4 px-6 text-gray-900 font-medium">{purchase.merchant}</td>
                    <td className="py-4 px-6 text-gray-600">{purchase.description}</td>
                    <td className="py-4 px-6 text-gray-900 font-medium">{purchase.amount}</td>
                    <td className="py-4 px-6">
                      <Badge 
                        className={categoryColors[purchase.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-700 border-gray-200'}
                      >
                        {purchase.category}
                      </Badge>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{purchase.paymentMethod}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
