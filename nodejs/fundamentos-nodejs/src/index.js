const express = require('express');

const app = express();

app.get('/courses', (request, response) => {
  return response.json([
    "Course 1",
    "Course 2",
    "Course 3"
  ]);
})

app.post('/courses', (request, response) => {
  return response.json([
    "Course 1",
    "Course 2",
    "Course 3",
    "Course 4",
  ]);
})

app.put('/courses/:id', (request, response) => {
  return response.json([
    "Course 6",
    "Course 2",
    "Course 3",
    "Course 4",
  ]);
})

app.patch('/courses/:id', (request, response) => {
  return response.json([
    "Course 6",
    "Course 7",
    "Course 3",
    "Course 4",
  ]);
})

app.delete('/courses/:id', (request, response) => {
  return response.json([
    "Course 6",
    "Course 7",
    "Course 4",
  ]);
})

app.listen(3333);