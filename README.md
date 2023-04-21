# API Documentation

## Routes

## `Student`

### `GET /student`

Returns a list of all students registered in the system.

#### Query Parameters

None.

#### Response

```json
[
  {
    "username": "Thiago",
    "attempts: "[{...}]"
  },
  {
    "username": "João",
    "attempts: "[{...}]"
  },
  {
    "username": "Pablo",
    "attempts: "[{...}]"
  },
  {
    "username": "Gabriel",
    "attempts: "[{...}]"
  }
]
```

### `POST /student`

Adds a new student to the system.

#### Body Parameters

| Name     | Type   | Description              |
| -------- | ------ | ------------------------ |
| username | string | The name of the student. |

#### Response

```json
{
  message: string
}
```

### `DELETE /student/:username`

Removes a student from the system.

#### URL Parameters

| Name     | Type   | Description                        |
| -------- | ------ | ---------------------------------- |
| username | string | The name of the student to remove. |

#### Response

```json
{
  "message": "Student removed successfully."
}
```
