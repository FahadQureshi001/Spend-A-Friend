
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, Activity, ArrowUpRight, ArrowDownRight, Plus, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InvestmentChart } from '@/components/charts/InvestmentChart';
import { StockPerformanceChart } from '@/components/charts/StockPerformanceChart';
import { InvestmentTabs } from '@/components/InvestmentTabs';

const mockTransactions = [
  { type: 'Buy', symbol: 'NVIDIA', shares: 25, price: '$451.20', date: '2024-01-20', total: '$11,280.00' },
  { type: 'Sell', symbol: 'AAPL', shares: 10, price: '$185.40', date: '2024-01-19', total: '$1,854.00' },
  { type: 'Buy', symbol: 'AMD', shares: 50, price: '$142.80', date: '2024-01-18', total: '$7,140.00' },
];

export const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, John!</h1>
          <p className="text-gray-600 mt-1">Here's what's happening with your investments today.</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          New Investment
        </Button>
      </div>

      {/* Account Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-blue-700">Total Portfolio</CardTitle>
            <div className="p-2 bg-blue-600 rounded-lg">
              <DollarSign className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">$15,045.36</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +$567.41 (+2.3%)
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-700">Today's Gain/Loss</CardTitle>
            <div className="p-2 bg-green-600 rounded-lg">
              <Activity className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">+$234.17</div>
            <p className="text-xs text-green-600">+1.58% today</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-700">Cash Balance</CardTitle>
            <div className="p-2 bg-purple-600 rounded-lg">
              <DollarSign className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">$2,420.00</div>
            <p className="text-xs text-purple-600">Available to invest</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover-scale">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-orange-700">Subscription</CardTitle>
            <div className="p-2 bg-orange-600 rounded-lg">
              <Activity className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">Pro Plan</div>
            <p className="text-xs text-orange-600">Active until Dec 2024</p>
          </CardContent>
        </Card>
      </div>

      {/* Investment Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InvestmentChart />
        <StockPerformanceChart />
      </div>

      {/* Investment Portfolio with Tabs */}
      <InvestmentTabs />

      {/* Recent Transactions */}
      <Card className="shadow-sm border-gray-200">
        <CardHeader className="border-b border-gray-100">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-semibold text-gray-900">Recent Transactions</CardTitle>
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Type</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Symbol</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Shares</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Price</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Date</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Total</th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((transaction, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        transaction.type === 'Buy' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {transaction.type}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-900 font-medium">{transaction.symbol}</td>
                    <td className="py-4 px-6 text-gray-600">{transaction.shares}</td>
                    <td className="py-4 px-6 text-gray-600">{transaction.price}</td>
                    <td className="py-4 px-6 text-gray-600">{transaction.date}</td>
                    <td className="py-4 px-6 text-gray-900 font-medium">{transaction.total}</td>
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
