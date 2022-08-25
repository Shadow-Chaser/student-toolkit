import { PrinterFilled } from "@ant-design/icons";
import { Form, Input, Select } from "antd";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import "../../styles/CoverBuilder.css";
import reverseDateFormat from "../../utils/HelperFunction";
import Cover from "./Cover";

const CoverForm = () => {
  const [coverData, setCoverData] = useState({
    university: "Leading University",
    title: "Assignment - 1",
    courseCode: "CSE-1111",
    courseTitle: "Introduction to Computer",
    submittedTo: "Adil Ahmed Chowdhury",
    designation: "Lecturer",
    submittedBy: "Ashab Hussan",
    teacherDept: "Department of Computer Science & Technology",
    studentDept: "Department of Computer Science & Technology",
    studentID: "191202177",
    batch: "50",
    section: "D",
    submissionDate: new Date().toLocaleDateString("en-GB"),
  });
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleInputChange = (e) => {
    const data = { ...coverData };

    if (e.target.name === "submissionDate") {
      data[e.target.name] = reverseDateFormat(e.target.value);
      setCoverData(data);
    } else {
      data[e.target.name] = e.target.value;
      setCoverData(data);
    }
  };

  return (
    <div>
      <div className="cover">
        <div className="cover__left">
          <Form.Item label="University">
            <Input name="university" onChange={handleInputChange} value={coverData.university} />
          </Form.Item>

          <Form.Item label="Title">
            <Input name="title" onChange={handleInputChange} value={coverData.title} />
          </Form.Item>

          <Form.Item label="Course Title">
            <Input name="courseTitle" onChange={handleInputChange} value={coverData.courseTitle} />
          </Form.Item>

          <Form.Item label="Course Code">
            <Input name="courseCode" onChange={handleInputChange} value={coverData.courseCode} />
          </Form.Item>

          <h2>Submitted To</h2>

          <Form.Item label="Name">
            <Input name="submittedTo" onChange={handleInputChange} value={coverData.submittedTo} />
          </Form.Item>

          <Form.Item label="Designation">
            <Select
              defaultValue="Lecturer"
              onSelect={(value) => setCoverData({ ...coverData, designation: value })}>
              <Select.Option value="Lecturer">Lecturer</Select.Option>
              <Select.Option value="Assistant Professor">Assistant Professor </Select.Option>
              <Select.Option value="Associate Professor">Associate Professor</Select.Option>
              <Select.Option value="Professor">Professor</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Department">
            <Select
              onSelect={(value) => setCoverData({ ...coverData, teacherDept: value })}
              defaultValue="Department of Computer Science & Engineering">
              <Select.Option value="Department of Computer Science & Engineering">
                CSE
              </Select.Option>
              <Select.Option value="Department of Business Administration">BBA </Select.Option>
              <Select.Option value="Department of Electrical & Electronic Engineering">
                EEE
              </Select.Option>
              <Select.Option value="Department of Civil Engineering">CE</Select.Option>
              <Select.Option value="Department of Architecture">Architecture</Select.Option>
              <Select.Option value="Department of Public Health">Public Health</Select.Option>
              <Select.Option value="Department of Tourism and Hospitality Management">
                THM
              </Select.Option>
              <Select.Option value="Department of English">English</Select.Option>
              <Select.Option value="Department of Law">Law</Select.Option>
              <Select.Option value="Department of Islamic Studies">Islamic Studies</Select.Option>
            </Select>
          </Form.Item>

          <h2>Submitted By</h2>

          <Form.Item label="Name">
            <Input name="submittedBy" onChange={handleInputChange} value={coverData.submittedBy} />
          </Form.Item>

          <Form.Item label="Student ID">
            <Input
              name="studentID"
              type="number"
              onChange={handleInputChange}
              value={coverData.studentID}
            />
          </Form.Item>

          <Form.Item label="Batch">
            <Input name="batch" onChange={handleInputChange} value={coverData.batch} />
          </Form.Item>
          <Form.Item label="Section">
            <Input name="section" onChange={handleInputChange} value={coverData.section} />
          </Form.Item>

          <Form.Item label="Department">
            <Select
              onSelect={(value) => setCoverData({ ...coverData, studentDept: value })}
              defaultValue="Department of Computer Science & Engineering">
              <Select.Option value="Department of Computer Science & Engineering">
                CSE
              </Select.Option>
              <Select.Option value="Department of Business Administration">BBA </Select.Option>
              <Select.Option value="Department of Electrical & Electronic Engineering">
                EEE
              </Select.Option>
              <Select.Option value="Department of Civil Engineering">CE</Select.Option>
              <Select.Option value="Department of Architecture">Architecture</Select.Option>
              <Select.Option value="Department of Public Health">Public Health</Select.Option>
              <Select.Option value="Department of Tourism and Hospitality Management">
                THM
              </Select.Option>
              <Select.Option value="Department of English">English</Select.Option>
              <Select.Option value="Department of Law">Law</Select.Option>
              <Select.Option value="Department of Islamic Studies">Islamic Studies</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date of Submission">
            <Input
              type="date"
              name="submissionDate"
              onChange={handleInputChange}
              value={coverData.submissionDate}
            />
          </Form.Item>
        </div>

        <Cover className="cover__right" ref={componentRef} coverData={coverData} />
      </div>
      <button id="printBtn" onClick={handlePrint}>
        <PrinterFilled /> Print
      </button>
    </div>
  );
};
export default CoverForm;
