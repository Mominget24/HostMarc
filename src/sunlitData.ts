export interface ClientRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  lastServiceDate: string;
  preferredService: string;
  status: 'active' | 'unsubscribed';
}

export const SAMPLE_CLIENTS: ClientRecord[] = [
  {
    id: 'cli-001',
    name: 'Tanvir Ahmed',
    email: 'tanvir.ahmed@dhakagroup.com',
    phone: '+880 1711-234567',
    location: 'Gulshan-2, Dhaka',
    lastServiceDate: '2025-11-14',
    preferredService: 'Modular Kitchen & Pantry',
    status: 'active'
  },
  {
    id: 'cli-002',
    name: 'Nusrat Jahan',
    email: 'nusrat.jahan@northsouth.edu',
    phone: '+880 1819-876543',
    location: 'Banani Block D, Dhaka',
    lastServiceDate: '2026-01-20',
    preferredService: 'Living Room False Ceiling & Lighting',
    status: 'active'
  },
  {
    id: 'cli-003',
    name: 'Dr. Kazi Mahfuzur Rahman',
    email: 'dr.mahfuz@squarehospital.com',
    phone: '+880 1912-345678',
    location: 'Dhanmondi Road 8/A, Dhaka',
    lastServiceDate: '2025-08-05',
    preferredService: 'Full Apartment Interior (2,400 sqft)',
    status: 'active'
  },
  {
    id: 'cli-004',
    name: 'Farzana Chowdhury',
    email: 'farzana.c@brac.net',
    phone: '+880 1678-901234',
    location: 'Uttara Sector 7, Dhaka',
    lastServiceDate: '2026-03-12',
    preferredService: 'Master Bedroom Custom Wardrobes',
    status: 'active'
  },
  {
    id: 'cli-005',
    name: 'Ashfaqur Rashid',
    email: 'ashfaq.rashid@apexfootwear.com',
    phone: '+880 1714-556677',
    location: 'Bashundhara R/A Block I, Dhaka',
    lastServiceDate: '2025-10-30',
    preferredService: 'Kitchen Cabinet Overhaul',
    status: 'active'
  },
  {
    id: 'cli-006',
    name: 'Shakil Mahmud',
    email: 'shakil.m@beximco.net',
    phone: '+880 1730-112233',
    location: 'Mirpur DOHS, Dhaka',
    lastServiceDate: '2026-02-18',
    preferredService: 'Home Office & Soundproofing',
    status: 'active'
  }
];

