var moment = require('moment')
module.exports = {
  example: [
    {
      id: 1,
      category: 'Travel',
      user_email: 'todocal@gmail.com',
      tasks: [
        {
          id: 0,
          title: "Sample Event",
          description: 'this is a practice',
          start: new Date(),
          end: new Date(moment().add(1, "hour")),
          allDay: false,
          in_calendar: true
        },
        {
          id: 1,
          title: 'Trip to China',
          description: '5-day business trip to meet with manufacturers',
          duration: '5 days',
          start: new Date(),
          end: new Date(moment().add(1, "hour")),
          category_id: 1,
          in_calendar: true
        },
        // Sat 9 April 2022 09:30:00 UT
        // April 13, 2022 09:30:00 UT
        {
          id: 2,
          title: 'Trip to Los Angeles',
          description: 'Meeting with Executives',
          duration: '6 hours',
          start: 'Thu 14 April 2022 09:30:00 UT',
          end: 'Thu 14 April 2022 15:30:00 UT',
          category_id: 1,
          in_calendar: false
        },
      ]
    },
    {
      id: 2,
      category: 'Meetings',
      user_email: 'todocal@gmail.com',
      tasks: [
        {
          id: 3,
          title: 'Meeting with John',
          description: 'Discuss product design',
          duration: '3 hours',
          start: 'Sun 17 April 2022 11:30:00 UT',
          end: 'Sun 17 April 2022 14:30:00 UT',
          category_id: 2,
          in_calendar: false
        },
        {
          id: 4,
          title: 'Meeting with JP Morgan',
          description: 'Discuss marketing strategy',
          duration: '2 hours',
          start: 'Fri 15 April 2022 09:30:00 UT',
          end: 'Fri 15 April 2022 11:30:00 UT',
          category_id: 2,
          in_calendar: true
        },
        {
          id: 5,
          title: 'Meeting with Nike',
          description: 'Initial business introduction meeting',
          duration: '2 hours',
          start: 'Sat 16 April 2022 13:30:00 UT',
          end: 'Sat 16 April 2022 15:30:00 UT',
          category_id: 2,
          in_calendar: false
        },
      ]
    },
    {
      id: 3,
      category: 'Housework',
      user_email: 'todocal@gmail.com',
      tasks: [
        {
          id: 6,
          title: 'Dry-cleaning',
          description: 'Take clothes to dry-cleaners',
          duration: '30 minutes',
          start: 'Thu 14 April 2022 18:30:00 UT',
          end: 'Thu 14 April 2022 19:00:00 UT',
          category_id: 3,
          in_calendar: false
        },
        {
          id: 7,
          title: 'Grocery Shopping',
          description: 'Shop for groceries at Whole Foods',
          duration: '2 hours',
          start: 'Fri 15 April 2022 15:30:00 UT',
          end: 'Fri 15 April 2022 17:30:00 UT',
          category_id: 3,
          in_calendar: true
        },
      ]
    },
    {
      id: 4,
      category: 'Backlog',
      user_email: 'todocal@gmail.com',
      tasks: [
        {
          id: 8,
          title: 'Work on App',
          description: 'Note-taking app for iOS',
          duration: '4 hours',
          start: 'Fri 15 April 2022 18:30:00 UT',
          end: 'Fri 15 April 2022 22:30:00 UT',
          category_id: 4,
          in_calendar: false
        },
      ]
    },
  ],
}

