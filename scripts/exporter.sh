#!/bin/bash

cd tmp
TIMESTAMP=$(date +%s)
USERS_JSON="users.json"
EVENTS_JSON="dtevents.json"
mongoexport --db dt65 --collection users --out $USERS_JSON
mongoexport --db dt65 --collection dtevents --out $EVENTS_JSON
