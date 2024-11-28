// "http://localhost:3000/api/user_profiles"
const express = require('express');
const router = express.Router();
const userProfilesController = require('../controllers/userProfilesController');

// Hent alle profiler
router.get('/', userProfilesController.getAllProfiles);

// Hent en profil ved ID
router.get('/:id', userProfilesController.getProfileById);

// Opret en ny profil
router.post('/', userProfilesController.createProfile);

// Opdater en profil
router.put('/:id', userProfilesController.updateProfile);

// Slet en profil
router.delete('/:id', userProfilesController.deleteProfile);

module.exports = router;
