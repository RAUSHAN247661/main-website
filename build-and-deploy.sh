#!/bin/bash

echo "🚀 Starting build and deploy process..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build output directory: dist/"
    echo "🌐 Ready for deployment to Vercel!"
    
    # List build contents
    echo "📋 Build contents:"
    ls -la dist/
else
    echo "❌ Build failed!"
    exit 1
fi
