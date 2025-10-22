#!/bin/bash

# Generate NX dependency graph in dist directory

# Create output directory
mkdir -p dist/graphs

cd dist/graphs

# Generate the graph (files will be created in current directory)
../../node_modules/.bin/nx graph --file=dep-graph.html

cd ../..

echo "✅ Graph generated in dist/graphs/"
echo "📁 Files created:"
ls -la dist/graphs/
