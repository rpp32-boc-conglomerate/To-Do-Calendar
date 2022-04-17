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
                todoitems.id,
                todoitems.title,
                todoitems.description,
                todoitems.duration,
                todoitems.start,
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
`,
  postCategory: `
  insert into categories (
    calendar_id,
    category
 )
  VALUES ($1, $2);
  `,
  postItem: `
  insert into todoitems (
    title,
    description,
    duration,
    start,
    end_date,
    in_calendar,
    category_id
 )
  VALUES ($1, $2, $3, $4, $5, $6, $7);
  `,
  updateCategory: `
  update categories
  set category = $2 where category_id = $1;
`,
  updateItem: `
  update todoitems
  set
  title = $1,
  description = $2,
  duration = $3,
  start = $4,
  end_date = $5,
  in_calendar = $6
  where id = $7;
  `,

}