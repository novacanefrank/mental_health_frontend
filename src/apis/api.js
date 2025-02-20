import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const registerUser = (userData) => api.post('/users/signup', userData);
const loginUser = (credentials) => api.post('/users/login', credentials);
const getUsers = () => api.get('/users/view_users');
const createUser = (userData) => api.post('/users/create_users', userData);
const updateUser = (id, data) => api.put(`/users/update_users/${id}`, data);
const deleteUser = (id) => api.delete(`/users/delete_users/${id}`);

const getExercises = () => api.get('/getExcersises');
const getExerciseById = (id) => api.get(`/getExersiseById/${id}`);
const createExercise = (exerciseData) => api.post('/createExersise', exerciseData);
const updateExercise = (id, data) => api.put(`/updateExcersise/${id}`, data);
const deleteExercise = (id) => api.delete(`/deleteExersise/${id}`);

const getMoodEntries = () => api.get('/getMoodEntries');
const getMoodEntryById = (id) => api.get(`/getMoodEntryById/${id}`);
const createMoodEntry = (entryData) => api.post('/createMoodEntry', entryData);
const updateMoodEntry = (id, data) => api.put(`/updateMoodEntry/${id}`, data);
const deleteMoodEntry = (id) => api.delete(`/deleteMoodEntry/${id}`);

const getJournalEntries = () => api.get('/getJournalEntries');
const getJournalEntryById = (id) => api.get(`/getJournalEntryById/${id}`);
const createJournalEntry = (entryData) => api.post('/createJournalEntry', entryData);
const updateJournalEntry = (id, data) => api.put(`/updateJournalEntry/${id}`, data);
const deleteJournalEntry = (id) => api.delete(`/deleteJournalEntry/${id}`);

const getNotes = () => api.get('/getAllNotes');
const getNoteById = (id) => api.get(`/getNoteById/${id}`);
const createNote = (noteData) => api.post('/createNote/${id}', noteData);
const updateNote = (id, data) => api.put(`/updateNote/${id}`, data);
const deleteNote = (id) => api.delete(`/deleteNote/${id}`);

const getReminders = () => api.get('/getAllReminders/${id}');
const getReminderById = (id) => api.get(`/getReminderById/${id}`);
const createReminder = (reminderData) => api.post('/createReminder/${id}', reminderData);
const updateReminder = (id, data) => api.put(`/updateReminder/${id}`, data);
const deleteReminder = (id) => api.delete(`/deleteReminder/${id}`);

const getReviews = () => api.get('/getAllReviews/${id}');
const getReviewById = (id) => api.get(`/getReviewById/${id}`);
const createReview = (reviewData) => api.post('/createReview/${id}', reviewData);
const updateReview = (id, data) => api.put(`/updateReview/${id}`, data);
const deleteReview = (id) => api.delete(`/deleteReview/${id}`);

const getGoals = () => api.get('/getAllGoals');
const getGoalById = (id) => api.get(`/getAllGoals/${id}`);
const createGoal = (goalData) => api.post('/createGoal', goalData);
const updateGoal = (id, data) => api.put(`/updateGoal/${id}`, data);
const deleteGoal = (id) => api.delete(`/deleteGoal/${id}`);

export {
    registerUser,
    loginUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getExercises,
    getExerciseById,
    createExercise,
    updateExercise,
    deleteExercise,
    getMoodEntries,
    getMoodEntryById,
    createMoodEntry,
    updateMoodEntry,
    deleteMoodEntry,
    getJournalEntries,
    getJournalEntryById,
    createJournalEntry,
    updateJournalEntry,
    deleteJournalEntry,
    getNotes,
    getNoteById,
    createNote,
    updateNote,
    deleteNote,
    getReminders,
    getReminderById,
    createReminder,
    updateReminder,
    deleteReminder,
    getReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview,
    getGoals,
    getGoalById,
    createGoal,
    updateGoal,
    deleteGoal,
    api
};
