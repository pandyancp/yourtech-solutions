#!/bin/bash
# ==============================================================================
# Automated Full-Stack Deployment Script for AWS EC2 Linux (Ubuntu / Debian)
# Run on your EC2 instance: bash deploy.sh
# ==============================================================================

set -e

echo "🚀 [1/6] Updating system packages & installing prerequisites..."
sudo apt update -y
sudo apt install -y nginx curl git ufw postgresql postgresql-contrib

# Install Node.js LTS (v20) if missing
if ! command -v node &> /dev/null; then
    echo "📦 Installing Node.js LTS (v20)..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
fi

echo "📦 Node.js version: $(node -v)"
echo "📦 npm version: $(npm -v)"

# Application directory
APP_DIR="/var/www/yourtechsolutions"
echo "📂 [2/6] Preparing application directory at $APP_DIR..."
sudo mkdir -p $APP_DIR
sudo chown -R ubuntu:ubuntu $APP_DIR

# Install dependencies and build both Frontend and Backend
echo "🔨 [3/6] Installing dependencies and building production assets..."
npm install
npm run build

# Copy build files to destination
sudo cp -r dist/ $APP_DIR/
sudo cp -r server/ $APP_DIR/
sudo cp package*.json $APP_DIR/

# Prepare .env if not exists
if [ ! -f "$APP_DIR/.env" ]; then
    echo "⚙️ Creating production .env from template..."
    cp .env.example $APP_DIR/.env
fi

# Configure Systemd Service for Backend
echo "⚙️ [4/6] Configuring Backend Systemd daemon..."
sudo cp yourtech-backend.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable yourtech-backend
sudo systemctl restart yourtech-backend

# Configure Nginx Reverse Proxy
echo "⚙️ [5/6] Configuring Nginx web server & reverse proxy..."
sudo cp nginx.conf /etc/nginx/sites-available/yourtechsolutions
sudo ln -sf /etc/nginx/sites-available/yourtechsolutions /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx

# Configure Firewall (UFW)
echo "🛡️ [6/6] Configuring firewall rules (SSH, HTTP, HTTPS)..."
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

echo "=============================================================================="
echo "✅ FULL-STACK DEPLOYMENT COMPLETED SUCCESSFULLY!"
echo "🌐 Frontend: Serving static SPA files from $APP_DIR/dist"
echo "⚡ Backend: Running on http://127.0.0.1:5000 (proxied via /api/)"
echo "🔒 To enable Free HTTPS with Let's Encrypt (Certbot), run:"
echo "   sudo apt install -y certbot python3-certbot-nginx"
echo "   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com"
echo "=============================================================================="
