import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const registerUser = (userData) => api.post('/users/register', userData);
const loginUser = (credentials) => api.post('/users/login', credentials);
const getUserProfile = (id) => api.get(`/users/profile/${id}`);
const updateUserProfile = (id, data) => api.put(`/users/update/${id}`, data);


const getExercises = () => api.get('/exercises/getExercises');
const createExercise = (exerciseData) => api.post('/exercises/createExercise', exerciseData);
const updateExercise = (id, data) => api.put(`/exercises/updateExercise/${id}`, data);
const deleteExercise = (id) => api.delete(`/exercises/deleteExercise/${id}`);



const getJournalEntries = () => api.get('/journal');
const addJournalEntry = (entryData) => api.post('/journal', entryData);
const updateJournalEntry = (id, data) => api.put(`/journal/${id}`, data);
const deleteJournalEntry = (id) => api.delete(`/journal/${id}`);

const getNotes = () => api.get('/notes');
const addNote = (noteData) => api.post('/notes', noteData);
const updateNote = (id, data) => api.put(`/notes/${id}`, data);
const deleteNote = (id) => api.delete(`/notes/${id}`);


const getGoals = () => api.get('/goals');
const setGoal = (goalData) => api.post('/goals', goalData);
const updateGoal = (id, data) => api.put(`/goals/${id}`, data);
const deleteGoal = (id) => api.delete(`/goals/${id}`);

export {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    getExercises,
    createExercise,
    updateExercise,
    deleteExercise,
  
    getJournalEntries,
    addJournalEntry,
    updateJournalEntry,
    deleteJournalEntry,
    getNotes,
    addNote,
    updateNote,
    deleteNote,
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
    
};