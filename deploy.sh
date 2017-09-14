#!/bin/bash
PATH=$PATH:$(npm bin)
set -x

# Production build for gh-pages

./node_modules/.bin/ng build --base-href "https://narainsagar.github.io/ngpakistan-medium-demo/"

# Deploy: Publish the /dist folder using angular-cli-ghpages

./node_modules/.bin/angular-cli-ghpages