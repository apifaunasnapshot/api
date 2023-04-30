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
    "attempts": [{...}],
    "teacher": "Eliana"
  },
  {
    "username": "João",
    "attempts": [{...}],
    "teacher": "Eliana"
  },
  {
    "username": "Pablo",
    "attempts": [{...}],
    "teacher": "Eliana"
  },
  {
    "username": "Gabriel",
    "attempts": [{...}],
    "teacher": "Eliana"
  }
]
```

### `POST /student`

Adds a new student to the system.

#### Body Parameters

| Name        | Type   | Description              |
| ----------- | ------ | ------------------------ |
| username    | string | The name of the student. |
| teacherName | string | The name of the teacher. |

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

#### Header Parameters

| Name        | Type   | Description           |
| ----------- | ------ | --------------------- |
| authteacher | string | Access teacher token. |

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
  "name": "Eliana Claudia Mayumi Ishikawa",
  "username": "eishikawa",
  "classRoom": [{...}]
]
```

### `POST /teacher`

Adds a new teacher to the system.

#### Body Parameters

| Name     | Type   | Description                  |
| -------- | ------ | ---------------------------- |
| name     | string | The name of the teacher.     |
| username | string | The username of the teacher. |
| password | string | The password of the teacher. |

#### Header Parameters

| Name        | Type   | Description           |
| ----------- | ------ | --------------------- |
| authteacher | string | Access teacher token. |

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

| Name        | Type   | Description           |
| ----------- | ------ | --------------------- |
| authteacher | string | Access teacher token. |

#### Response

```json
{
  "message": "Teacher removed successfully"
}
```

## `Authentication`

### `POST /auth/teacher`

Authenticates teachers and returns a token in response.

#### Body Parameters

| Name     | Type   | Description                  |
| -------- | ------ | ---------------------------- |
| username | string | The name of the teacher.     |
| password | string | The password of the teacher. |

#### Response

```json
{
  "message": "Authentication successful!",
  "token": "NiInR5cCI6IkpXVCJ9.tZSI6IkpvaG4gRwiaWF0IjoxE2MjM5MDIyfQ.pMek6yJV_adQssw5c"
}
```

## `Attempt`

### `GET /attempt/:username`

Returns the list of all attempts by a student.

#### URL Parameters

| Name     | Type   | Description              |
| -------- | ------ | ------------------------ |
| username | string | The name of the student. |

#### Response

```json
[
  {
    "date": "2023-04-25T19:10:49.643Z",
    "phaseOne": 2,
    "phaseTwo": 3,
    "totalAnimals": 4
  }
]
```

### `GET /attempt/teacher/:username`

Returns the list of all attempts for a classroom.

#### URL Parameters

| Name     | Type   | Description                  |
| -------- | ------ | ---------------------------- |
| username | string | The username of the teacher. |

#### Response

```json
[
  {
    "username": "Gabriel",
    "attempts": [
      {
        "date": "2023-04-25T21:54:02.349Z",
        "phaseOne": 2,
        "phaseTwo": 3,
        "totalAnimals": 3
      }
    ]
  }
]
```

### `POST /attempt/:username`

Adds a new attempt to student in the system.

#### URL Parameters

| Name     | Type   | Description              |
| -------- | ------ | ------------------------ |
| username | string | The name of the student. |

#### Header Parameters

| Name        | Type   | Description           |
| ----------- | ------ | --------------------- |
| authstudent | string | Access student token. |

#### Body Parameters

| Name         | Type   | Description                                         |
| ------------ | ------ | --------------------------------------------------- |
| phaseOne     | number | The number of animals selected in the first phase.  |
| phaseTwo     | number | The number of animals selected in the second phase. |
| totalAnimals | number | The total number of animals available in each phase |

#### Response

```json
{
  "message": "Create new attempt!"
}
```

## `Animal`

### `GET /animal/`

Returns the list of all animals.

#### Response

```json
[
  {
    "name": "Arara",
    "img": "arara",
    "selected": true
  },
  {
    "name": "Capivara",
    "img": "capivara",
    "selected": true
  },
  {
    "name": "Cobra",
    "img": "cobra",
    "selected": true
  },
  {
    "name": "Crocodilo",
    "img": "crocodilo",
    "selected": true
  },
  {
    "name": "Flamingo",
    "img": "flamingo",
    "selected": true
  },
  {
    "name": "Juburu",
    "img": "juburu",
    "selected": false
  },
  {
    "name": "Macaco",
    "img": "macaco",
    "selected": false
  },
  {
    "name": "Onça-pintada",
    "img": "oncapintada",
    "selected": false
  }
]
```

### `GET /animal/selected`

Returns the list of all selected animals.

#### Response

```json
[
  {
    "name": "Arara",
    "img": "arara"
  },
  {
    "name": "Capivara",
    "img": "capivara"
  },
  {
    "name": "Cobra",
    "img": "cobra"
  },
  {
    "name": "Crocodilo",
    "img": "crocodilo"
  },
  {
    "name": "Flamingo",
    "img": "flamingo"
  }
]
```
