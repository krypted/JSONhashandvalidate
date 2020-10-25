#!/bin/bash
echo "Installing node packages"
npm install

echo "Creating zip file"
cp hasher/index.js index.js
zip hasher.zip -r index.js node_modules
rm ./index.js

echo "Uploading function to lambda: ${1}"
aws lambda update-function-code --function-name $1 --zip-file fileb://hasher.zip
rm hasher.zip