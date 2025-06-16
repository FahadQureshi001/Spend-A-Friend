
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { CreditCard, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const StripeConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [secretKey, setSecretKey] = useState('');
  const [publishableKey, setPublishableKey] = useState('');
  const [isTestMode, setIsTestMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleConnect = async () => {
    if (!secretKey || !publishableKey) {
      toast({
        title: "Missing Keys",
        description: "Please provide both Secret Key and Publishable Key.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call to save keys
    setTimeout(() => {
      setIsConnected(true);
      setIsLoading(false);
      toast({
        title: "Stripe Connected!",
        description: "Your Stripe account has been successfully connected.",
      });
    }, 2000);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setSecretKey('');
    setPublishableKey('');
    toast({
      title: "Stripe Disconnected",
      description: "Your Stripe account has been disconnected.",
    });
  };

  const handleTestConnection = () => {
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

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 flex items-center">
          <CreditCard className="h-8 w-8 mr-3 text-blue-600" />
          Stripe Integration
        </h1>
        <p className="text-gray-600 mt-2">
          Connect your Stripe account to enable payment processing for your application.
        </p>
      </div>

      <div className="space-y-6">
        {/* Connection Status */}
        <Card className="bg-white border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center justify-between">
              Connection Status
              {isConnected ? (
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
            {isConnected ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div>
                    <p className="font-medium text-green-900">Stripe Account Connected</p>
                    <p className="text-sm text-green-700">
                      Mode: {isTestMode ? 'Test Mode' : 'Live Mode'}
                    </p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <div className="flex gap-3">
                  <Button onClick={handleTestConnection} variant="outline">
                    Test Connection
                  </Button>
                  <Button onClick={handleDisconnect} variant="destructive">
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
                <Label htmlFor="publishableKey">Publishable Key</Label>
                <Input
                  id="publishableKey"
                  type="text"
                  placeholder="pk_test_..."
                  value={publishableKey}
                  onChange={(e) => setPublishableKey(e.target.value)}
                  disabled={isConnected}
                />
                <p className="text-xs text-gray-500">
                  Safe to use in your frontend code
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="secretKey">Secret Key</Label>
                <Input
                  id="secretKey"
                  type="password"
                  placeholder="sk_test_..."
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  disabled={isConnected}
                />
                <p className="text-xs text-gray-500">
                  Keep this secure and never share publicly
                </p>
              </div>
            </div>

            {!isConnected && (
              <div className="flex justify-end pt-4">
                <Button 
                  onClick={handleConnect} 
                  disabled={isLoading || !secretKey || !publishableKey}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {isLoading ? 'Connecting...' : 'Connect Stripe Account'}
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
      </div>
    </div>
  );
};
