
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Circle, Mail, Link, Settings, ArrowRight, ArrowLeft } from 'lucide-react';

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  completed: boolean;
}

const initialSteps: OnboardingStep[] = [
  {
    id: 1,
    title: "Connect Email to Parsio",
    description: "Link your email account to automatically detect purchase transactions",
    icon: <Mail className="h-6 w-6" />,
    completed: false
  },
  {
    id: 2,
    title: "Link Alpaca API",
    description: "Connect your Alpaca trading account for automated investments",
    icon: <Link className="h-6 w-6" />,
    completed: false
  },
  {
    id: 3,
    title: "Configure Investment Settings",
    description: "Set your investment preferences and stock selections",
    icon: <Settings className="h-6 w-6" />,
    completed: false
  }
];

interface OnboardingFlowProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingFlow: React.FC<OnboardingFlowProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [steps, setSteps] = useState(initialSteps);

  const handleStepComplete = (stepId: number) => {
    setSteps(prev => prev.map(step => 
      step.id === stepId ? { ...step, completed: true } : step
    ));
    
    if (stepId < steps.length) {
      setCurrentStep(stepId + 1);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = steps.find(step => step.id === currentStep);
  const isLastStep = currentStep === steps.length;
  const allStepsCompleted = steps.every(step => step.completed);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white border-gray-200 text-gray-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-900">
            Welcome to Your Investment Journey!
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                  step.completed 
                    ? 'bg-green-100 border-green-500 text-green-600' 
                    : step.id === currentStep
                    ? 'bg-blue-100 border-blue-500 text-blue-600'
                    : 'bg-gray-100 border-gray-300 text-gray-400'
                }`}>
                  {step.completed ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    <span className="font-medium">{step.id}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    step.completed ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Current Step Content */}
          {currentStepData && (
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className={`p-4 rounded-full ${
                  currentStepData.completed 
                    ? 'bg-green-100 text-green-600' 
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  {currentStepData.icon}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {currentStepData.title}
                </h3>
                <p className="text-gray-600">
                  {currentStepData.description}
                </p>
              </div>

              {/* Step-specific content */}
              <div className="bg-gray-50 p-6 rounded-lg text-left">
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Email Integration Steps:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                      <li>Sign up for a Parsio account</li>
                      <li>Connect your email account (Gmail, Outlook, etc.)</li>
                      <li>Set up parsing rules for purchase receipts</li>
                      <li>Test the integration with a sample email</li>
                    </ol>
                    <Button 
                      onClick={() => handleStepComplete(1)}
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Mark as Complete
                    </Button>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Alpaca API Connection:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600">
                      <li>Create an Alpaca trading account</li>
                      <li>Generate API keys in your Alpaca dashboard</li>
                      <li>Enter your API credentials securely</li>
                      <li>Verify connection and permissions</li>
                    </ol>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Enter Alpaca API Key"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                      <input
                        type="password"
                        placeholder="Enter Secret Key"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                      />
                      <Button 
                        onClick={() => handleStepComplete(2)}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        Connect Alpaca Account
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900">Investment Preferences:</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Investment Amount per Transaction
                        </label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg">
                          <option>$10</option>
                          <option>$25</option>
                          <option>$50</option>
                          <option>$100</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Companies
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'NVIDIA'].map(stock => (
                            <Badge key={stock} variant="outline" className="cursor-pointer hover:bg-blue-100">
                              {stock}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button 
                        onClick={() => handleStepComplete(3)}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        Save Settings
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="border-gray-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            {allStepsCompleted ? (
              <Button 
                onClick={onClose}
                className="bg-green-600 hover:bg-green-700"
              >
                Complete Setup
              </Button>
            ) : (
              <Button 
                onClick={handleNext}
                disabled={isLastStep}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
