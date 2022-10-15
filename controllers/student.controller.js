const Student = require("../models/student.model.js");

const getAll = async (req, res) => {
  const students = await Student.find({});
  if (students && students.length > 0) {
    res.render("index", { title: "Students", students });
  }
  return res.render("index", { title: "Students", students: [] });
};

const createOne = async (req, res) => {
  if (req.method === "POST") {
    const dataToUpdate = req.body;
    Object.assign(dataToUpdate, {
      sex: !!(dataToUpdate.sex === "male"),
    });
    const newStudent = await Student.create(dataToUpdate);
    if (newStudent) {
      res.redirect("/");
      return;
    }
  }
  res.render("add", { title: "Add 1 student" });
};

const updateOne = async (req, res) => {
  const { student_id } = req.params;

  const student = await Student.findOne({ student_id });

  if (!student) {
    res.render("edit", { title: "Not found!", student: {} });
    return;
  }

  if (req.method === "POST") {
    const dataToUpdate = req.body;
    Object.assign(dataToUpdate, {
      sex: !!(dataToUpdate.sex === "male"),
    });
    Object.assign(student, { ...dataToUpdate });
    await student.save();
    res.redirect("/");
    return;
  }

  res.render("edit", { title: "Edit a student", student });
};

const deleteOne = async (req, res) => {
  const { student_id } = req.params;

  await Student.deleteOne({ student_id });

  res.redirect("/");
};

module.exports = {
  getAll,
  createOne,
  updateOne,
  deleteOne,
};
