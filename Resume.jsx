import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
    const [formData, setFormData] = useState({
        name: '',
        university: '',
        course: '',
        passOutYear: '',
        specialization: '',
        summary: '',
        education: '',
        skills: '',
        careerObjective: '',
        experience: '',
        achievements: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleEdit = () => {
        setSubmitted(false);
    };

    return (
        <div className="resume-container">
            <h1 className="title">Resume Builder</h1>
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="field-spacing"
                    />
                    <input
                        type="text"
                        name="university"
                        placeholder="University"
                        value={formData.university}
                        onChange={handleChange}
                        required
                        className="field-spacing"
                    />
                    <input
                        type="text"
                        name="course"
                        placeholder="Course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="field-spacing"
                    />
                    <select
                        name="passOutYear"
                        value={formData.passOutYear}
                        onChange={handleChange}
                        required
                        className="field-spacing"
                    >
                        <option value="">Select Pass Out Year</option>
                        {Array.from({ length: 9 }, (_, index) => {
                            const year = new Date().getFullYear() + index; // Starts from the current year and goes up to 2028
                            return <option key={year} value={year}>{year}</option>;
                        })}
                    </select>
                    <select
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        required
                        className="field-spacing"
                    >
                        <option value="">Select Specialization</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Software Engineering">Software Engineering</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Pharmacy">Pharmacy</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Biology">Biology</option>
                    </select>
                    <textarea
                        name="summary"
                        placeholder="Professional Summary"
                        value={formData.summary}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="education"
                        placeholder="Education Qualifications"
                        value={formData.education}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="skills"
                        placeholder="Academic and Non-academic Skills"
                        value={formData.skills}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="careerObjective"
                        placeholder="Career Objective"
                        value={formData.careerObjective}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="experience"
                        placeholder="Experience and Internships"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="achievements"
                        placeholder="Skills and Achievements"
                        value={formData.achievements}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            ) : (
                <div className="resume-preview">
                    <h2>Resume Preview</h2>
                    <div className="preview-content">
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>University:</strong> {formData.university}</p>
                        <p><strong>Course:</strong> {formData.course}</p>
                        <p><strong>Pass Out Year:</strong> {formData.passOutYear}</p>
                        <p><strong>Specialization:</strong> {formData.specialization}</p>
                        <p><strong>Professional Summary:</strong> {formData.summary}</p>
                        <p><strong>Education Qualifications:</strong> {formData.education}</p>
                        <p><strong>Academic and Non-academic Skills:</strong> {formData.skills}</p>
                        <p><strong>Career Objective:</strong> {formData.careerObjective}</p>
                        <p><strong>Experience and Internships:</strong> {formData.experience}</p>
                        <p><strong>Skills and Achievements:</strong> {formData.achievements}</p>
                    </div>
                    <button onClick={handleEdit} className="edit-btn">Edit Resume</button>
                </div>
            )}
        </div>
    );
};

export default Resume;
