var moment = require('moment')
module.exports = {
  result: {
    "user_id": 1,
    "user_email": "1@qq.com",
    "calendars": [
      {
        "calendar_id": 1,
        "user_id": 1,
        "calendar_owner": "1@qq.com",
        "categories": [
          {
            "category_id": 1,
            "category": "Travel",
            "items": [
              {
                "item_id": 1,
                "title": "meeting with A",
                "description": "Discuss A",
                "duration": "01:00:00",
                "start": "2022-04-15T09:30:20",
                "end_date": "2022-04-15T10:30:20",
                "in_calendar": false
              },
              {
                "item_id": 2,
                "title": "meeting with B",
                "description": "Discuss B",
                "duration": "03:00:00",
                "start": "2022-04-21T09:30:20",
                "end_date": "2022-04-21T12:30:20",
                "in_calendar": true
              },
              {
                "item_id": 3,
                "title": "meeting with C",
                "description": "Discuss C",
                "duration": "04:00:00",
                "start": "2022-04-18T09:30:20",
                "end_date": "2022-04-18T13:30:20",
                "in_calendar": true
              }
            ]
          },
          {
            "category_id": 2,
            "category": "housework",
            "items": [
              {
                "item_id": 4,
                "title": "meeting with D",
                "description": "Discuss D",
                "duration": "05:00:00",
                "start": "2022-04-22T09:30:20",
                "end_date": "2022-04-22T14:30:20",
                "in_calendar": true
              },
              {
                "item_id": 5,
                "title": "meeting with E",
                "description": "Discuss E",
                "duration": "06:00:00",
                "start": "2022-04-22T09:30:20",
                "end_date": "2022-04-22T15:30:20",
                "in_calendar": false
              }
            ]
          },
          {
            "category_id": 3,
            "category": "study",
            "items": [
              {
                "item_id": 6,
                "title": "meeting with F",
                "description": "Discuss F",
                "duration": "01:00:00",
                "start": "2022-04-15T09:30:20",
                "end_date": "2022-04-15T10:30:20",
                "in_calendar": false
              }
            ]
          }
        ]
      },
      {
        "calendar_id": 2,
        "user_id": 1,
        "calendar_owner": "2@qq.com",
        "categories": [
          {
            "category_id": 4,
            "category": "gaming",
            "items": [
              {
                "item_id": 7,
                "title": "meeting with G",
                "description": "Discuss G",
                "duration": "02:00:00",
                "start": "2022-04-15T09:30:20",
                "end_date": "2022-04-15T11:30:20",
                "in_calendar": true
              }
            ]
          }
        ]
      },
      {
        "calendar_id": 3,
        "user_id": 1,
        "calendar_owner": "3@qq.com",
        "categories": [
          {
            "category_id": 5,
            "category": "school",
            "items": [
              {
                "item_id": 8,
                "title": "meeting with H",
                "description": "Discuss H",
                "duration": "03:00:00",
                "start": "2022-04-20T09:30:20",
                "end_date": "2022-04-20T12:30:20",
                "in_calendar": true
              }
            ]
          }
        ]
      }
    ]
  }
}

