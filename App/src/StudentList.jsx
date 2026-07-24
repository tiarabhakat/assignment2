import { useState, useEffect } from 'react';

function StudentList({ refreshTrigger }) {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchStudents = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:8000/students.php');
            const data = await response.json();

            if (data.status === 'success') {
                setStudents(data.data || []);
            } else {
                setError(data.message || 'Failed to fetch students.');
            }
        } catch (err) {
            setError('Unable to connect to the server. Please try again later.');
            console.error('Fetch error:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, [refreshTrigger]);

    // for a loading state
    if (loading) {
        return (
            <div className="student-list-container">
                <h2>Student Directory</h2>
                <div className="loading-spinner">Loading students...</div>
            </div>
        );
    }

    // error 
    if (error) {
        return (
            <div className="student-list-container">
                <h2>Student Directory</h2>
                <div className="error-message">{error}</div>
            </div>
        );
    }

    // empty state
    if (students.length === 0) {
        return (
            <div className="student-list-container">
                <h2>Student Directory</h2>
                <div className="empty-message">No students registered yet.</div>
            </div>
        );
    }

    // Render the list
    return (
        <div className="student-list-container">
            <h2>Student Directory</h2>
            <div className="student-grid">
                {students.map((student) => (
                    <div className="student-card" key={student.studentID}>
                        <div className="student-name">
                            {student.firstName} {student.lastName}
                        </div>
                        <div className="student-email">{student.email}</div>
                        <div className="student-program">{student.program}</div>
                    </div>
                ))}
            </div>
            <div className="student-count">
                Total: {students.length} student{students.length !== 1 ? 's' : ''}
            </div>
        </div>
    );
}

export default StudentList;