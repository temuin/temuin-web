#!/bin/bash
# Quick preview script for testing the updated portfolio

echo "🚀 Starting local preview of TEMUIN Portfolio..."
echo "📍 Make sure you're in the temuin-website directory"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this from the temuin-website directory."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🏗️  Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎯 Portfolio Updates Applied:"
    echo "   • Vault9 project now links to: https://vault9.base44.app"
    echo "   • Clickable cards for deployed projects"
    echo "   • Status badges (Live/In Development)"
    echo "   • Visual indicators on hover"
    echo ""
    echo "💡 You can now:"
    echo "   1. Test locally: npm start"
    echo "   2. Deploy: git add . && git commit -m 'Update portfolio with Vault9 link' && git push"
    echo ""
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi