export type PageId =
  | 'home'
  | 'reviews'
  | 'comparisons'
  | 'renewal-costs'
  | 'migration'
  | 'tools'
  | 'deals'
  | 'tutorials'
  | 'use-cases'
  | 'about'
  | 'contact'
  | 'disclosure'
  | 'privacy';

export interface HostingPlan {
  id: string;
  name: string;
  provider: 'hostinger' | 'godaddy' | 'bluehost' | 'namecheap' | 'siteground';
  tagline: string;
  promoPrice: number;
  renewalPrice: number;
  originalPrice: number;
  discountPercentage: number;
  termMonths: number;
  popular?: boolean;
  bestValue?: boolean;
  features: {
    websites: string;
    storage: string;
    storageType: string;
    bandwidth: string;
    domain: string;
    ssl: string;
    backups: string;
    email: string;
    serverSoftware: string;
    staging: boolean;
    performanceScore: number;
  };
  pros: string[];
  cons: string[];
  affiliateUrl: string;
}

export interface BenchmarkData {
  region: string;
  city: string;
  flag: string;
  hostingerTtfb: number; // ms
  godaddyTtfb: number; // ms
  bluehostTtfb: number; // ms
  namecheapTtfb: number; // ms
}

export interface CouponDeal {
  id: string;
  provider: string;
  title: string;
  discount: string;
  code: string;
  verifiedDate: string;
  expires: string;
  description: string;
  features: string[];
  badge: string;
  affiliateUrl: string;
}

export interface MigrationStep {
  id: number;
  title: string;
  duration: string;
  description: string;
  category: 'backup' | 'transfer' | 'testing' | 'dns' | 'ssl';
  instructions: string[];
  proTip: string;
}

export interface ComparisonDetail {
  slug: string;
  competitor: string;
  competitorLogo: string;
  verdict: 'Hostinger wins decisively' | 'Hostinger recommended for value' | 'Close call';
  hostingerScore: number;
  competitorScore: number;
  summary: string;
  priceDiff: string;
  speedDiff: string;
  keyDifferences: {
    category: string;
    hostinger: string;
    competitor: string;
    winner: 'hostinger' | 'competitor' | 'tie';
  }[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  author: {
    name: string;
    role: string;
  };
}
