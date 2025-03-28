import React from "react";
import Image from "next/image";
import { Form, Formik } from "formik";
import { object, string } from "yup";

import { ModalContainer } from "./ModalContainer";
import { TextField } from "./TextField";

export const UpdateModal = ({
  showModal,
  closeModal,
}: {
  showModal: boolean;
  closeModal: () => void;
}) => {
  const initialValues = {
    rank: "",
    percentile: "",
    score: "",
  };

  const schema = object().shape({
    rank: string()
      .required("Rank is required")
      .test("min-value", "Rank must be greater than 0", (value) => {
        const parsedValue = parseFloat(value);
        return !isNaN(parsedValue) && parsedValue > 0;
      }),
    percentile: string()
      .required("Percentile is required")
      .test("min-value", "Percentile must be between 0 and 100", (value) => {
        const parsedValue = parseFloat(value);
        return !isNaN(parsedValue) && parsedValue > 0;
      })

      .test("max-value", "Percentile must not exceed 100", (value) => {
        const parsedValue = parseFloat(value);
        return !isNaN(parsedValue) && parsedValue <= 100;
      }),
    score: string()
      .required("Score is required")
      .test("min-value", "Score must be between 0 and 15", (value) => {
        const parsedValue = parseFloat(value);
        return !isNaN(parsedValue) && parsedValue > 0;
      })

      .test("max-value", "Score must not exceed 15", (value) => {
        const parsedValue = parseFloat(value);
        return !isNaN(parsedValue) && parsedValue <= 15;
      }),
  });

  return (
    <ModalContainer showModal={showModal} closeModal={closeModal}>
      <div
        className={`w-[600px] max-h-[90vh] bg-white text-black p-6  rounded-[10px] animation ${
          showModal ? "mt-0" : "mt-[5rem]"
        } relative z-[100] py-[50px]`}
      >
        <div className="flex justify-between items-center">
          <p className="text-[20px] font-semibold">Update scores</p>

          <Image src="/images/html5.png" alt="" width={24} height={24} />
        </div>

        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={() => {}}
          validationSchema={schema}
        >
          {({ values, errors, setFieldValue, touched }) => {
            return (
              <Form
                autoComplete="off"
                className="mt-[30px] flex flex-col gap-y-6"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-[#060a44] flex justify-center items-center rounded-[50%]">
                      <p className="text-white">1</p>
                    </div>
                    <p>
                      Update your <span className="font-semibold">rank</span>
                    </p>
                  </div>
                  <TextField
                    name="rank"
                    value={values?.rank}
                    error={errors.rank && touched.rank}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-[#060a44] flex justify-center items-center rounded-[50%]">
                      <p className="text-white">2</p>
                    </div>
                    <p>
                      Update your{" "}
                      <span className="font-semibold">percentile</span>
                    </p>
                  </div>
                  <TextField
                    name="percentile"
                    value={values?.percentile}
                    error={errors.percentile && touched.percentile}
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-[#060a44] flex justify-center items-center rounded-[50%]">
                      <p className="text-white">3</p>
                    </div>
                    <p>
                      Update your{" "}
                      <span className="font-semibold">
                        Current Score (Out of 15)
                      </span>
                    </p>
                  </div>
                  <TextField
                    name="score"
                    value={values?.score}
                    error={errors.score && touched.score}
                  />
                </div>

                <div className="mt-4 flex gap-x-6 justify-end">
                  <button
                    type="button"
                    className="border border-[#060a44] text-[#060a44] px-6 py-2 rounded-[5px] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#060a44] px-6 py-2 rounded-[5px] text-white cursor-pointer"
                  >
                    Save
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </ModalContainer>
  );
};
