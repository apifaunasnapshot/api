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
    "attempts": [{}]
  },
  {
    "username": "João",
    "attempts": [{}]
  },
  {
    "username": "Pablo",
    "attempts": [{}]
  },
  {
    "username": "Gabriel",
    "attempts": [{}]
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
  "message": "Student created successfully"
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
  "message": "Student removed successfully"
}
```

## `Teacher`

### `GET /teacher`

Returns a list of all teachers registered in the system.

#### Query Parameters

None.

#### Response

```json
[
  {
    "username": "Thiago"
  },
  {
    "username": "João"
  },
  {
    "username": "Pablo"
  },
  {
    "username": "Gabriel"
  }
]
```

### `POST /teacher`

Adds a new teacher to the system.

#### Body Parameters

| Name     | Type   | Description                  |
| -------- | ------ | ---------------------------- |
| username | string | The name of the teacher.     |
| password | string | The password of the teacher. |

#### Header Parameters

| Name | Type   | Description   |
| ---- | ------ | ------------- |
| auth | string | Access token. |

#### Response

```json
{
  "message": "Teacher created successfully"
}
```

### `DELETE /teacher/:username`

Removes a teacher from the system.

#### URL Parameters

| Name     | Type   | Description                  |
| -------- | ------ | ---------------------------- |
| username | string | The name of the teacher.     |
| password | string | The password of the teacher. |

#### Header Parameters

| Name | Type   | Description   |
| ---- | ------ | ------------- |
| auth | string | Access token. |

#### Response

```json
{
  "message": "Teacher removed successfully"
}
```
