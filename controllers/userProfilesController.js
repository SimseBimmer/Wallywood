const UserProfilesModel = require('../models/userProfilesModel');

// Hent alle profiler
const getAllProfiles = async (req, res) => {
    try {
        const profiles = await UserProfilesModel.getAllProfiles();
        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profiles', error: error.message });
    }
};

// Hent én profil ved ID
const getProfileById = async (req, res) => {
    const { id } = req.params;
    try {
        const profile = await UserProfilesModel.getProfileById(id);
        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profile', error: error.message });
    }
};

// Opret en ny profil
const createProfile = async (req, res) => {
    const newProfile = req.body;
    try {
        const createdProfile = await UserProfilesModel.createProfile(newProfile);
        res.status(201).json(createdProfile);
    } catch (error) {
        res.status(500).json({ message: 'Error creating profile', error: error.message });
    }
};

// Opdater en profil
const updateProfile = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const updatedProfile = await UserProfilesModel.updateProfile(id, updatedData);
        if (!updatedProfile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(200).json(updatedProfile);
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile', error: error.message });
    }
};

// Slet en profil
const deleteProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await UserProfilesModel.deleteProfile(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting profile', error: error.message });
    }
};

module.exports = {
    getAllProfiles,
    getProfileById,
    createProfile,
    updateProfile,
    deleteProfile
};
