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



const getJournalEntries = () => api.get('/journalEntries/getJournalEntries');
const getJournalEntriesById=(id)=>api.get(`/journalEntries/getJournalEntryById/${id}`);
const addJournalEntry = (entryData) => api.post('/journalEntries/createJournalEntry', entryData);
const updateJournalEntry = (id, data) => api.put(`/journalEntries/updateJournalEntry/${id}`, data);
const deleteJournalEntry = (id) => api.delete(`/journalEntries/deleteJournalEntry/${id}`);

const getNotes = () => api.get('/notes/getAllNotes');
const getNoteById=(id)=>api.get(`/notes/getNoteById/${id}`);
const addNote = (noteData) => api.post('/notes/createNote', noteData);
const updateNote = (id, data) => api.put(`/notes/updateNote/${id}`, data);
const deleteNote = (id) => api.delete(`/notes/deleteNote/${id}`);


const getGoals = () => api.get('/setGoals/getAllGoals');
const getGoalById=(id)=> api.get(`/setGoals/getGoalById/${id}`);
const setGoal = (goalData) => api.post('/setGoals/createGoal', goalData);
const updateGoal = (id, data) => api.put(`/setGoals/updateGoal/${id}`, data);
const deleteGoal = (id) => api.delete(`/setGoals/deleteGoal/${id}`);

export {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    getExercises,
    createExercise,
    updateExercise,
    deleteExercise,
    getJournalEntriesById,
    getJournalEntries,
    addJournalEntry,
    updateJournalEntry,
    deleteJournalEntry,
    getNotes,
    addNote,
    getNoteById,
    updateNote,
    deleteNote,
    getGoals,
    setGoal,
    getGoalById,
    updateGoal,
    deleteGoal,
    
};