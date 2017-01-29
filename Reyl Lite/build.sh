#!/bin/bash

tiddlywiki --build &&
cd output &&
git add . &&
git commit -m "update" &&
git push
