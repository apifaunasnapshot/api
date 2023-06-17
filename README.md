# :scroll: About

The purpose of this API is to enable integration with the [FaunaSnapshot](https://faunasnapshot.vercel.app/) project, which consists of a game aimed at children who suffer from mental illnesses. This game is part of a project at the Federal University of Technology in Paraná, as part of the Software Engineering discipline taught by Professor [Eliana Claudia Mayumi Ishikawa](https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4137685H6&tokenCaptchar=03AL8dmw9IJ_eiMG8SpRlQ8AnhIC2hhw00IhGDebi5B0bTwyb8L5OVRlGldABxEdpIj5Ugs2c4dG5jCbCkjWKDc2NWL08O3QKDQFpysuwbXytMtnp2ooAfXgqpBLKXcs9VFi4cn4dnsUq2Q7TmUfk2pFSQgY49Tot069ttzioQ4j1btZpBO7l-mJNZ8Wh2k-xK_VVc9BsG1ddOu4myMEhpn2H-iB1ZofFWwkY0uG0G7vSmmhHxw7Zsyk7iQSTQDb6_NA6-nAKNF6eXNFn8Pa3QInSNjTj1ZOZmd4k5yTPISnRr7gHZdjHAKqfkV9ndQ0zgBCbpZF8bSnPxPTjmjn2XAEmJPMOrIYS8gp2sFbh3xq6NM9fbBrQnocPiOu8lHFO0AUqZyjbrWgqCFik5I9hUIeOCdWwwqrzynVqDM0VIBhI5GSRfA1xonxEa-i-7JDyvJAL-ysT9e1zfeEH6YgW5mmKKzvrK9LxhCVgDk7mAf_V1VfBcaexocZO0uJNChNYsBIEg7mdtDW1KrY816hSXlnLHe2K_OrrdqPiuoY8tkZbsGXgbFWKMsKM85fVEHwoK1Qx6NEz1gUqgIDhEfJ9y94wbS6Gilu9RcmgawJvbO8WaCf5cyglQ-1RDmsIj5Ox1m8NkdL-M5mxk).

# :busts_in_silhouette: Owners

- [Gabriel Stawny](https://github.com/gastawny)
- [João Francisco Mayer Agottani](https://github.com)
- [Pablo Renan Santos Costa](https://github.com/)
- [Thiago Guimarães Belém](https://github.com/Thiagogob)

# :computer: Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [Bycript](https://github.com/kelektiv/node.bcrypt.js)

# :book: API Documentation

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

| Name        | Type   | Description                  |
| ----------- | ------ | ---------------------------- |
| username    | string | The name of the student.     |
| teacherUser | string | The username of the teacher. |

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
  "classRoom": [{...}],
  "animals": [{...}]
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

### `POST /auth/student`

Authenticates students and returns a token in response.

#### Body Parameters

| Name        | Type   | Description                  |
| ----------- | ------ | ---------------------------- |
| username    | string | The name of the teacher.     |
| teacherUser | string | The username of the teacher. |

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
    "date": "2023-06-13T00:00:00.000Z",
    "phase": "One",
    "tries": [
      {
        "animal": "Crocodilo",
        "isCorrect": true
      },
      {
        "animal": "Arara",
        "isCorrect": false
      },
      {
        "animal": "Cobra",
        "isCorrect": true
      }
    ]
  },
  {
    "date": "2023-06-13T00:00:00.000Z",
    "phase": "Two",
    "tries": [
      {
        "animal": "Crocodilo",
        "isCorrect": true
      },
      {
        "animal": "Arara",
        "isCorrect": true
      }
    ]
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
        "date": "2023-06-13T00:00:00.000Z",
        "phase": "One",
        "tries": [
          {
            "animal": "Crocodilo",
            "isCorrect": true
          },
          {
            "animal": "Arara",
            "isCorrect": false
          },
          {
            "animal": "Cobra",
            "isCorrect": true
          }
        ]
      },
      {
        "date": "2023-06-13T00:00:00.000Z",
        "phase": "Two",
        "tries": [
          {
            "animal": "Crocodilo",
            "isCorrect": true
          },
          {
            "animal": "Arara",
            "isCorrect": true
          }
        ]
      }
    ]
  }
]
```

### `POST /attempt/:username`

Adds a new attempt to student in the system.

#### URL Parameters

| Name        | Type   | Description                  |
| ----------- | ------ | ---------------------------- |
| username    | string | The name of the student.     |
| teacherUser | string | The username of the teacher. |

#### Header Parameters

| Name        | Type   | Description           |
| ----------- | ------ | --------------------- |
| authstudent | string | Access student token. |

#### Body Parameters

| Name  | Type   | Description                                                              |
| ----- | ------ | ------------------------------------------------------------------------ |
| phase | string | Phase name.                                                              |
| tries | array  | Array of objects with animal names and correctness of student's answers. |

#### Object Model

```json
{
  "animal": "Crocodilo",
  "isCorrect": true
}
```

#### Request

```json
{
  "phase": "One",
  "tries": [
    {
      "animal": "Crocodilo",
      "isCorrect": true
    },
    {
      "animal": "Arara",
      "isCorrect": false
    }
  ]
}
```

#### Response

```json
{
  "message": "Create new attempt!"
}
```

## `Animal`

### `GET /animal`

Returns the list of all animals registred in system.

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
  },
  {
    "name": "Juburu",
    "img": "juburu"
  },
  {
    "name": "Macaco",
    "img": "macaco"
  },
  {
    "name": "Onça-pintada",
    "img": "oncapintada"
  }
]
```

### `GET /animal/:username`

Returns the list of all animals of teacher.

#### URL Parameters

| Name     | Type   | Description                  |
| -------- | ------ | ---------------------------- |
| username | string | The username of the teacher. |

#### Response

```json
[
  {
    "name": "Arara",
    "img": "arara",
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

### `GET /animal/selected/:username`

Returns the list of all selected animals by the teacher.

#### URL Parameters

| Name     | Type   | Description                  |
| -------- | ------ | ---------------------------- |
| username | string | The username of the teacher. |

#### Response

```json
[
  {
    "name": "Arara",
    "img": "arara"
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

### `PUT /animal/:username`

Update the status of an animal in the teacher's list.

#### URL Parameters

| Name     | Type   | Description                  |
| -------- | ------ | ---------------------------- |
| username | string | The username of the teacher. |

#### Body Parameters

| Name  | Type    | Description                                 |
| ----- | ------- | ------------------------------------------- |
| name  | string  | The animal name.                            |
| state | boolean | The future state of the animal in the list. |
