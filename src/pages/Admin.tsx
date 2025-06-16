
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Search, Filter, Trash2, Edit, AlertTriangle, TrendingUp, TrendingDown, Users, DollarSign, Activity, ShoppingCart } from 'lucide-react';
import { AdminAnalyticsCharts } from '@/components/charts/AdminAnalyticsCharts';

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', role: 'User', joinDate: '2024-01-15', balance: '$15,045.36' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active', role: 'Admin', joinDate: '2024-01-10', balance: '$28,920.45' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'Suspended', role: 'User', joinDate: '2024-01-08', balance: '$5,432.10' },
  { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', status: 'Active', role: 'User', joinDate: '2024-01-05', balance: '$42,187.23' },
  { id: 5, name: 'David Brown', email: 'david@example.com', status: 'Inactive', role: 'User', joinDate: '2024-01-01', balance: '$0.00' },
];

const mockTopCompanies = [
  { name: 'NVIDIA', investments: 1247, amount: '$567,890' },
  { name: 'Apple', investments: 1156, amount: '$423,120' },
  { name: 'Tesla', investments: 987, amount: '$389,450' },
  { name: 'Microsoft', investments: 876, amount: '$345,670' },
  { name: 'Amazon', investments: 743, amount: '$298,340' },
];

const mockTopMerchants = [
  { name: 'Amazon', users: 892, percentage: '71.5%' },
  { name: 'Walmart', users: 743, percentage: '59.5%' },
  { name: 'Target', users: 654, percentage: '52.4%' },
  { name: 'Best Buy', users: 567, percentage: '45.4%' },
  { name: 'Costco', users: 489, percentage: '39.2%' },
];

export const Admin = () => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<typeof mockUsers[0] | null>(null);

  const handleDeleteUser = (user: typeof mockUsers[0]) => {
    setSelectedUser(user);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    console.log('Deleting user:', selectedUser);
    setDeleteDialogOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">Comprehensive analytics and user management.</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="bg-white border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-blue-700 flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-900">1,248</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% this month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-green-700 flex items-center">
              <Activity className="h-4 w-4 mr-2" />
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">1,156</div>
            <p className="text-xs text-green-600">92.6% active rate</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-purple-700 flex items-center">
              <DollarSign className="h-4 w-4 mr-2" />
              Total AUM
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-900">$45.2M</div>
            <p className="text-xs text-purple-600">Assets under management</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-orange-700 flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              Monthly Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-900">$127K</div>
            <p className="text-xs text-orange-600">+8% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-700">Total Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">24,847</div>
            <p className="text-xs text-green-600">+15% this week</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-700">Avg Investment/Transaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">$18.47</div>
            <p className="text-xs text-blue-600">Optimal range</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-700">Avg Investments/User</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">12.3</div>
            <p className="text-xs text-green-600">+2.1 this month</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-700">Incomplete Setup</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">7.4%</div>
            <p className="text-xs text-red-600">92 users</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-700">Customer Lifetime Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">$2,847</div>
            <p className="text-xs text-green-600">+12% increase</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-700">Customer Acquisition Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">$127</div>
            <p className="text-xs text-orange-600">LTV/CAC: 22.4x</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-700">Annual Run Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">$1.52M</div>
            <p className="text-xs text-green-600">+18% growth</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-gray-700">Avg Merchants/User</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">3.7</div>
            <p className="text-xs text-blue-600">Well connected</p>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Charts */}
      <AdminAnalyticsCharts />

      {/* Top Companies and Merchants */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-gray-900 text-xl font-semibold">Most Invested Companies</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-4 p-6">
              {mockTopCompanies.map((company, index) => (
                <div key={company.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-lg font-bold text-gray-500">#{index + 1}</div>
                    <div>
                      <p className="font-medium text-gray-900">{company.name}</p>
                      <p className="text-sm text-gray-600">{company.investments} investments</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{company.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100">
            <CardTitle className="text-gray-900 text-xl font-semibold">Top Merchants</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-4 p-6">
              {mockTopMerchants.map((merchant, index) => (
                <div key={merchant.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-lg font-bold text-gray-500">#{index + 1}</div>
                    <div>
                      <p className="font-medium text-gray-900">{merchant.name}</p>
                      <p className="text-sm text-gray-600">{merchant.users} users</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{merchant.percentage}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Management Table */}
      <Card className="bg-white border-gray-200 shadow-sm">
        <CardHeader className="border-b border-gray-100">
          <CardTitle className="text-gray-900 text-xl font-semibold">User Management</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">User</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Email</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Role</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Status</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Balance</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Join Date</th>
                  <th className="text-left py-4 px-6 text-gray-700 font-medium text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.map((user, index) => (
                  <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 text-gray-900 font-medium">{user.name}</td>
                    <td className="py-4 px-6 text-gray-600">{user.email}</td>
                    <td className="py-4 px-6">
                      <Badge 
                        variant={user.role === 'Admin' ? 'default' : 'secondary'}
                        className={user.role === 'Admin' 
                          ? 'bg-purple-100 text-purple-700 border-purple-200' 
                          : 'bg-gray-100 text-gray-700 border-gray-200'
                        }
                      >
                        {user.role}
                      </Badge>
                    </td>
                    <td className="py-4 px-6">
                      <Badge 
                        variant="default"
                        className={
                          user.status === 'Active' 
                            ? 'bg-green-100 text-green-700 border-green-200' 
                            : user.status === 'Suspended'
                            ? 'bg-red-100 text-red-700 border-red-200'
                            : 'bg-gray-100 text-gray-700 border-gray-200'
                        }
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-6 text-gray-900 font-medium">{user.balance}</td>
                    <td className="py-4 px-6 text-gray-600">{user.joinDate}</td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-red-300 text-red-600 hover:bg-red-50"
                          onClick={() => handleDeleteUser(user)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="bg-white border-gray-200 text-gray-900">
          <DialogHeader>
            <DialogTitle className="flex items-center text-red-600">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Delete User Account
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-gray-700">
              Are you sure you want to delete the account for{' '}
              <span className="font-bold text-gray-900">{selectedUser?.name}</span>?
            </p>
            <p className="text-red-600 text-sm mt-2">
              This action cannot be undone and will permanently delete all user data.
            </p>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setDeleteDialogOpen(false)}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button 
              variant="destructive" 
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete Account
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
