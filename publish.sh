#!/bin/bash
# Usage:
#
#   ./publish
#
PUBLISH_URL=https://mymavenrepo.com/repo/QMKt2VOnUw3lmDFcg9oN
PACKAGE_NAME=eslint-config-demo

set -e

# Run script from the directory it's located in, not the pwd
cd "$(dirname "${BASH_SOURCE[0]}")"

VERSION=$(jq -r .version package.json)
pnpm install --frozen-lockfile
pnpm pack

mvn deploy:deploy-file \
    -Durl=$PUBLISH_URL \
    -DrepositoryId=npm \
    -DgroupId=js \
    -DartifactId=sensortower.$PACKAGE_NAME \
    -Dversion=$VERSION  \
    -Dpackaging=tgz \
    -Dfile=sensortower-$PACKAGE_NAME-$VERSION.tgz

rm *.tgz
