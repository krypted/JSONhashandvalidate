#!/bin/bash
echo "Installing node packages"
npm install

echo "Starting server"
node hasher/app.js