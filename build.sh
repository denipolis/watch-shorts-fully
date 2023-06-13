#!/bin/bash

echo Installing and updating dependencies...

echo Copying files...
rm -rf ./dist/ > /dev/null
mkdir -p dist
rsync -av --progress ./src/* ./dist --exclude dist --exclude README.md

echo Minifying code...
for file in "./dist/scripts/*"
do
  echo $file.
  uglifyjs $file --compress --mangle --toplevel -o $file
done

echo Compressing to zip...
zip build.zip -r dist/

echo -e "\e[1;32mCompleted! Output file: build.zip. \e[0m"