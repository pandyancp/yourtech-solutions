# YourTech Solutions — Premium Full-Stack IT Services Company Website

A production-ready, full-stack website and API for **YourTech Solutions – Cloud & DevOps Services**, engineered to showcase end-to-end IT capabilities across Frontend Development, Backend Services, Relational & NoSQL Databases, DevOps & CI/CD Automation, Docker & Kubernetes, Multi-Cloud Infrastructure, and Enterprise Security.

---

## 🏗️ Technical Architecture

- **Frontend**: React 18, TypeScript, Vite 5, Tailwind CSS, Lucide Icons, Plus Jakarta Sans & JetBrains Mono typography.
- **Backend API**: Node.js, TypeScript, Express, Helmet security headers, CORS, Rate Limiting (`express-rate-limit`).
- **Validation**: Zod schema validation for strict server-side request sanitization.
- **Persistence Layer**: PostgreSQL database support via Prisma ORM with automated fallback to persistent JSON storage for effortless local development.
- **Email Notifications**: Nodemailer integration with environment-controlled SMTP configuration.
- **Testing**: Vitest + Supertest automated unit and integration testing suite.
- **Reverse Proxy & Production Server**: Nginx with SSL termination, Gzip compression, and SPA fallback routing.

---

## 📁 Project Directory Structure

```
d:\Company\
├── server/                             # 🖥️ BACKEND EXPRESS API
│   ├── dist/                           # Compiled JavaScript server build
│   ├── prisma/
│   │   └── schema.prisma               # PostgreSQL Prisma database schema
│   ├── src/
│   │   ├── controllers/
│   │   │   └── enquiryController.ts    # Contact enquiry validation & controller
│   │   ├── routes/
│   │   │   ├── enquiryRoutes.ts        # POST /api/enquiries (rate-limited)
│   │   │   └── healthRoutes.ts         # GET /api/health diagnostics
│   │   ├── services/
│   │   │   ├── emailService.ts         # Nodemailer SMTP notification service
│   │   │   └── storageService.ts       # Database persistence (PostgreSQL / JSON)
│   │   ├── tests/
│   │   │   └── enquiry.test.ts         # Vitest + Supertest test suite
│   │   ├── types/
│   │   │   └── index.ts                # Backend TypeScript types
│   │   ├── validators/
│   │   │   └── enquiryValidator.ts     # Zod request validation schemas
│   │   ├── app.ts                      # Express app with security middlewares
│   │   └── index.ts                    # HTTP server listener & graceful shutdown
│   └── tsconfig.json                   # Backend TypeScript configuration
├── src/                                # 🎨 FRONTEND REACT SPA
│   ├── components/
│   │   ├── Header.tsx                  # Floating glass island navbar & dropdown
│   │   ├── Hero.tsx                    # Headline, 4 pillars & live ops console
│   │   ├── Services.tsx                # 7 core disciplines & category filter
│   │   ├── ServiceDetailModal.tsx      # In-depth technical specifications modal
│   │   ├── ArchitectureFlow.tsx        # 6-stage DevOps & delivery lifecycle
│   │   ├── Technologies.tsx            # Multi-stack filterable technology matrix
│   │   ├── TechLogos.tsx               # Scalable SVG tech brand icons
│   │   ├── AboutUs.tsx                 # Core philosophy & SLA commitments
│   │   ├── Projects.tsx                # Demonstration reference architectures
│   │   ├── WhyChooseUs.tsx             # 6 differentiators & verified trust quotes
│   │   ├── QuoteCalculator.tsx         # Interactive scope & quote estimator
│   │   ├── FaqSection.tsx              # Technical FAQ accordion
│   │   ├── Contact.tsx                 # Full-stack validated enquiry form
│   │   ├── FloatingActions.tsx         # Floating quick WhatsApp & call buttons
│   │   └── Footer.tsx                  # Comprehensive footer with quick links
│   ├── config/
│   │   └── siteConfig.ts               # ⭐ SINGLE CONFIG FILE for all company info
│   ├── App.tsx                         # Main frontend application component
│   ├── index.css                       # Modern Tailwind & glassmorphism styling
│   └── main.tsx                        # Frontend entry point
├── .env.example                        # Environment variables template
├── deploy.sh                           # AWS EC2 Linux automated deployment script
├── nginx.conf                          # Production Nginx reverse proxy + SSL config
├── package.json                        # Root full-stack scripts & dependencies
├── tailwind.config.js                  # Tailwind configuration
├── tsconfig.json                       # Root TypeScript configuration
├── vite.config.ts                      # Vite configuration with /api reverse proxy
└── yourtech-backend.service            # Systemd service unit for AWS EC2 Linux
```

