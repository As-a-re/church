'use client';

import { useState } from 'react';
import { Loader } from 'lucide-react';

export interface PaymentHandlerProps {
  amount: number;
  email: string;
  name: string;
  onSuccess?: (reference: string, provider: string) => void;
  onError?: (error: string) => void;
}

export function StripePaymentButton({
  amount,
  email,
  name,
  onSuccess,
  onError,
}: PaymentHandlerProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: Math.round(amount * 100), // Convert to cents
          email,
          name,
        }),
      });

      const { sessionId } = await response.json();
      
      // Load Stripe dynamically
      const stripeModule = await import('@stripe/stripe-js');
      const stripe = await stripeModule.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId });
        onSuccess?.(sessionId, 'stripe');
      }
    } catch (error) {
      console.error('Stripe error:', error);
      onError?.(`Payment failed: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading || amount <= 0}
      className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {isLoading && <Loader size={18} className="animate-spin" />}
      {isLoading ? 'Processing...' : 'Pay with Stripe'}
    </button>
  );
}

export function PaystackPaymentButton({
  amount,
  email,
  name,
  onSuccess,
  onError,
}: PaymentHandlerProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    if (!email || amount <= 0) {
      onError?.('Please provide email and amount');
      return;
    }

    setIsLoading(true);
    try {
      // Load Paystack dynamically
      const paystackModule = await import('@paystack/inline-js');
      const PaystackPop = paystackModule.default;
      
      const popup = new PaystackPop();
      popup.newTransaction({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY!,
        email,
        amount: amount * 100,
        onClose: () => {
          setIsLoading(false);
        },
        onSuccess: (transaction: any) => {
          onSuccess?.(transaction.reference, 'paystack');
          setIsLoading(false);
        },
        onError: (error: any) => {
          onError?.(`Payment failed: ${error}`);
          setIsLoading(false);
        },
      });
    } catch (error) {
      console.error('Paystack error:', error);
      onError?.(`Payment error: ${error}`);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading || amount <= 0}
      className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {isLoading && <Loader size={18} className="animate-spin" />}
      {isLoading ? 'Processing...' : 'Pay with Paystack'}
    </button>
  );
}

export function FlutterwavePaymentButton({
  amount,
  email,
  name,
  onSuccess,
  onError,
}: PaymentHandlerProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    if (!email || amount <= 0) {
      onError?.('Please provide email and amount');
      return;
    }

    setIsLoading(true);
    try {
      // Dynamic import for FlutterWave script
      const FlutterwaveCheckout = (window as any).FlutterwaveCheckout;
      
      if (!FlutterwaveCheckout) {
        // Load Flutterwave script
        const script = document.createElement('script');
        script.src = 'https://checkout.flutterwave.com/v3.js';
        document.body.appendChild(script);
        
        script.onload = () => {
          initializeFlutterwave();
        };
      } else {
        initializeFlutterwave();
      }

      function initializeFlutterwave() {
        FlutterwaveCheckout({
          public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
          tx_ref: `church-${Date.now()}`,
          amount,
          currency: 'USD',
          payment_options: 'card,mobilemoney,ussd',
          customer: {
            email,
            name,
          },
          customizations: {
            title: 'Church of Christ Hilltop - Giving',
            description: 'Support our ministry',
            logo: '/logo.png',
          },
          onclose: () => {
            setIsLoading(false);
          },
          callback: (data: any) => {
            if (data.status === 'successful') {
              onSuccess?.(data.transaction_id, 'flutterwave');
            } else {
              onError?.('Payment was not successful');
            }
            setIsLoading(false);
          },
        });
      }
    } catch (error) {
      console.error('Flutterwave error:', error);
      onError?.(`Payment error: ${error}`);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading || amount <= 0}
      className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {isLoading && <Loader size={18} className="animate-spin" />}
      {isLoading ? 'Processing...' : 'Pay with Flutterwave'}
    </button>
  );
}
