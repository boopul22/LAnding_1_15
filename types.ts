import React from 'react';

// Extend React's JSX namespace to support custom element <iconify-icon>
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon: string;
        width?: string | number;
        height?: string | number;
        class?: string;
      };
    }
  }
}

export interface QuoteFormData {
  zipCode: string;
  currentInsurer: string;
  vehicle: string;
  email: string;
  agreedToTerms: boolean;
}

export interface Testimonial {
  name: string;
  location: string;
  initials: string;
  quote: string;
  rating: number;
}