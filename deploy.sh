#!/bin/bash

# Find a free port starting from 5173
port=5173
while lsof -i:$port >/dev/null; do
  ((port++))
done

# Build the Docker image
docker build -t unicorn-commander .

# Run the Docker container
docker run -d -p $port:5173 unicorn-commander

echo "Unicorn Commander Dashboard is running on port $port"