---

## ⚙️ Easy Single-File Customization

All company details, contact information, service offerings, technology lists, and demonstration projects are managed in:

📂 **[`src/config/siteConfig.ts`](file:///d:/Company/src/config/siteConfig.ts)**

To update company name, phone, WhatsApp link, or email:
```typescript
export const siteConfig: SiteConfig = {
  company: {
    name: "YourTech Solutions",
    legalName: "YourTech Solutions — Cloud & DevOps Services",
    tagline: "Cloud & DevOps Services",
    phone: "+919746403622",
    phoneFormatted: "+91 97464 03622",
    whatsappUrl: "https://wa.me/919746403622",
    email: "contact@yourtechsolutions.com",
    ...
  }
};
```

---

## 💻 Local Development & Testing

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Both Frontend and Backend Concurrently
```bash
npm run dev
```
- **Frontend SPA**: `http://localhost:3000`
- **Backend API**: `http://localhost:5000`
- **Health Check**: `http://localhost:5000/api/health`

### 3. Run Automated Tests
```bash
npm test
```

### 4. Build for Production
```bash
npm run build
```
This compiles both the Frontend bundle into `dist/` and the Backend TypeScript into `server/dist/`.

---

## 🌐 AWS EC2 Linux Deployment Guide

### Step 1: Launch EC2 & Configure Security Group
1. Launch an Ubuntu 22.04 / 24.04 LTS instance (`t3.small` recommended).
2. Allow inbound rules in your **AWS Security Group**:
   - **Port 22 (SSH)** — Your IP
   - **Port 80 (HTTP)** — `0.0.0.0/0`
   - **Port 443 (HTTPS)** — `0.0.0.0/0`

### Step 2: Transfer Files and Run Automated Deployment Script
```bash
# Connect to your EC2 instance
ssh -i your-key.pem ubuntu@<EC2-PUBLIC-IP>

# Clone repository or copy files into /var/www/yourtechsolutions
cd /var/www/yourtechsolutions

# Execute the automated deployment script
bash deploy.sh
```

### Step 3: Configure Domain DNS
- **A Record**: Point `@` (or `yourdomain.com`) to your EC2 Public Elastic IP.
- **CNAME Record**: Point `www` to `yourdomain.com`.

### Step 4: Enable Free SSL / HTTPS with Let's Encrypt (Certbot)
```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## 📋 Pre-Go-Live Configuration Checklist

Before launching to production, update these values in your `.env` and `src/config/siteConfig.ts`:
- [ ] **Official Email**: Set `siteConfig.company.email` in `src/config/siteConfig.ts` and `NOTIFICATION_TO` in `.env`.
- [ ] **WhatsApp Number**: Verify `whatsappNumber` and `whatsappUrl` in `src/config/siteConfig.ts`.
- [ ] **PostgreSQL Database**: Set `DATABASE_URL` in `.env` if using managed RDS or local PostgreSQL.
- [ ] **SMTP Credentials**: Configure `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASS` in `.env` for email alerts.
- [ ] **Admin Secret Key**: Set a secure `ADMIN_API_KEY` in `.env`.
- [ ] **Domain Name**: Update `server_name` in `nginx.conf` and run `sudo certbot --nginx`.

---

## 📞 Support & Contacts

- **Company**: YourTech Solutions — Cloud & DevOps Services
- **Phone**: [+91 97464 03622](tel:+919746403622)
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/919746403622)
- **Email**: contact@yourtechsolutions.com
