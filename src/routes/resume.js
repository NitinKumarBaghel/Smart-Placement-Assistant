const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const auth = require('../middleware/auth');
const Resume = require('../models/Resume');
const { analyseResume } = require('../services/gemini');
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${req.user.id}-${Date.now()}${path.extname(file.originalname)}`)
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') cb(null, true);
    else cb(new Error('Only PDF files allowed'));
  }
});

router.post('/upload', auth, upload.single('resume'), async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { user: req.user.id },
      { user: req.user.id, filename: req.file.filename, originalName: req.file.originalname, uploadedAt: new Date() },
      { upsert: true, returnDocument: 'after' }
    );
    res.json({ message: 'Resume uploaded successfully', resume });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/my', auth, async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user.id });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/analyse', auth, async (req, res) => {
  try {
    const resume = await Resume.findOne({ user: req.user.id });
    if (!resume) return res.status(404).json({ message: 'No resume found. Please upload first.' });

    const filePath = path.join(__dirname, '../../uploads', resume.filename);
    const dataBuffer = fs.readFileSync(filePath);
    const base64 = dataBuffer.toString('base64');

    const analysis = await analyseResume(base64);

    resume.analysis = analysis;
    await resume.save();

    res.json({ message: 'Analysis complete', analysis });
  } catch (err) {
    console.log('ANALYSE ERROR:', err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;