/**
 * ====================================================================================
 * CENTRAL COMPANY CONFIGURATION FILE — YourTech Solutions
 * ====================================================================================
 * Update your company name, contact numbers, email, services, and branding here.
 * All changes in this single file instantly update across the entire application.
 */

export interface ServiceItem {
  id: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'container' | 'cloud' | 'security';
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  keyFeatures: string[];
  deliverables: string[];
  technologies: string[];
  benefits: string[];
}

export interface TechnologyItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'container' | 'cloud' | 'security';
  icon: string;
  description: string;
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  clientType: string;
  isDemo: boolean;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  tags: string[];
}

export interface SiteConfig {
  company: {
    name: string;
    legalName: string;
    tagline: string;
    subTagline: string;
    heroHeadline: string;
    heroSubheadline: string;
    phone: string;
    phoneFormatted: string;
    whatsappNumber: string;
    whatsappFormatted: string;
    whatsappUrl: string;
    email: string;
    supportEmail: string;
    address: string;
    cityState: string;
    country: string;
    operatingHours: string;
    availability: string;
  };
  navigation: {
    label: string;
    href: string;
  }[];
  capabilities: {
    title: string;
    description: string;
    icon: string;
  }[];
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
  services: ServiceItem[];
  technologies: TechnologyItem[];
  projects: ProjectItem[];
  whyChooseUs: {
    icon: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  testimonials: {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
  }[];
}

export const siteConfig: SiteConfig = {
  company: {
    name: "YourTech Solutions",
    legalName: "YourTech Solutions — Cloud & DevOps Services",
    tagline: "Cloud & DevOps Services",
    subTagline: "Full-Stack Web, Backend, Database, Cloud & DevOps Infrastructure Specialists",
    heroHeadline: "Build. Develop. Deploy. Secure. Scale.",
    heroSubheadline: "We deliver end-to-end IT solutions, from modern web and application development to automated deployments, cloud infrastructure, databases, and enterprise IT security.",
    phone: "+919746403622",
    phoneFormatted: "+91 97464 03622",
    whatsappNumber: "919746403622",
    whatsappFormatted: "+91 97464 03622",
    whatsappUrl: "https://wa.me/919746403622",
    email: "contact@yourtechsolutions.com", // Configurable placeholder until official email is provided
    supportEmail: "support@yourtechsolutions.com",
    address: "Global IT Services & Cloud Support Center",
    cityState: "Kochi, Kerala",
    country: "India",
    operatingHours: "Monday - Saturday: 8:00 AM - 9:00 PM IST",
    availability: "24/7 Production Server Incident Support & Monitoring",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Technologies", href: "#technologies" },
    { label: "Projects", href: "#projects" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Estimate", href: "#calculator" },
    { label: "Contact Us", href: "#contact" },
  ],

  capabilities: [
    {
      title: "Frontend & Backend Development",
      description: "Modern web applications, responsive portals, microservices, and secure RESTful API architectures.",
      icon: "Code2"
    },
    {
      title: "DevOps & Cloud Engineering",
      description: "Automated CI/CD pipelines, GitOps, Kubernetes orchestration, and multi-cloud infrastructure on AWS, Azure, and OCI.",
      icon: "GitBranch"
    },
    {
      title: "Database Solutions",
      description: "Relational and NoSQL database management, replication, backup automation, schema design, and query optimization.",
      icon: "Database"
    },
    {
      title: "Infrastructure & Security",
      description: "Fortinet firewalls, site-to-site VPNs, Linux & Windows Server administration, OS hardening, and 24/7 proactive monitoring.",
      icon: "ShieldCheck"
    }
  ],

  stats: [
    { value: "99.99%", label: "Target Infrastructure SLA", description: "Zero-downtime blue/green deployment models" },
    { value: "7 Core", label: "Engineering Disciplines", description: "Frontend, Backend, DB, DevOps, K8s, Cloud & Security" },
    { value: "15 Mins", label: "Emergency Response Window", description: "Dedicated line for critical production outages" },
    { value: "100%", label: "Declarative Code (IaC)", description: "Terraform, Ansible, and Dockerized standards" },
  ],

  services: [
    {
      id: "frontend-development",
      category: "frontend",
      title: "Frontend Development",
      shortDesc: "Responsive web apps, interactive dashboards, customer portals, and optimized digital experiences.",
      fullDesc: "We engineer pixel-perfect, accessible, and high-performance user interfaces using modern JavaScript/TypeScript ecosystems. From modern single-page applications and server-rendered portals to real-time administrative dashboards and REST API client integrations.",
      iconName: "Layout",
      badge: "Modern UI/UX",
      keyFeatures: [
        "HTML5, CSS3, modern JavaScript (ESNext), and TypeScript",
        "React.js, Next.js, Angular, and Vue.js web applications",
        "Responsive, mobile-first design across desktop, tablet, and mobile",
        "UI implementation, design system development, and component libraries",
        "Seamless RESTful and GraphQL API integration",
        "Core Web Vitals performance tuning, lazy loading, and accessibility (WCAG) compliance"
      ],
      deliverables: [
        "Production-ready modular frontend code repository",
        "Fast-loading, SEO-structured web application bundle",
        "Interactive forms, data tables, and charting dashboards",
        "Cross-browser testing report and mobile responsiveness verification"
      ],
      technologies: ["React.js", "Next.js", "Angular", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      benefits: [
        "Engaging, high-converting digital storefronts and web portals",
        "Fast page load times improving visitor retention and search rankings",
        "Clean, maintainable component hierarchy ready for rapid scaling"
      ]
    },
    {
      id: "backend-development",
      category: "backend",
      title: "Backend Development",
      shortDesc: "Scalable REST APIs, secure microservices, background job queues, and robust business logic.",
      fullDesc: "We architect reliable and secure server-side applications across multiple languages and frameworks. Whether you need Python FastAPI microservices, Node.js event-driven backends, Java Spring Boot enterprise systems, PHP/Laravel platforms, Go high-concurrency workers, or ASP.NET Core services.",
      iconName: "Server",
      badge: "Multi-Language",
      keyFeatures: [
        "Languages: Java, Python, JavaScript/Node.js, PHP, C# / .NET, and Go",
        "Frameworks: Spring Boot, Django, Flask, FastAPI, Express.js, NestJS, Laravel, and ASP.NET Core",
        "REST API and GraphQL service design, validation, and documentation (Swagger/OpenAPI)",
        "Authentication & Authorization (JWT, OAuth2, Role-Based Access Control)",
        "Background job processing, asynchronous message queues, and scheduled cron tasks",
        "Structured application logging, request tracing, and error telemetry"
      ],
      deliverables: [
        "Modular, typed backend service repositories with clean separation of concerns",
        "Interactive Swagger / OpenAPI documentation",
        "Secure environment configuration with zero hardcoded credentials",
        "Unit and integration test suites for core business endpoints"
      ],
      technologies: ["Node.js", "Python", "Java", "Go", "PHP", "C#", "Spring Boot", "FastAPI", "Express.js", "NestJS", "Laravel", "ASP.NET Core"],
      benefits: [
        "Reliable backend architecture able to handle fluctuating user loads",
        "Strict input validation and sanitization guarding against injection attacks",
        "Extensible API structure enabling effortless third-party integrations"
      ]
    },
    {
      id: "database-services",
      category: "database",
      title: "Database Services",
      shortDesc: "Relational & NoSQL database installation, schema design, high-availability, replication, and tuning.",
      fullDesc: "Ensure absolute data integrity, sub-second query response times, and bulletproof backup routines. We provide complete administration for Microsoft SQL Server, MySQL, PostgreSQL, Oracle Database, MariaDB, and NoSQL engines like MongoDB, Redis, and Elasticsearch.",
      iconName: "Database",
      badge: "Relational & NoSQL",
      keyFeatures: [
        "Relational databases: Microsoft SQL Server, MySQL, PostgreSQL, Oracle Database, and MariaDB",
        "NoSQL & caching: MongoDB, Redis, and Elasticsearch",
        "Database installation, clustering, connection pooling, and configuration",
        "Schema design, normalization, index restructuring, and slow query optimization",
        "Automated backup schedules, point-in-time recovery, and cross-server migration",
        "High availability, master-slave replication, failover routines, and access control auditing"
      ],
      deliverables: [
        "Production-hardened database server setup with SSL encryption",
        "Automated daily/weekly backup scripts with cloud sync runbooks",
        "Query execution plan optimization and index tuning report",
        "Disaster recovery and automated failover validation guide"
      ],
      technologies: ["PostgreSQL", "SQL Server", "MySQL", "Oracle DB", "MongoDB", "Redis", "Elasticsearch", "MariaDB"],
      benefits: [
        "Zero data loss with battle-tested backup verification routines",
        "Lightning-fast query execution preventing application bottlenecks",
        "Granular security controls with principle of least privilege"
      ]
    },
    {
      id: "devops-cicd",
      category: "devops",
      title: "DevOps & CI/CD Services",
      shortDesc: "Automated continuous integration, zero-downtime deployment pipelines, and code quality gates.",
      fullDesc: "Eliminate manual release friction and human deployment errors. We design end-to-end CI/CD delivery pipelines using Jenkins, GitHub Actions, GitLab CI/CD, and Azure DevOps, paired with automated artifact repositories and security scanning.",
      iconName: "GitBranch",
      badge: "Automation",
      keyFeatures: [
        "Pipeline platforms: Jenkins, GitHub Actions, GitLab CI/CD, and Azure DevOps",
        "Version control: Git and GitHub repository branching strategies",
        "Build & artifact tools: Maven, Gradle, and Nexus Repository",
        "Quality & vulnerability gates: SonarQube static analysis and Trivy container scanning",
        "Monitoring & metrics: Prometheus and Grafana operational dashboards",
        "Zero-downtime deployment strategies (blue/green, canary, and rolling updates)"
      ],
      deliverables: [
        "Fully automated, version-controlled CI/CD pipeline scripts",
        "Automated build, test, scan, and deployment trigger workflows",
        "Security secrets management and environment isolation",
        "Automated rollback runbooks for deployment safety"
      ],
      technologies: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps", "SonarQube", "Trivy", "Prometheus", "Grafana", "Maven"],
      benefits: [
        "Cut deployment cycles from several hours down to minutes",
        "Catch bugs and security flaws automatically before production deployment",
        "Confidence to deploy multiple times a day with automated safety rollbacks"
      ]
    },
    {
      id: "docker-kubernetes",
      category: "container",
      title: "Docker, Kubernetes & Containers",
      shortDesc: "Containerization of frontend & backend apps, Docker Compose stacks, and Kubernetes cluster orchestration.",
      fullDesc: "Package applications for predictable, identical execution across all cloud and on-prem environments. We build optimized multi-stage Docker images, multi-container Docker Compose stacks, and production Kubernetes clusters using Helm, Argo CD, Rancher, and OpenShift/OKD.",
      iconName: "Box",
      badge: "Cloud Native",
      keyFeatures: [
        "Containerization: Docker, multi-stage Dockerfiles, and layer caching optimization",
        "Multi-container stacks: Docker Compose for local development and multi-tier production",
        "Orchestration: Kubernetes cluster deployment, pod scaling, and namespace isolation",
        "Deployment tooling: Helm package management and Argo CD GitOps workflows",
        "Cluster management: Rancher and OpenShift / OKD administration",
        "Ingress routing, TLS termination, health probes, and resource quota limits"
      ],
      deliverables: [
        "Minimal, security-scanned production Docker container images",
        "Docker Compose deployment scripts for multi-tier microservices",
        "Kubernetes deployment, service, ingress, and HPA autoscaling manifests",
        "Helm charts for repeatable multi-environment deployments"
      ],
      technologies: ["Docker", "Docker Compose", "Kubernetes", "Helm", "Argo CD", "Rancher", "OpenShift", "Containerd"],
      benefits: [
        "Identical runtimes eliminate 'works on my machine' issues permanently",
        "Auto-scale compute resources horizontally during traffic surges",
        "Rapid application recovery with automated pod health self-healing"
      ]
    },
    {
      id: "cloud-infrastructure",
      category: "cloud",
      title: "Cloud & Infrastructure",
      shortDesc: "Multi-cloud provisioning on AWS, Azure, OCI, Infrastructure as Code with Terraform, and web hosting.",
      fullDesc: "Design, deploy, and manage cost-efficient, high-availability cloud infrastructure. We leverage Terraform and Ansible for Infrastructure as Code (IaC) across AWS, Microsoft Azure, Oracle Cloud Infrastructure (OCI), and on-premises Linux and Windows servers.",
      iconName: "Cloud",
      badge: "Multi-Cloud IaC",
      keyFeatures: [
        "Cloud providers: Amazon Web Services (AWS), Microsoft Azure, Oracle Cloud (OCI), and on-prem",
        "AWS stack: EC2 compute, S3 object storage, IAM access, VPC networking, and CloudWatch alerts",
        "Azure stack: Virtual Machines, Azure DevOps pipelines, and Blob storage",
        "OCI stack: Compute instances, Virtual Cloud Networks (VCN), and OKE Kubernetes",
        "Infrastructure as Code: Terraform declarative provisioning and Ansible configuration management",
        "Web servers: Nginx reverse proxying, Apache HTTP Server, SSL certificates, and cost right-sizing"
      ],
      deliverables: [
        "Modular Terraform IaC repositories for reproducible cloud environments",
        "Ansible playbooks for automated server provisioning and baseline security",
        "Configured Nginx web servers with gzip compression and SSL hardening",
        "CloudWatch / Azure Monitor threshold alerts and cost optimization report"
      ],
      technologies: ["AWS", "Azure", "Oracle Cloud", "Terraform", "Ansible", "Linux", "Windows Server", "Nginx", "Apache"],
      benefits: [
        "Provision complete staging or production environments in minutes using IaC",
        "Cut monthly cloud bills by eliminating idle resources and right-sizing VMs",
        "Prevent vendor lock-in through modular, multi-cloud declarative code"
      ]
    },
    {
      id: "system-networking-security",
      category: "security",
      title: "System Administration, Networking & Security",
      shortDesc: "Linux/Windows server management, Fortinet firewalls, site-to-site VPNs, and infrastructure hardening.",
      fullDesc: "Comprehensive IT infrastructure management and cybersecurity hardening for growing businesses. We manage physical and virtual servers, configure Active Directory, DNS, and DHCP, deploy Fortinet FortiGate firewalls, establish secure VPN tunnels, and provide 24/7 monitoring.",
      iconName: "ShieldCheck",
      badge: "Security & Ops",
      keyFeatures: [
        "Operating systems: Linux (Ubuntu, CentOS, RHEL, Debian) and Windows Server administration",
        "Directory & network services: Active Directory, DNS, DHCP, and group policies",
        "Firewall engineering: Fortinet FortiGate installation, stateful inspection, and security policies",
        "Encrypted access: SSL-VPN and IPsec site-to-site VPN tunnel configuration",
        "Server hardening: SSH key-only access, port restriction, UFW/iptables, and endpoint protection",
        "Proactive maintenance: Disk usage alerts, memory thresholds, automated backup, and log analysis"
      ],
      deliverables: [
        "Standardized, hardened server operating system baseline",
        "Fortinet firewall policy configuration and secure remote VPN access runbook",
        "Automated system health monitoring agents with instant alert dispatch",
        "Backup verification checklist and disaster recovery procedures"
      ],
      technologies: ["Linux", "Windows Server", "Fortinet", "FortiGate", "IPsec VPN", "Active Directory", "DNS / DHCP", "UFW / iptables"],
      benefits: [
        "Shield internal corporate data and customer databases from cyber threats",
        "Empower remote workforces with secure, encrypted corporate VPN connections",
        "Prevent unplanned outages through early warning disk and memory alerts"
      ]
    }
  ],

  technologies: [
    // Frontend
    { name: "React.js", category: "frontend", icon: "react", description: "Component-based modern web applications & portals", featured: true },
    { name: "Next.js", category: "frontend", icon: "nextjs", description: "Server-side rendering, SSG & fullstack React applications", featured: true },
    { name: "Angular", category: "frontend", icon: "angular", description: "Enterprise-scale TypeScript frontend framework" },
    { name: "Vue.js", category: "frontend", icon: "vue", description: "Progressive, lightweight user interface framework" },
    { name: "TypeScript", category: "frontend", icon: "typescript", description: "Strictly typed JavaScript for scalable web development", featured: true },
    { name: "JavaScript", category: "frontend", icon: "javascript", description: "Modern ES6+ frontend scripting & interactive DOM logic" },
    { name: "HTML5 & CSS3", category: "frontend", icon: "html5", description: "Semantic markup, modern layout models & animations" },
    { name: "Tailwind CSS", category: "frontend", icon: "tailwind", description: "Utility-first modern responsive styling & design systems" },

    // Backend
    { name: "Node.js", category: "backend", icon: "nodejs", description: "Event-driven, high-concurrency JavaScript runtime", featured: true },
    { name: "Python", category: "backend", icon: "python", description: "FastAPI, Django & Flask backend APIs & microservices", featured: true },
    { name: "Java", category: "backend", icon: "java", description: "Spring Boot, enterprise microservices & JVM optimization", featured: true },
    { name: "Go", category: "backend", icon: "go", description: "Blazing fast compiled systems, workers & cloud services", featured: true },
    { name: "PHP", category: "backend", icon: "php", description: "Laravel web platforms, REST APIs & custom portal backends" },
    { name: "C# / .NET", category: "backend", icon: "csharp", description: "ASP.NET Core cross-platform enterprise backend services" },
    { name: "Express.js", category: "backend", icon: "express", description: "Minimalist, fast web framework for Node.js APIs" },
    { name: "FastAPI", category: "backend", icon: "fastapi", description: "High-performance asynchronous Python API framework" },

    // Databases
    { name: "PostgreSQL", category: "database", icon: "postgresql", description: "Advanced open-source relational database with JSON support", featured: true },
    { name: "Microsoft SQL Server", category: "database", icon: "sqlserver", description: "MSSQL installation, clustering, backup, and index tuning", featured: true },
    { name: "MySQL", category: "database", icon: "mysql", description: "High-speed relational database management & replication", featured: true },
    { name: "Oracle Database", category: "database", icon: "oracle", description: "Enterprise database architecture, PL/SQL & clustering" },
    { name: "MongoDB", category: "database", icon: "mongodb", description: "Document-oriented NoSQL database for flexible schemas", featured: true },
    { name: "Redis", category: "database", icon: "redis", description: "In-memory data store for caching, queues & session storage", featured: true },
    { name: "Elasticsearch", category: "database", icon: "elasticsearch", description: "Distributed search engine & log analytics" },

    // DevOps
    { name: "Jenkins", category: "devops", icon: "jenkins", description: "Automated CI/CD build & deployment pipelines", featured: true },
    { name: "GitHub Actions", category: "devops", icon: "github", description: "Native cloud workflows for automated testing & deployment", featured: true },
    { name: "GitLab CI/CD", category: "devops", icon: "gitlab", description: "Integrated DevOps lifecycle & container pipelines", featured: true },
    { name: "Azure DevOps", category: "devops", icon: "azure", description: "Azure Repos, Pipelines & cloud release management" },
    { name: "Terraform", category: "devops", icon: "terraform", description: "Declarative Infrastructure as Code for multi-cloud setups", featured: true },
    { name: "Ansible", category: "devops", icon: "ansible", description: "Agentless configuration management & automated provisioning", featured: true },
    { name: "SonarQube", category: "devops", icon: "sonarqube", description: "Continuous code quality & static security inspection" },
    { name: "Prometheus & Grafana", category: "devops", icon: "prometheus", description: "Metrics collection, monitoring & operational dashboards", featured: true },

    // Containers
    { name: "Docker", category: "container", icon: "docker", description: "Multi-stage container builds & image optimization", featured: true },
    { name: "Docker Compose", category: "container", icon: "docker", description: "Multi-container application orchestration & environment stacks", featured: true },
    { name: "Kubernetes", category: "container", icon: "kubernetes", description: "Container orchestration, rolling updates & autoscaling", featured: true },
    { name: "Helm", category: "container", icon: "helm", description: "Kubernetes package manager for reproducible releases" },
    { name: "Argo CD", category: "container", icon: "argocd", description: "Declarative GitOps continuous delivery for Kubernetes" },
    { name: "Rancher & OpenShift", category: "container", icon: "rancher", description: "Enterprise Kubernetes management & cluster governance" },

    // Cloud
    { name: "Amazon Web Services (AWS)", category: "cloud", icon: "aws", description: "EC2, S3, RDS, VPC, IAM, CloudWatch & ECR architectures", featured: true },
    { name: "Microsoft Azure", category: "cloud", icon: "azure", description: "Virtual Machines, Azure SQL, Blob Storage & App Services", featured: true },
    { name: "Oracle Cloud (OCI)", category: "cloud", icon: "oracle", description: "Compute instances, VCN networking & Oracle Kubernetes" },
    { name: "Nginx & Apache", category: "cloud", icon: "nginx", description: "High-concurrency reverse proxy, load balancer & web server", featured: true },

    // Systems & Security
    { name: "Linux Administration", category: "security", icon: "linux", description: "Ubuntu, CentOS, RHEL, Debian server provisioning & hardening", featured: true },
    { name: "Windows Server", category: "security", icon: "windows", description: "Active Directory, DNS, DHCP & PowerShell automation" },
    { name: "Fortinet FortiGate", category: "security", icon: "fortinet", description: "Next-generation firewalls, UTM policies & security rules", featured: true },
    { name: "SSL & IPsec VPNs", category: "security", icon: "vpn", description: "Encrypted remote access & site-to-site network tunnels", featured: true }
  ],

  projects: [
    {
      id: "demo-react-node",
      title: "Full-Stack Portal: React Frontend with Node.js REST API",
      category: "Frontend & Backend Development",
      clientType: "Demonstration Architecture",
      isDemo: true,
      challenge: "Example requirement: Building a responsive dashboard with role-based access control, token authentication, and data visualization.",
      solution: "Engineered a React + TypeScript frontend with Tailwind CSS, backed by an Express.js REST API with Zod validation, JWT authentication, and structured logging.",
      outcome: "Modular full-stack template achieving sub-second API responses and 100% responsive layouts across all devices.",
      metrics: [
        { label: "Architecture", value: "REST API" },
        { label: "Frontend", value: "React + TS" },
        { label: "Backend", value: "Node.js" }
      ],
      tags: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "REST API"]
    },
    {
      id: "demo-python-postgres",
      title: "High-Throughput Python FastAPI with PostgreSQL",
      category: "Backend & Database",
      clientType: "Demonstration Architecture",
      isDemo: true,
      challenge: "Example requirement: Asynchronous microservice handling high-concurrency ingestion and structured relational queries.",
      solution: "Implemented an asynchronous Python FastAPI service with connection pooling to PostgreSQL, Alembic migrations, and Redis caching.",
      outcome: "Demonstrated resilient data layer capable of handling 5,000+ requests/sec with query response times under 15ms.",
      metrics: [
        { label: "Framework", value: "FastAPI" },
        { label: "Database", value: "PostgreSQL" },
        { label: "Cache", value: "Redis" }
      ],
      tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "AsyncIO"]
    },
    {
      id: "demo-java-deployment",
      title: "Java Spring Boot Deployment & JVM Optimization",
      category: "Java & Server Management",
      clientType: "Demonstration Architecture",
      isDemo: true,
      challenge: "Example requirement: Deploying enterprise Spring Boot JAR/WAR artifacts with Nginx reverse proxying and memory tuning.",
      solution: "Configured systemd automated service units, tuned G1GC garbage collection heap parameters, and set up Nginx SSL termination with health monitoring.",
      outcome: "Stable application uptime with automated zero-touch crash recovery and 40% reduced memory footprint.",
      metrics: [
        { label: "Runtime", value: "Java 21" },
        { label: "Web Server", value: "Nginx" },
        { label: "Restart", value: "Systemd" }
      ],
      tags: ["Java", "Spring Boot", "Tomcat", "Nginx", "Linux", "JVM Tuning"]
    },
    {
      id: "demo-jenkins-pipeline",
      title: "Automated Jenkins CI/CD Pipeline with Docker & SonarQube",
      category: "DevOps & CI/CD",
      clientType: "Demonstration Architecture",
      isDemo: true,
      challenge: "Example requirement: Replacing manual server FTP/SSH deployments with fully automated build, test, and container push pipelines.",
      solution: "Constructed a multi-stage Jenkinsfile pipeline integrating Git webhooks, Maven builds, SonarQube code analysis, and Trivy CVE scanning.",
      outcome: "Automated release pipeline completing full build, test, and cloud deployment in under 6 minutes.",
      metrics: [
        { label: "Automation", value: "Jenkinsfile" },
        { label: "Quality Gate", value: "SonarQube" },
        { label: "Deploy Time", value: "< 6 Mins" }
      ],
      tags: ["Jenkins", "Docker", "SonarQube", "Git", "Trivy", "Maven"]
    },
    {
      id: "demo-k8s-cluster",
      title: "Kubernetes Multi-Service Deployment with Helm & Ingress",
      category: "Containers & Orchestration",
      clientType: "Demonstration Architecture",
      isDemo: true,
      challenge: "Example requirement: Orchestrating microservices with automated pod auto-scaling and zero-downtime rolling updates.",
      solution: "Packaged multi-tier applications with Helm charts, configured Nginx Ingress with cert-manager SSL, and set up Horizontal Pod Autoscalers (HPA).",
      outcome: "Self-healing container cluster capable of dynamic traffic scaling with zero downtime during rolling releases.",
      metrics: [
        { label: "Orchestrator", value: "Kubernetes" },
        { label: "Package Tool", value: "Helm" },
        { label: "Rollout", value: "Zero Downtime" }
      ],
      tags: ["Kubernetes", "Docker", "Helm", "Nginx Ingress", "HPA", "Cloud Native"]
    },
    {
      id: "demo-terraform-cloud",
      title: "Multi-Cloud Infrastructure as Code with Terraform & AWS",
      category: "Cloud & Infrastructure",
      clientType: "Demonstration Architecture",
      isDemo: true,
      challenge: "Example requirement: Reproducible cloud provisioning of VPCs, subnets, EC2 instances, and security groups without manual AWS console clicks.",
      solution: "Codified cloud architecture using modular Terraform scripts with remote state locking in S3/DynamoDB, paired with Ansible provisioning.",
      outcome: "Entire production cloud infrastructure ready for automated deployment or teardown in under 10 minutes.",
      metrics: [
        { label: "IaC Engine", value: "Terraform" },
        { label: "Cloud", value: "AWS" },
        { label: "Config Mgmt", value: "Ansible" }
      ],
      tags: ["Terraform", "AWS", "Ansible", "VPC", "EC2", "S3"]
    },
    {
      id: "demo-sql-backup",
      title: "Microsoft SQL Server High-Availability & Disaster Recovery",
      category: "Database Services",
      clientType: "Demonstration Architecture",
      isDemo: true,
      challenge: "Example requirement: Automated SQL backup schedules with point-in-time recovery and cloud storage synchronization.",
      solution: "Configured automated PowerShell backup scripts with AES-256 encryption, transactional log shipping, and automated restore verification tests.",
      outcome: "Guaranteed 15-minute Recovery Point Objective (RPO) and verified disaster recovery runbooks.",
      metrics: [
        { label: "Engine", value: "SQL Server" },
        { label: "Backup Mode", value: "Automated" },
        { label: "Encryption", value: "AES-256" }
      ],
      tags: ["SQL Server", "T-SQL", "PowerShell", "Backup", "Windows Server"]
    },
    {
      id: "demo-fortinet-vpn",
      title: "Fortinet FortiGate Firewall & Site-to-Site IPsec VPN",
      category: "Networking & Security",
      clientType: "Demonstration Architecture",
      isDemo: true,
      challenge: "Example requirement: Securing corporate infrastructure, closing vulnerable open ports, and providing encrypted remote access for staff.",
      solution: "Configured Fortinet FortiGate security policies with strict traffic inspection, deployed SSL-VPN with multi-factor authentication, and hardened server OS firewalls.",
      outcome: "Complete isolation of sensitive server subnets with 100% encrypted remote access tunnels.",
      metrics: [
        { label: "Firewall", value: "Fortinet" },
        { label: "Encryption", value: "256-Bit" },
        { label: "Tunnel", value: "IPsec / SSL" }
      ],
      tags: ["Fortinet", "FortiGate", "IPsec VPN", "SSL VPN", "Firewall", "Hardening"]
    }
  ],

  whyChooseUs: [
    {
      icon: "Code2",
      title: "Full-Stack Breadth & Depth",
      description: "From modern frontend web apps and backend microservices to cloud infrastructure and firewall defense — one cohesive engineering partner."
    },
    {
      icon: "ShieldAlert",
      title: "Security & Hardening by Default",
      description: "Every server, API endpoint, firewall, and database is provisioned with least-privilege security policies and vulnerability audits."
    },
    {
      icon: "Zap",
      title: "Zero-Downtime Deployment Standards",
      description: "Automated CI/CD pipelines, container orchestration, and blue/green release workflows that protect your business availability."
    },
    {
      icon: "Layers",
      title: "Multi-Cloud & Open Standards (IaC)",
      description: "Deep hands-on proficiency across AWS, Microsoft Azure, Oracle Cloud, and Linux/Windows environments with 100% codified Terraform & Ansible."
    },
    {
      icon: "Clock",
      title: "24/7 Rapid Incident Response",
      description: "Proactive server health alerts, automated disk/memory notifications, and dedicated emergency escalation for critical systems."
    },
    {
      icon: "CheckCircle",
      title: "Direct Senior Engineer Communication",
      description: "No middlemen or junior ticket queues. You interact directly with experienced full-stack, DevOps, and database engineers."
    }
  ],

  faqs: [
    {
      question: "What programming languages and frameworks do you support for application development?",
      answer: "We support a broad spectrum: On the frontend, we build with React.js, Next.js, Angular, Vue.js, TypeScript, and HTML5/Tailwind. On the backend, we work with Python (FastAPI/Django/Flask), Node.js (Express/NestJS), Java (Spring Boot), Go, PHP (Laravel), and C# (.NET Core)."
    },
    {
      question: "Can you set up an automated CI/CD pipeline for our existing repository?",
      answer: "Yes! We build automated CI/CD pipelines using Jenkins, GitHub Actions, GitLab CI/CD, or Azure DevOps. This includes automated unit testing, static code analysis (SonarQube), container security scanning (Trivy), and zero-downtime deployment to your cloud or on-prem servers."
    },
    {
      question: "How do you handle database maintenance, backups, and query optimization?",
      answer: "We manage Microsoft SQL Server, MySQL, PostgreSQL, Oracle Database, and NoSQL engines like MongoDB and Redis. We implement automated daily/weekly encrypted backups, verify point-in-time recovery, tune slow query indexes, and configure high-availability replication."
    },
    {
      question: "Do you configure Fortinet firewalls and secure VPN access for remote teams?",
      answer: "Absolutely. We configure Fortinet FortiGate enterprise firewalls, set up strict egress/ingress rules, implement SSL-VPN and IPsec tunnels, harden operating system ports, and eliminate external attack vectors."
    },
    {
      question: "How do we get started with a project or emergency server assistance?",
      answer: "You can submit an inquiry through our online form, use the interactive Scope Estimator, or call/WhatsApp us directly at +91 97464 03622. We review requirements promptly and schedule a technical consultation."
    }
  ],

  testimonials: [
    {
      name: "Pandyan",
      role: "CTO",
      company: "Apex Cloud Services",
      content: "YourTech Solutions transformed our deployment workflow. What used to be a stressful 4-hour manual release is now a 5-minute automated pipeline with zero downtime. Highly recommended!",
      rating: 5
    },
    {
      name: "Sobin Sabu",
      role: "SQL & MySQL",
      company: "Vanguard Tech Labs",
      content: "Their database tuning and query index restructuring saved us thousands on cloud compute. Our queries execute in sub-seconds, and their automated backup routines give us total peace of mind.",
      rating: 5
    },
    {
      name: "Pandyan",
      role: "Operations Director",
      company: "Logix Systems",
      content: "Setting up our Fortinet VPN and securing our Linux server infrastructure was done with clinical precision. Whenever we have a critical infrastructure question, their senior engineers respond within minutes.",
      rating: 5
    }
  ]
};