export const MASTER_MJML_CODE = `<mjml>
  <mj-head>
    <mj-title>{{main_heading}} | Sunlit Interior</mj-title>
    <mj-preview>{{main_heading}} - Bespoke Bangladeshi Interior Design Solutions</mj-preview>
    <mj-font name="Playfair Display" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,400&display=swap" />
    <mj-font name="Montserrat" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" />
    <mj-attributes>
      <mj-all font-family="Montserrat, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" />
      <mj-text font-size="14px" color="#374151" line-height="1.7" />
      <mj-section padding="0px" />
    </mj-attributes>
    <mj-style inline="inline">
      .brand-title { font-family: 'Playfair Display', Georgia, serif !important; letter-spacing: 0.5px; }
      .gold-accent { color: #C88A35 !important; }
      .hero-shadow { box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1); }
    </mj-style>
  </mj-head>
  <mj-body background-color="#F5F3EF">
    
    <!-- Top Utility Bar -->
    <mj-section background-color="#1C1917" padding="12px 20px">
      <mj-column width="60%">
        <mj-text color="#A8A29E" font-size="11px" font-weight="500" text-transform="uppercase" letter-spacing="1.5px">
          Sunlit Interior Architecture · Dhaka, Bangladesh
        </mj-text>
      </mj-column>
      <mj-column width="40%">
        <mj-text color="#C88A35" font-size="11px" font-weight="600" align="right">
          Hotline: +880 1711-000000
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Brand Header -->
    <mj-section background-color="#FFFFFF" padding="30px 24px 20px" border-bottom="1px solid #E7E5E4">
      <mj-column width="100%" align="center">
        <mj-text align="center" font-size="28px" font-weight="700" color="#1C1917" css-class="brand-title" letter-spacing="2px">
          SUNLIT<span style="color: #C88A35;">.</span>BD
        </mj-text>
        <mj-text align="center" font-size="11px" color="#78716C" letter-spacing="3px" text-transform="uppercase" padding-top="4px">
          Luxury Interiors & Home Craftsmanship
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Hero Image Section -->
    <mj-section background-color="#FFFFFF" padding="20px 24px 0px">
      <mj-column width="100%">
        <mj-image 
          src="{{hero_image}}" 
          alt="Sunlit Interior Design Showcase" 
          border-radius="6px" 
          padding="0px" 
          fluid-on-mobile="true"
        />
      </mj-column>
    </mj-section>

    <!-- Main Letter Content -->
    <mj-section background-color="#FFFFFF" padding="30px 32px 10px">
      <mj-column width="100%">
        <mj-text font-size="11px" font-weight="700" color="#C88A35" text-transform="uppercase" letter-spacing="2px">
          Exclusive Client Brief
        </mj-text>
        <mj-text font-size="24px" font-weight="700" color="#1C1917" padding-top="6px" padding-bottom="16px" line-height="1.3" css-class="brand-title">
          {{main_heading}}
        </mj-text>
        <mj-text font-size="15px" color="#1C1917" font-weight="600" padding-bottom="12px">
          Dear {{client_name}},
        </mj-text>
        <mj-text font-size="14px" color="#44403C" line-height="1.8" padding-bottom="16px">
          {{email_body}}
        </mj-text>
        <mj-button 
          background-color="#C88A35" 
          color="#FFFFFF" 
          font-size="14px" 
          font-weight="600" 
          letter-spacing="1px" 
          text-transform="uppercase"
          inner-padding="16px 32px" 
          border-radius="4px" 
          href="{{cta_url}}"
          align="left"
          padding-top="10px"
          padding-bottom="20px">
          {{cta_text}}
        </mj-button>
      </mj-column>
    </mj-section>

    <!-- Brand Value Pillars -->
    <mj-section background-color="#FAF8F5" padding="24px 20px" border-top="1px solid #E7E5E4" border-bottom="1px solid #E7E5E4">
      <mj-column width="33.33%" padding="10px">
        <mj-text align="center" font-size="20px">📐</mj-text>
        <mj-text align="center" font-weight="700" color="#1C1917" font-size="12px" text-transform="uppercase" letter-spacing="1px" padding-top="6px">
          3D Visual Mockup
        </mj-text>
        <mj-text align="center" font-size="11px" color="#78716C" padding-top="4px">
          Photorealistic preview before any woodwork begins.
        </mj-text>
      </mj-column>
      <mj-column width="33.33%" padding="10px">
        <mj-text align="center" font-size="20px">🛡️</mj-text>
        <mj-text align="center" font-weight="700" color="#1C1917" font-size="12px" text-transform="uppercase" letter-spacing="1px" padding-top="6px">
          Borer & Water Proof
        </mj-text>
        <mj-text align="center" font-size="11px" color="#78716C" padding-top="4px">
          Marine-grade ply & branded HPL boards for Bangladesh climate.
        </mj-text>
      </mj-column>
      <mj-column width="33.33%" padding="10px">
        <mj-text align="center" font-size="20px">⏱️</mj-text>
        <mj-text align="center" font-weight="700" color="#1C1917" font-size="12px" text-transform="uppercase" letter-spacing="1px" padding-top="6px">
          45-Day Handover
        </mj-text>
        <mj-text align="center" font-size="11px" color="#78716C" padding-top="4px">
          Strict on-time project completion guarantee in Dhaka.
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Official Footer (Bangladesh Digital Commerce Guidelines 2021 Compliant) -->
    <mj-section background-color="#1C1917" padding="36px 24px 24px">
      <mj-column width="100%" align="center">
        <mj-text align="center" font-size="18px" font-weight="700" color="#FFFFFF" letter-spacing="2px" css-class="brand-title">
          SUNLITBD.COM
        </mj-text>
        <mj-text align="center" font-size="11px" color="#A8A29E" padding-top="4px" letter-spacing="1.5px">
          ARCHITECTURAL INTERIORS & HOME SERVICES
        </mj-text>
        
        <mj-divider border-width="1px" border-color="#292524" padding="18px 0" width="80%" />

        <mj-text align="center" font-size="12px" color="#D6D3D1" line-height="1.6">
          <strong>Corporate Studio:</strong> House 28, Road 11, Block F, Banani, Dhaka-1213, Bangladesh<br/>
          <strong>Workshop & Joinery:</strong> Plot 14, Ashulia Industrial Belt, Savar, Dhaka<br/>
          <strong>Direct Line:</strong> +880 1711-000000 | <strong>Email:</strong> design@sunlitbd.com
        </mj-text>

        <!-- Social Icons -->
        <mj-social font-size="12px" icon-size="22px" mode="horizontal" padding-top="16px" padding-bottom="16px">
          <mj-social-element name="facebook" href="https://facebook.com/sunlitbd" background-color="#292524" color="#FFFFFF" />
          <mj-social-element name="instagram" href="https://instagram.com/sunlitbd" background-color="#292524" color="#FFFFFF" />
          <mj-social-element name="linkedin" href="https://linkedin.com/company/sunlitbd" background-color="#292524" color="#FFFFFF" />
          <mj-social-element name="youtube" href="https://youtube.com/@sunlitbd" background-color="#292524" color="#FFFFFF" />
        </mj-social>

        <mj-text align="center" font-size="11px" color="#78716C" line-height="1.6" padding-top="10px">
          This commercial communication is sent to clients registered with Sunlitbd.com in compliance with the Bangladesh Digital Commerce Operation Guidelines 2021 and Information & Communication Technology Act.
        </mj-text>

        <mj-text align="center" font-size="11px" color="#A8A29E" padding-top="12px">
          Want to update your email preferences or stop receiving design ideas? <br/>
          <a href="{{unsubscribe_url}}" style="color: #C88A35; text-decoration: underline;">One-Click Unsubscribe</a> | <a href="https://sunlitbd.com/privacy" style="color: #A8A29E; text-decoration: none;">Privacy Policy</a>
        </mj-text>
      </mj-column>
    </mj-section>

  </mj-body>
</mjml>`;

