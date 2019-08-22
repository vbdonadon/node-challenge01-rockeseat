const express = require("express");
const server = express();

let projects = [];

// POST
server.post("/projects", (req, res) => {
  const { id, title } = req.body;
  const project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(project);
});

// POST Tasks
server.post("/projects/:id/tasks", (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const project = projects.find(proj => proj.id == id);

  project.tasks.push(title);

  return res.json(project);
});

// GET
server.get("/projects/", (req, res) => {
  return res.json(projects);
});

// PUT
server.put("/projects/:id", (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const project = projects.find(proj => proj.id == id);

  project.title = title;

  return res.json(project);
});

server.listen(3000);
