import { MigrationStep } from '../types';

export const MIGRATION_STEPS: MigrationStep[] = [
  {
    id: 1,
    title: 'Full Site Backup & Database Dump',
    duration: '5–10 mins',
    category: 'backup',
    description:
      'Generate a pristine local archive of your wp-content folder and export the MySQL database with UTF-8 character encoding.',
    instructions: [
      'Install "UpdraftPlus" or "All-in-One WP Migration" plugin on your current hosting dashboard.',
      'Export a full backup including Database, Plugins, Themes, Uploads, and Other wp-content files.',
      'Download the archive file (.wpress or .zip) directly to your local computer.',
      'Check database table prefix (default is wp_) in wp-config.php for later verification.',
    ],
    proTip:
      'Never skip creating a standalone local SQL dump via phpMyAdmin in addition to your plugin backup. It takes 30 seconds and guarantees 100% data recovery.',
  },
  {
    id: 2,
    title: 'Provision Hostinger Server & hPanel Setup',
    duration: '3–5 mins',
    category: 'transfer',
    description:
      'Choose the server location nearest to your primary target audience (e.g. Singapore for Asia/Bangladesh, US East for North America, Frankfurt for Europe).',
    instructions: [
      'Log into your Hostinger hPanel and click "Websites" > "Add Website".',
      'Select WordPress or Blank site, and choose your preferred server data center.',
      'Option A: Request Hostinger’s free migration team (provide old cPanel or WP-admin credentials).',
      'Option B: Self-migrate using All-in-One WP Migration or manual FTP + phpMyAdmin import.',
    ],
    proTip:
      'If your audience is in Bangladesh, India, or Southeast Asia, always select the Singapore data center. It provides 120–150ms TTFB compared to 400ms+ on standard US servers.',
  },
  {
    id: 3,
    title: 'Preview & Test on Temporary Domain / Hosts File',
    duration: '5–10 mins',
    category: 'testing',
    description:
      'Test your migrated site thoroughly on Hostinger BEFORE modifying any DNS records so your live visitors never encounter downtime.',
    instructions: [
      'In hPanel, copy your new Server IP address and temporary preview link.',
      'Add a temporary line to your computer’s local hosts file: [Hostinger_Server_IP] yourdomain.com.',
      'Open an incognito browser window and test pages, contact forms, checkout flows, and images.',
      'Verify that database queries and plugin dependencies are functioning cleanly on PHP 8.2/8.3.',
    ],
    proTip:
      'Testing via local hosts file reroutes traffic only on your machine. The rest of the world continues viewing your old host until step 5.',
  },
  {
    id: 4,
    title: 'Lower DNS TTL (Time To Live)',
    duration: '2 mins (wait 2-4 hrs)',
    category: 'dns',
    description:
      'Reduce your domain DNS records TTL from 86400 (24h) down to 300 seconds (5 mins) at your domain registrar or Cloudflare.',
    instructions: [
      'Go to your domain DNS settings (GoDaddy, Namecheap, Cloudflare, etc.).',
      'Locate the "A" record pointing to your root domain and the CNAME record for "www".',
      'Change the TTL value on both records to 300 seconds (or 5 minutes).',
      'Save changes and wait 2 to 4 hours so the old long TTL expires across global recursive resolvers.',
    ],
    proTip:
      'Lowering TTL beforehand ensures that when you point your domain to Hostinger in step 5, global propagation takes under 5 minutes instead of 48 hours.',
  },
  {
    id: 5,
    title: 'Switch DNS A-Record & Nameservers',
    duration: '3 mins',
    category: 'dns',
    description:
      'Point your domain’s A record to your Hostinger server IP address, or switch nameservers to ns1.dns-parking.com and ns2.dns-parking.com.',
    instructions: [
      'If using Cloudflare: Simply update the A Record IP to your Hostinger IP (instant zero-downtime cutover).',
      'If using Registrar Nameservers: Update Nameservers to ns1.dns-parking.com & ns2.dns-parking.com.',
      'Keep your old hosting account active for at least 48 hours to handle any trailing cached queries.',
    ],
    proTip:
      'Cloudflare users can execute this with literally zero downtime: flip the A Record IP in Cloudflare DNS, and the switch is instantaneously routed to Hostinger.',
  },
  {
    id: 6,
    title: 'Install Free Lifetime SSL & Activate LSCache',
    duration: '5 mins',
    category: 'ssl',
    description:
      'Activate Let’s Encrypt SSL encryption in hPanel and turn on LiteSpeed Enterprise Caching inside your WordPress admin.',
    instructions: [
      'In hPanel, navigate to Security > SSL and click "Install SSL" for your root and www domain.',
      'Force HTTPS redirect with one click in hPanel.',
      'In WordPress wp-admin, navigate to Plugins > LiteSpeed Cache and apply the "Advanced Recommended" preset.',
      'Run a speed test on Google PageSpeed Insights and GTmetrix to confirm your A+ performance score.',
    ],
    proTip:
      'LiteSpeed Cache + Hostinger Object Cache (Memcached/Redis) typically drops server response time by 60–70% compared to standard caching plugins.',
  },
];