export const SUPABASE_SQL_SCHEMA = `-- ========================================================================
-- SUNLITBD.COM EMAIL MARKETING & CLIENT CRM DATABASE SCHEMA (SUPABASE / POSTGRESQL)
-- Optimized for Free Tier (Supabase Free 500MB DB & Row Level Security)
-- ========================================================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. CLIENTS TABLE
-- Stores client records uploaded via CSV or captured from website inquiries
CREATE TABLE IF NOT EXISTS public.clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50),
    location VARCHAR(255) DEFAULT 'Dhaka',
    last_service_date DATE,
    preferred_service VARCHAR(150),
    status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed', 'bounced')),
    unsubscribe_token UUID DEFAULT uuid_generate_v4() UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for speedy email lookups and campaign batch filtering
CREATE INDEX IF NOT EXISTS idx_clients_email ON public.clients(email);
CREATE INDEX IF NOT EXISTS idx_clients_status ON public.clients(status);
CREATE INDEX IF NOT EXISTS idx_clients_unsub_token ON public.clients(unsubscribe_token);

-- 2. CAMPAIGNS TABLE
-- Stores interior marketing campaigns generated by Gemini AI
CREATE TABLE IF NOT EXISTS public.campaigns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    subject_line VARCHAR(300) NOT NULL,
    main_heading VARCHAR(300) NOT NULL,
    body_content TEXT NOT NULL,
    cta_text VARCHAR(100) DEFAULT 'Schedule Free Consultation',
    cta_url VARCHAR(500) DEFAULT 'https://sunlitbd.com/contact',
    hero_image VARCHAR(500) DEFAULT 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    status VARCHAR(50) DEFAULT 'draft' CHECK (status IN ('draft', 'queued', 'sending', 'completed', 'failed', 'paused')),
    total_recipients INTEGER DEFAULT 0,
    sent_count INTEGER DEFAULT 0,
    failed_count INTEGER DEFAULT 0,
    scheduled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX IF NOT EXISTS idx_campaigns_status ON public.campaigns(status);

-- 3. CAMPAIGN DISPATCH LOGS
-- Tracks every individual email transmission for audit and rate-limiting
CREATE TABLE IF NOT EXISTS public.campaign_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    campaign_id UUID NOT NULL REFERENCES public.campaigns(id) ON DELETE CASCADE,
    client_id UUID NOT NULL REFERENCES public.clients(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'queued' CHECK (status IN ('queued', 'sent', 'failed', 'bounced')),
    smtp_message_id VARCHAR(255),
    error_message TEXT,
    retry_count INTEGER DEFAULT 0,
    sent_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_logs_campaign_status ON public.campaign_logs(campaign_id, status);

-- ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campaign_logs ENABLE ROW LEVEL SECURITY;

-- Allow authenticated admins full access
CREATE POLICY "Admin full access clients" ON public.clients FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access campaigns" ON public.campaigns FOR ALL TO authenticated USING (true);
CREATE POLICY "Admin full access logs" ON public.campaign_logs FOR ALL TO authenticated USING (true);

-- Allow public access for one-click unsubscribe endpoint by token
CREATE POLICY "Public unsubscribe access" ON public.clients 
    FOR UPDATE 
    TO anon, authenticated 
    USING (true)
    WITH CHECK (true);
`;

