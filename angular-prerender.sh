#!/bin/bash

node_modules/.bin/angular-prerender --parameter-values $(cat _site/api/slugs.json)