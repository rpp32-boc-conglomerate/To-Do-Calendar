module.exports = {
  
  getInfo: `select user_id, user_email,
  (
    select array_to_json(array_agg(row_to_json(d)))
    from (
      select calendars.calendar_id, calendars.user_id, calendars.calendar_owner,
      coalesce(
          (
          select array_to_json(array_agg(row_to_json(y)))
          from(
            SELECT
            categories.category_id,
            categories.category,
            coalesce(
              (
              select array_to_json(array_agg(row_to_json(z)))
              from(
                SELECT
                todoitems.item_id,
                todoitems.item_title,
                todoitems.item_description,
                todoitems.item_duration,
                todoitems.start_date,
                todoitems.end_date,
                todoitems.in_calendar
                FROM todoitems
                where todoitems.category_id = categories.category_id
              ) z
            ), '[]'
          ) as items
            FROM categories
            where categories.calendar_id = calendars.calendar_id
          ) y
        ), '[]'
      ) as categories
        from calendars
        where calendars.user_id = users.user_id
    ) d
  ) as calendars
from users
where user_email = $1;
`

}