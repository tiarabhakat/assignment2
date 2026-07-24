// App.jsx
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

function App() {
    // Track to refresh list after registration
    const [refreshTrigger, setRefreshTrigger] = useState(0);

    // Trigger refresh
    const handleStudentRegistered = () => {
        setRefreshTrigger(prev => prev + 1);
    };

    return (
        <div className="App">
            <Header />
            <main>
                <section className="registration-section">
                    <StudentForm onStudentRegistered={handleStudentRegistered} />
                </section>
                <section className="directory-section">
                    <StudentList refreshTrigger={refreshTrigger} />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;