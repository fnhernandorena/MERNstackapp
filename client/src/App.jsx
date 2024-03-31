import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import { ProtectedRoute } from "./ProtectedRoute";
import { TaskProvider } from "./context/TaskContext";
import { Navbar } from "./components/Navbar";
import { TrainingProvider } from "./context/TrainingContext";
import { BadHabitProvider } from "./context/BadHabitContex";
import TrainingsPage from "./pages/TrainingsPage";
import TrainingFormPage from "./pages/TrainingFormPage";
import BadHabitPage from "./pages/BadHabitPage";
import BadHabitFormPage from "./pages/BadHabitFormPage";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <TrainingProvider>
          <BadHabitProvider>
            <BrowserRouter>
              <main className="max-w-screen-lg container mx-auto px-10">
                <Navbar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route element={<ProtectedRoute />}>
                    <Route path="/tasks" element={<TasksPage />} />
                    <Route path="/add-task" element={<TaskFormPage />} />
                    <Route path="/tasks/:id" element={<TaskFormPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/training" element={<TrainingsPage />} />
                    <Route
                      path="/add-training"
                      element={<TrainingFormPage />}
                    />
                    <Route
                      path="/training/:id"
                      element={<TrainingFormPage />}
                    />
                    <Route path="/badhabits" element={<BadHabitPage />} />
                    <Route path="/add-badhabit" element={<BadHabitFormPage />} />
                    <Route path="/badhabits/:id" element={<BadHabitFormPage />} />
                  </Route>
                </Routes>
              </main>
            </BrowserRouter>
          </BadHabitProvider>
        </TrainingProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
