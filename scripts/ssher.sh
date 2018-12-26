#!/bin/bash

ssh $1 'bash -s' < exporter.sh

echo "done exporting"

scp $1:/home/pehtoorismies/tmp/users.json .
scp $1:/home/pehtoorismies/tmp/dtevents.json .

node formatter.js

echo "Delete files"
rm users.json
rm dtevents.json

mv formatted_users.json ../exports/
mv formatted_events.json ../exports/
echo "DONE"