export const ANTI_SPAM_EXPLANATION = `
### Anti-Spam & Rate-Limiting Strategy for Bangladeshi SMTP Providers

When sending marketing emails through Bangladeshi business cPanel hosting (such as **ExonHost**, **Hostinger Business**, or **Google Workspace**), aggressive sending will immediately trigger spam flags or IP blocks.

#### 1. Provider Sending Limits
- **ExonHost (cPanel Shared Hosting):** 100 to 250 emails per domain/hour. Exceeding triggers server 550 rate limit rejects.
- **Hostinger Business Email:** ~100 emails/hour or 1,000/day. Strict spam heuristics on subject line punctuation and capitalization.
- **Google Workspace Business Starter:** 500 emails/day (trial) or 2,000 emails/day (paid).

#### 2. The 3-Tier Queue & Delay Architecture
1. **Batch Chunking:**
   - Divide recipient list into chunks of **10 to 15 recipients**.
   - Process one batch at a time.
2. **Jittered Inter-Email Delay:**
   - Sleep for **3,000ms to 7,000ms (3–7 seconds) with random jitter** between each email.
   - Fixed intervals (e.g. exactly 5.000s) trigger bot-detection heuristics in Gmail and Yahoo Spam Filters. Jitter mimics organic human dispatch.
3. **Inter-Batch Cooldown:**
   - Pause for **60 to 90 seconds** after every batch of 15 emails.
4. **Vercel Free Tier Timeout Mitigation:**
   - Vercel Serverless Functions have a strict **10-second default (max 60 seconds)** execution timeout on the Hobby (Free) plan.
   - *Solution:* Do NOT run the entire multi-minute queue inside a single Vercel request. Instead, use a **recursive chunk dispatcher** or **Supabase pg_cron / Upstash QStash webhook** that triggers a serverless endpoint every 2 minutes to process the next 15 queued emails from \`campaign_logs\`.
`;
