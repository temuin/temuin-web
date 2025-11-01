#!/bin/bash

# 🚀 Azure Service Principal Setup Script for GitHub Actions
# This script creates the necessary Azure credentials for GitHub Actions deployment

echo "🔧 Setting up Azure Service Principal for GitHub Actions..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if Azure CLI is installed
if ! command -v az &> /dev/null; then
    echo -e "${RED}❌ Azure CLI is not installed. Please install it first.${NC}"
    echo "Install from: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
    exit 1
fi

# Check if user is logged in
if ! az account show &> /dev/null; then
    echo -e "${YELLOW}🔐 Please log in to Azure CLI first...${NC}"
    az login
fi

# Get current subscription
SUBSCRIPTION_ID=$(az account show --query id --output tsv)
SUBSCRIPTION_NAME=$(az account show --query name --output tsv)

echo -e "${BLUE}📋 Current subscription:${NC}"
echo -e "   ID: ${SUBSCRIPTION_ID}"
echo -e "   Name: ${SUBSCRIPTION_NAME}"

# Get resource group
echo -e "\n${BLUE}🏗️ Finding your resource group...${NC}"
RESOURCE_GROUPS=$(az group list --query "[].name" --output tsv)

if [ -z "$RESOURCE_GROUPS" ]; then
    echo -e "${RED}❌ No resource groups found in subscription${NC}"
    exit 1
fi

echo -e "${BLUE}Available resource groups:${NC}"
echo "$RESOURCE_GROUPS" | nl -v1

echo -e "\n${YELLOW}Please enter the resource group name (or press Enter for 'rg-temuin'):${NC}"
read -r RESOURCE_GROUP
RESOURCE_GROUP=${RESOURCE_GROUP:-"rg-temuin"}

# Verify resource group exists
if ! az group show --name "$RESOURCE_GROUP" &> /dev/null; then
    echo -e "${RED}❌ Resource group '$RESOURCE_GROUP' not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Using resource group: $RESOURCE_GROUP${NC}"

# Get App Service name
echo -e "\n${BLUE}🌐 Finding your App Service...${NC}"
APP_SERVICES=$(az webapp list --resource-group "$RESOURCE_GROUP" --query "[].name" --output tsv)

if [ -z "$APP_SERVICES" ]; then
    echo -e "${RED}❌ No App Services found in resource group '$RESOURCE_GROUP'${NC}"
    exit 1
fi

echo -e "${BLUE}Available App Services:${NC}"
echo "$APP_SERVICES" | nl -v1

if [ $(echo "$APP_SERVICES" | wc -l) -eq 1 ]; then
    APP_NAME=$(echo "$APP_SERVICES" | head -1)
    echo -e "${GREEN}✅ Auto-selected App Service: $APP_NAME${NC}"
else
    echo -e "\n${YELLOW}Please enter the App Service name:${NC}"
    read -r APP_NAME
fi

# Verify App Service exists
if ! az webapp show --name "$APP_NAME" --resource-group "$RESOURCE_GROUP" &> /dev/null; then
    echo -e "${RED}❌ App Service '$APP_NAME' not found${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Using App Service: $APP_NAME${NC}"

# Create service principal
echo -e "\n${BLUE}🔐 Creating service principal for GitHub Actions...${NC}"

SP_NAME="github-actions-temuin-$(date +%s)"
SCOPE="/subscriptions/$SUBSCRIPTION_ID/resourceGroups/$RESOURCE_GROUP"

echo -e "${YELLOW}Creating service principal with name: $SP_NAME${NC}"
echo -e "${YELLOW}Scope: $SCOPE${NC}"

CREDENTIALS=$(az ad sp create-for-rbac \
    --name "$SP_NAME" \
    --role "Contributor" \
    --scopes "$SCOPE" \
    --sdk-auth)

if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}🎉 Service principal created successfully!${NC}"
else
    echo -e "\n${RED}❌ Failed to create service principal${NC}"
    exit 1
fi

# Display results
echo -e "\n${BLUE}📝 GitHub Secrets Configuration${NC}"
echo -e "${BLUE}==================================${NC}"
echo ""
echo -e "${YELLOW}Add these secrets to your GitHub repository:${NC}"
echo -e "${YELLOW}Settings → Secrets and Variables → Actions → New repository secret${NC}"
echo ""

echo -e "${GREEN}Secret Name: AZURE_CREDENTIALS${NC}"
echo -e "${GREEN}Secret Value:${NC}"
echo "$CREDENTIALS"
echo ""

echo -e "${GREEN}Secret Name: AZURE_WEBAPP_NAME${NC}"
echo -e "${GREEN}Secret Value: $APP_NAME${NC}"
echo ""

echo -e "${GREEN}Secret Name: AZURE_SUBSCRIPTION_ID${NC}"
echo -e "${GREEN}Secret Value: $SUBSCRIPTION_ID${NC}"
echo ""

echo -e "${GREEN}Secret Name: AZURE_LOCATION${NC}"
echo -e "${GREEN}Secret Value: $(az group show --name "$RESOURCE_GROUP" --query location --output tsv)${NC}"
echo ""

# Save to file
SECRETS_FILE="github-secrets.txt"
cat > "$SECRETS_FILE" << EOF
GitHub Secrets Configuration for Temuin Portfolio
================================================

Add these secrets to your GitHub repository:
Settings → Secrets and Variables → Actions → New repository secret

AZURE_CREDENTIALS:
$CREDENTIALS

AZURE_WEBAPP_NAME:
$APP_NAME

AZURE_SUBSCRIPTION_ID:
$SUBSCRIPTION_ID

AZURE_LOCATION:
$(az group show --name "$RESOURCE_GROUP" --query location --output tsv)

Service Principal Details:
- Name: $SP_NAME
- Resource Group: $RESOURCE_GROUP
- Scope: $SCOPE
- Created: $(date)
EOF

echo -e "${BLUE}💾 Secrets saved to: $SECRETS_FILE${NC}"
echo ""
echo -e "${YELLOW}⚠️  Keep these credentials secure and don't commit them to your repository!${NC}"
echo ""
echo -e "${GREEN}🚀 Next steps:${NC}"
echo -e "   1. Add the secrets to your GitHub repository"
echo -e "   2. Commit and push your workflow files"
echo -e "   3. Watch your portfolio deploy automatically!"
echo ""
echo -e "${BLUE}🌐 Your App Service URL: https://$APP_NAME.azurewebsites.net${NC}"