import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings as SettingsIcon, DollarSign, Building2, Bell, User, Shield, Link, CreditCard, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { OnboardingFlow } from '@/components/OnboardingFlow';
import { useToast } from '@/hooks/use-toast';

const availableStocks = [
  { symbol: 'AAPL', name: 'Apple Inc.', price: '$185.40', selected: true },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', price: '$142.65', selected: true },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: '$378.90', selected: true },
  { symbol: 'TSLA', name: 'Tesla Inc.', price: '$210.50', selected: false },
  { symbol: 'NVIDIA', name: 'NVIDIA Corporation', price: '$451.20', selected: true },
  { symbol: 'AMZN', name: 'Amazon.com Inc.', price: '$156.78', selected: false },
  { symbol: 'META', name: 'Meta Platforms Inc.', price: '$398.67', selected: false },
  { symbol: 'NFLX', name: 'Netflix Inc.', price: '$456.23', selected: false },
];

export const Settings = () => {
  const [selectedStocks, setSelectedStocks] = useState(availableStocks);
  const [investmentAmount, setInvestmentAmount] = useState('25');
  const [autoInvestEnabled, setAutoInvestEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [isStripeConnected, setIsStripeConnected] = useState(false);
  const [stripeSecretKey, setStripeSecretKey] = useState('');
  const [stripePublishableKey, setStripePublishableKey] = useState('');
  const [isStripeTestMode, setIsStripeTestMode] = useState(true);
  const [isStripeLoading, setIsStripeLoading] = useState(false);
  const { toast } = useToast();

  const handleStockToggle = (symbol: string) => {
    setSelectedStocks(prev => 
      prev.map(stock => 
        stock.symbol === symbol 
          ? { ...stock, selected: !stock.selected }
          : stock
      )
    );
  };

  const handleSaveSettings = () => {
    toast({
      title: "Settings Saved",
      description: "Your investment preferences have been updated successfully.",
    });
  };

  const handleTestNotification = () => {
    if (notificationsEnabled) {
      toast({
        title: "🎉 Investment Successful!",
        description: "You just invested $25 into Tesla! Your portfolio is growing.",
      });
    } else {
      toast({
        title: "Notifications Disabled",
        description: "Enable notifications to receive investment updates.",
        variant: "destructive",
      });
    }
  };

  const handleStripeConnect = async () => {
    if (!stripeSecretKey || !stripePublishableKey) {
      toast({
        title: "Missing Keys",
        description: "Please provide both Secret Key and Publishable Key.",
        variant: "destructive",
      });
      return;
    }

    setIsStripeLoading(true);
    
    // Simulate API call to save keys
    setTimeout(() => {
      setIsStripeConnected(true);
      setIsStripeLoading(false);
      toast({
        title: "Stripe Connected!",
        description: "Your Stripe account has been successfully connected.",
      });
    }, 2000);
  };

  const handleStripeDisconnect = () => {
    setIsStripeConnected(false);
    setStripeSecretKey('');
    setStripePublishableKey('');
    toast({
      title: "Stripe Disconnected",
      description: "Your Stripe account has been disconnected.",
    });
  };

  const handleStripeTestConnection = () => {
    toast({
      title: "Testing Connection",
      description: "Verifying your Stripe credentials...",
    });
    
    setTimeout(() => {
      toast({
        title: "Connection Test Successful",
        description: "Your Stripe keys are valid and working.",
      });
    }, 1500);
  };

  const selectedCount = selectedStocks.filter(stock => stock.selected).length;

  return (
    <div className="container mx-auto px-4 py-8 space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your investment preferences and account settings.</p>
        </div>
        <Button 
          onClick={() => setOnboardingOpen(true)}
          variant="outline" 
          className="border-blue-300 text-blue-600 hover:bg-blue-50"
        >
          <SettingsIcon className="h-4 w-4 mr-2" />
          Setup Guide
        </Button>
      </div>

      <Tabs defaultValue="investment" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="investment">Investment</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="stripe">Stripe</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="investment" className="space-y-6">
          {/* Investment Amount */}
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Investment Amount per Purchase
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['10', '25', '50', '100'].map((amount) => (
                  <Button
                    key={amount}
                    variant={investmentAmount === amount ? "default" : "outline"}
                    onClick={() => setInvestmentAmount(amount)}
                    className={investmentAmount === amount ? "bg-blue-600 hover:bg-blue-700" : "border-gray-300"}
                  >
                    ${amount}
                  </Button>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value)}
                  className="w-32 p-2 border border-gray-300 rounded-lg"
                  placeholder="Custom amount"
                />
                <span className="text-gray-600">or enter a custom amount</span>
              </div>
            </CardContent>
          </Card>

          {/* Auto-Investment Toggle */}
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Auto-Investment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Enable automatic investments</p>
                  <p className="text-sm text-gray-600">Automatically invest when purchases are detected</p>
                </div>
                <Switch
                  checked={autoInvestEnabled}
                  onCheckedChange={setAutoInvestEnabled}
                />
              </div>
            </CardContent>
          </Card>

          {/* Stock Selection */}
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center justify-between">
                <span className="flex items-center">
                  <Building2 className="h-5 w-5 mr-2" />
                  Stock Selection
                </span>
                <Badge variant="outline" className="border-blue-300 text-blue-600">
                  {selectedCount} selected
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedStocks.map((stock) => (
                  <div
                    key={stock.symbol}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      stock.selected
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-300 bg-white hover:bg-gray-50'
                    }`}
                    onClick={() => handleStockToggle(stock.symbol)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900">{stock.symbol}</h4>
                        <p className="text-sm text-gray-600">{stock.name}</p>
                        <p className="text-sm font-medium text-gray-900">{stock.price}</p>
                      </div>
                      <div className={`w-5 h-5 rounded border-2 ${
                        stock.selected
                          ? 'bg-blue-500 border-blue-500'
                          : 'border-gray-300'
                      }`}>
                        {stock.selected && (
                          <svg className="w-3 h-3 text-white ml-0.5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button onClick={handleSaveSettings} className="bg-green-600 hover:bg-green-700">
              Save Investment Settings
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Investment Notifications</p>
                  <p className="text-sm text-gray-600">Get notified when investments are made</p>
                </div>
                <Switch
                  checked={notificationsEnabled}
                  onCheckedChange={setNotificationsEnabled}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Portfolio Updates</p>
                  <p className="text-sm text-gray-600">Daily portfolio performance summaries</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Market Alerts</p>
                  <p className="text-sm text-gray-600">Important market news and updates</p>
                </div>
                <Switch />
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Button onClick={handleTestNotification} variant="outline" className="w-full">
                  Test Notification
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stripe" className="space-y-6">
          {/* Stripe Connection Status */}
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center justify-between">
                <span className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Stripe Connection Status
                </span>
                {isStripeConnected ? (
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Connected
                  </Badge>
                ) : (
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    Not Connected
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isStripeConnected ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <div>
                      <p className="font-medium text-green-900">Stripe Account Connected</p>
                      <p className="text-sm text-green-700">
                        Mode: {isStripeTestMode ? 'Test Mode' : 'Live Mode'}
                      </p>
                    </div>
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex gap-3">
                    <Button onClick={handleStripeTestConnection} variant="outline">
                      Test Connection
                    </Button>
                    <Button onClick={handleStripeDisconnect} variant="destructive">
                      Disconnect
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">No Stripe account connected</p>
                  <p className="text-sm text-gray-500">
                    Connect your Stripe account to start accepting payments
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* API Keys Configuration */}
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">API Keys</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-blue-900">Get Your API Keys</p>
                    <p className="text-sm text-blue-700 mb-3">
                      You can find your API keys in your Stripe dashboard.
                    </p>
                    <a
                      href="https://dashboard.stripe.com/apikeys"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                    >
                      Go to Stripe Dashboard
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="stripePublishableKey">Publishable Key</Label>
                  <Input
                    id="stripePublishableKey"
                    type="text"
                    placeholder="pk_test_..."
                    value={stripePublishableKey}
                    onChange={(e) => setStripePublishableKey(e.target.value)}
                    disabled={isStripeConnected}
                  />
                  <p className="text-xs text-gray-500">
                    Safe to use in your frontend code
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stripeSecretKey">Secret Key</Label>
                  <Input
                    id="stripeSecretKey"
                    type="password"
                    placeholder="sk_test_..."
                    value={stripeSecretKey}
                    onChange={(e) => setStripeSecretKey(e.target.value)}
                    disabled={isStripeConnected}
                  />
                  <p className="text-xs text-gray-500">
                    Keep this secure and never share publicly
                  </p>
                </div>
              </div>

              {!isStripeConnected && (
                <div className="flex justify-end pt-4">
                  <Button 
                    onClick={handleStripeConnect} 
                    disabled={isStripeLoading || !stripeSecretKey || !stripePublishableKey}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    {isStripeLoading ? 'Connecting...' : 'Connect Stripe Account'}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Webhook Configuration */}
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900">Webhook Configuration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Set up webhooks to receive real-time updates about payment events.
                </p>
                
                <div className="p-4 bg-gray-50 rounded-lg">
                  <Label className="text-sm font-medium">Webhook Endpoint URL</Label>
                  <div className="mt-2 flex items-center space-x-2">
                    <Input
                      value="https://your-app.com/api/webhooks/stripe"
                      readOnly
                      className="bg-white"
                    />
                    <Button variant="outline" size="sm">
                      Copy
                    </Button>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <p className="font-medium mb-2">Recommended Events to Listen For:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>payment_intent.succeeded</li>
                    <li>payment_intent.payment_failed</li>
                    <li>customer.subscription.created</li>
                    <li>customer.subscription.updated</li>
                    <li>customer.subscription.deleted</li>
                  </ul>
                </div>

                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Configure Webhooks in Stripe
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-6">
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Account Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-600">Add an extra layer of security</p>
                </div>
                <Switch />
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-900">Connected Accounts</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Link className="h-5 w-5 mr-3 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Alpaca Trading</p>
                        <p className="text-sm text-gray-600">Connected</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      Active
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Link className="h-5 w-5 mr-3 text-gray-600" />
                      <div>
                        <p className="font-medium text-gray-900">Parsio Email</p>
                        <p className="text-sm text-gray-600">Connected</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 border-green-200">
                      Active
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <OnboardingFlow 
        isOpen={onboardingOpen} 
        onClose={() => setOnboardingOpen(false)} 
      />
    </div>
  );
};
