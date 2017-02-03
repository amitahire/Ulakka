#!/bin/bash

tiddlywiki --build &&
cd blog &&
git add . &&
git commit -m "update" &&
git push
