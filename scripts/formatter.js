const fs = require('fs');
const readline = require('readline');
const outstream = new (require('stream'))();

const users = [];
const dtevents = [];

const writeToFile = (filename, json) => {
  fs.open(filename, 'wx', (err, fd) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error('myfile already exists');
        return;
      }
      throw err;
    }

    fs.writeFile(filename, json, err => {
      // throws an error, you could also catch it here
      if (err) throw err;

      // success case, the file was saved
      console.log('JSON saved!');
    });
  });
};

const processFile = inputFile => {
  const instream = fs.createReadStream(inputFile);
  return readline.createInterface(instream, outstream);
};

const usersEmitter = processFile('users.json');
const eventsEmitter = processFile('dtevents.json');
usersEmitter.on('line', userJSON => {
  const u = JSON.parse(userJSON);
  const user = {
    email: u.email,
    nick: u.username,
    name: u.firstName ? `${u.firstName} ${u.surname}` : null,
  };
  users.push(user);
});
eventsEmitter.on('line', dteventJSON => {
  const e = JSON.parse(dteventJSON);
  const dtevent = {
    name: e.name,
    race: e.race,
    time: e.time,
    eventType: e.eventType,
    date: e.date.$date,
    participants: Array.isArray(e.participants)
      ? e.participants.map(p => p.username)
      : [],
  };

  dtevents.push(dtevent);
});

usersEmitter.on('close', () => {
  const json = JSON.stringify(users);
  writeToFile('formatted_users.json', json);
});
eventsEmitter.on('close', () => {
  const json = JSON.stringify(dtevents);
  writeToFile('formatted_events.json', json);
});
