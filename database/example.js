module.exports = {
  // userEmail for verifying ownership of calendar
  //notes from Rob: userEmail changed to user_email, table userToDoLookup changed to user_todo_lookup, and inCalendar changed to in_calendar because postgres throws syntax errors sometimes for camelcase.
  example: [
    {
      id: 1,
      category: 'Travel',
      user_email: 'todocal@gmail.com',
      tasks: [
        {
          id: 1,
          title: 'Trip to China',
          description: '5-day business trip to meet with manufacturers',
          duration: '5 days',
          start: 'Sat 9 April 2022 09:30:00 UT',
          end: 'April 13, 2022 09:30:00 UT',
          category_id: 1,
          in_calendar: true
        },
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
        {
          id: 3,
          title: 'Meeting with John',
          description: 'Discuss product design',
          duration: '3 hours',
          start: 'Sun 17 April 2022 11:30:00 UT',
          end: 'Sun 17 April 2022 14:30:00 UT',
          category_id: 1,
          in_calendar: false
        },
      ]
    },
    {
      id: 2,
      category: 'Housework',
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
      category: 'Meetings',
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

  tasks: [
    {
      id: 1,
      title: 'Trip to China',
      description: '5-day business trip to meet with manufacturers',
      duration: '5 days',
      start: 'Sat 9 April 2022 09:30:00 UT',
      end: 'Wed 13 April 2022 09:30:00 UT',
      category_id: 1,
      in_calendar: true
    },
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


  // categories: [
  //   {
  //     id: 1,
  //     name: 'Travel'
  //   },
  //   {
  //     id: 2,
  //     name: 'Meetings'
  //   },
  //   {
  //     id: 3,
  //     name: 'Housework'
  //   },
  //   {
  //     id: 4,
  //     name: 'Backlog'
  //   },
  // ],

  // tasks: [
  //   {
  //     id: 1,
  //     title: 'Trip to China',
  //     description: '5-day business trip to meet with manufacturers',
  //     duration: '5 days',
  //     start: 'Sat 9 April 2022 09:30:00 UT',
  //     end: 'Wed 13 April 2022 09:30:00 UT',
  //     category_id: 1,
  //     inCalendar: true
  //   },
  //   {
  //     id: 2,
  //     title: 'Trip to Los Angeles',
  //     description: 'Meeting with Executives',
  //     duration: '6 hours',
  //     start: 'Thu 14 April 2022 09:30:00 UT',
  //     end: 'Thu 14 April 2022 15:30:00 UT',
  //     category_id: 1,
  //     inCalendar: false
  //   },
  //   {
  //     id: 3,
  //     title: 'Meeting with John',
  //     description: 'Discuss product design',
  //     duration: '3 hours',
  //     start: 'Sun 17 April 2022 11:30:00 UT',
  //     end: 'Sun 17 April 2022 14:30:00 UT',
  //     category_id: 2,
  //     inCalendar: false
  //   },
  //   {
  //     id: 4,
  //     title: 'Meeting with JP Morgan',
  //     description: 'Discuss marketing strategy',
  //     duration: '2 hours',
  //     start: 'Fri 15 April 2022 09:30:00 UT',
  //     end: 'Fri 15 April 2022 11:30:00 UT',
  //     category_id: 2,
  //     inCalendar: true
  //   },
  //   {
  //     id: 5,
  //     title: 'Meeting with Nike',
  //     description: 'Initial business introduction meeting',
  //     duration: '2 hours',
  //     start: 'Sat 16 April 2022 13:30:00 UT',
  //     end: 'Sat 16 April 2022 15:30:00 UT',
  //     category_id: 2,
  //     inCalendar: false
  //   },
  //   {
  //     id: 6,
  //     title: 'Dry-cleaning',
  //     description: 'Take clothes to dry-cleaners',
  //     duration: '30 minutes',
  //     start: 'Thu 14 April 2022 18:30:00 UT',
  //     end: 'Thu 14 April 2022 19:00:00 UT',
  //     category_id: 3,
  //     inCalendar: false
  //   },
  //   {
  //     id: 7,
  //     title: 'Grocery Shopping',
  //     description: 'Shop for groceries at Whole Foods',
  //     duration: '2 hours',
  //     start: 'Fri 15 April 2022 15:30:00 UT',
  //     end: 'Fri 15 April 2022 17:30:00 UT',
  //     category_id: 3,
  //     inCalendar: true
  //   },
  //   {
  //     id: 8,
  //     title: 'Work on App',
  //     description: 'Note-taking app for iOS',
  //     duration: '4 hours',
  //     start: 'Fri 15 April 2022 18:30:00 UT',
  //     end: 'Fri 15 April 2022 22:30:00 UT',
  //     category_id: 4
  //     inCalendar: false
  //   },
  // ]
}

