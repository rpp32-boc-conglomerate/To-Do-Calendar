module.exports = {
  categories: [
    {
      id: 1,
      name: 'Travel'
    },
    {
      id: 2,
      name: 'Meetings'
    },
    {
      id: 3,
      name: 'Housework'
    },
    {
      id: 4,
      name: 'Backlog'
    },
  ],

  tasks: [
    {
      id: 1,
      itemName: 'Flight to China',
      itemDesc: '5-day business trip to meet with manufacturers',
      duration: '5 days',
      startDay:
    }
  ]
}

// CREATE TABLE IF NOT EXISTS "categories" (
//   "id" SERIAL,
//   "name" VARCHAR(64) NOT NULL,
//   PRIMARY KEY ("id")
// );`;

// CREATE TABLE IF NOT EXISTS "todoItems" (
//   "id" SERIAL,
//   "title" VARCHAR(64) NOT NULL,
//   "description" VARCHAR(255) NOT NULL,
//   "duration" INTERVAL NOT NULL,
//   "start" TIMESTAMP NOT NULL,
//   "end" TIME NOT NULL,
//   "allDay" BOOLEAN
//   "userID" INTEGER NOT NULL,
//   "categoryID" INTEGER NOT NULL,
//   PRIMARY KEY ("id")
// );`;

