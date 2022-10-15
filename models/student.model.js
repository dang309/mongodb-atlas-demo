const { Schema, model } = require("mongoose");

const StudentSchema = Schema(
  {
    student_id: { type: String, required: true, unique: true },
    full_name: {
      type: String,
      trim: true,
    },
    email: { type: String, required: true, unique: true },
    address: {
      type: String,
    },
    sex: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("student", StudentSchema);
