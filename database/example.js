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

  // var eventsList = [{
  //   title: 'Sample Event',
  //   start: new Date,
  //   end: new Date(moment().add(1, 'hour')),
  //   allDay: false
  // }]

  tasks: [
    {
      id: 1,
      title: 'Trip to China',
      description: '5-day business trip to meet with manufacturers',
      duration: '5 days',
      start: 'April 9, 2022 09:30:00',
      end: 'April 13, 2022 09:30:00',
      category_id: 1
    },
    {
      id: 1,
      title: 'Trip to Los Angeles',
      description: 'Meeting with Executives',
      duration: '6 hours',
      start: 'April 14, 2022 09:30:00',
      end: 'April 14, 2022 15:30:00',
      category_id: 1
    },
    {
      id: 1,
      title: 'Meeting with John',
      description: 'Discuss product design',
      duration: '3 hours',
      start: 'April 17, 2022 11:30:00',
      end: 'April 17, 2022 14:30:00',
      category_id: 2
    },
    {
      id: 1,
      title: 'Meeting with JP Morgan',
      description: 'Discuss marketing strategy',
      duration: '2 hours',
      start: 'April 15, 2022 09:30:00',
      end: 'April 15, 2022 11:30:00',
      category_id: 2
    },
    {
      id: 1,
      title: 'Meeting with Nike',
      description: 'Initial business introduction meeting',
      duration: '2 hours',
      start: 'April 16, 2022 13:30:00',
      end: 'April 16, 2022 15:30:00',
      category_id: 2
    },
    {
      id: 1,
      title: 'Dry-cleaning',
      description: 'Take clothes to dry-cleaners',
      duration: '30 minutes',
      start: 'April 14, 2022 18:30:00',
      end: 'April 14, 2022 19:00:00',
      category_id: 3
    },
    {
      id: 1,
      title: 'Grocery Shopping',
      description: 'Shop for groceries at Whole Foods',
      duration: '2 hours',
      start: 'April 15, 2022 15:30:00',
      end: 'April 15, 2022 17:30:00',
      category_id: 3
    },
    {
      id: 1,
      title: 'Work on App',
      description: 'Note-taking app for iOS',
      duration: '4 hours',
      start: 'April 15, 2022 18:30:00',
      end: 'April 13, 2022 22:30:00',
      category_id: 4
    },
  ]
}

// CREATE TABLE IF NOT EXISTS "categories" (
//   "id" SERIAL,
//   "name" VARCHAR(64) NOT NULL,
//   PRIMARY KEY ("id")
// );`;

// CREATE TABLE IF NOT EXISTS "todoItems" (
  // "id" SERIAL,
  // "title" VARCHAR(64) NOT NULL,
  // "description" VARCHAR(255) NOT NULL,
  // "duration" INTERVAL NOT NULL,
  // "start" TIMESTAMP NOT NULL,
  // "end" TIME NOT NULL,
  // "allDay" BOOLEAN NOT NULL
  // "userID" INTEGER NOT NULL,
  // "categoryID" INTEGER NOT NULL,
  // PRIMARY KEY ("id")
// );`;

