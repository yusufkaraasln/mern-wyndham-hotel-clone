const mongoose = require("mongoose");

const CareerSchema = new mongoose.Schema(
  {
    pozition: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    start_date: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    birth_place: {
      type: String,
      required: true,
    },
    birth_date: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    marital_status: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    military_status: {
      type: String,
      required: true,
    },
    military_date: {
      type: String,
      required: true,
    },
    driving_license: {
      type: String,
      required: true,
    },
    current_job: {
      type: String,
      required: true,
    },
    smoking: {
      type: String,
      required: true,
    },
    physical_disability: {
      type: String,
      required: true,
    },

    bachelor1: {
      type: String,
      required: true,
    },
    start_date1: {
      type: String,
      required: true,
    },
    end_date1: {
      type: String,
      required: true,
    },
    degree1: {
      type: String,
      required: true,
    },
    bachelor2: {
      type: String,
      required: false,
    },
    start_date2: {
      type: String,
      required: false,
    },
    end_date2: {
      type: String,
      required: false,
    },
    degree2: {
      type: String,
      required: false,
    },
    bachelor3: {
      type: String,
      required: false,
    },
    start_date3: {
      type: String,
      required: false,
    },
    end_date3: {
      type: String,
      required: false,
    },
    degree3: {
      type: String,
      required: false,
    },
    course_name1: {
      type: String,
      required: true,
    },
    course_start_date1: {
      type: String,
      required: true,
    },
    course_end_date1: {
      type: String,
      required: true,
    },
    course_features1: {
      type: String,
      required: true,
    },
    course_name2: {
      type: String,
      required: false,
    },
    course_start_date2: {
      type: String,
      required: false,
    },
    course_end_date2: {
      type: String,
      required: false,
    },
    course_featues2: {
      type: String,
      required: false,
    },
    course_name3: {
      type: String,
      required: false,
    },
    course_start_date3: {
      type: String,
      required: false,
    },
    course_end_date3: {
      type: String,
      required: false,
    },
    course_featues3: {
      type: String,
      required: false,
    },

    language1: {
      type: String,
      required: true,
    },
    reading1: {
      type: String,
      required: true,
    },
    writing1: {
      type: String,
      required: true,
    },
    speaking1: {
      type: String,
      required: true,
    },
    language2: {
      type: String,
      required: false,
    },
    reading2: {
      type: String,

      required: false,
    },
    writing2: {
      type: String,
      required: false,
    },
    speaking2: {
      type: String,
      required: false,
    },
    language3: {
      type: String,
      required: false,
    },
    reading3: {
      type: String,
      required: false,
    },
    writing3: {
      type: String,
      required: false,
    },
    speaking3: {
      type: String,
      required: false,
    },

    company1: {
      type: String,
      required: true,
    },
    experience_start_date1: {
      type: String,
      required: true,
    },
    position1: {
      type: String,
      required: true,
    },
    experience_date1: {
      type: String,
      required: true,
    },
    company2: {
      type: String,
      required: false,
    },
    experience_start_date2: {
      type: String,
      required: false,
    },
    position2: {
      type: String,
      required: false,
    },
    experience_date2: {
      type: String,
      required: false,
    },
    company3: {
      type: String,
      required: false,
    },
    experience_start_date3: {
      type: String,
      required: false,
    },
    position3: {
      type: String,
      required: false,
    },
    experience_date3: {
      type: String,
      required: false,
    },

    reference_name1: {
      type: String,
      required: true,
    },
    reference_job1: {
      type: String,
      required: true,
    },
    reference_phone1: {
      type: String,
      required: true,
    },
    reference_name2: {
      type: String,
      required: false,
    },
    reference_job2: {
      type: String,
      required: false,
    },
    reference_phone2: {
      type: String,
      required: false,
    },
    reference_name3: {
      type: String,
      required: false,
    },
    reference_job3: {
      type: String,
      required: false,
    },
    reference_phone3: {
      type: String,
      required: false,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Career", CareerSchema);

{
}
