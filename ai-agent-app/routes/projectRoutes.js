import express from 'express';
import ProjectAgent from '../agents/ProjectAgent.js';

;
const projectRoute = express.Router();

const projectAgent = new ProjectAgent();

// POST /api/project
projectRoute.post('/', async (req, res) => {
    try {
        const { message = '' } = req.body;
        let projectId = null;
        let response;

        // Detect project from message
        if (message.toLowerCase().includes('e-commerce') || message.toLowerCase().includes('ecommerce')) {
            projectId = 'project1';
        } else if (message.toLowerCase().includes('task') || message.toLowerCase().includes('management')) {
            projectId = 'project2';
        } else if (message.toLowerCase().includes('insta') || message.toLowerCase().includes('fista') || message.toLowerCase().includes('social')|| message.toLowerCase().includes('application')) {
            projectId = 'project3';
        }

        // Route to appropriate method based on message content
        if (projectId && (message.toLowerCase().includes('tell me more') || message.toLowerCase().includes('details'))) {
            response = await projectAgent.getProjectDetails(projectId);
        } else if (message.toLowerCase().includes('list') || message.toLowerCase().includes('all projects')) {
            response = await projectAgent.getProjectList();
        } else if (projectId) {
            response = await projectAgent.answerTechnicalQuestion(projectId, message);
        } else {
            const prompt = `The user asked: '${message}'. Respond as if you are a project specialist for a portfolio website. If they're asking about a specific project, suggest they mention one of the projects: E-commerce Platform, Task Management App, or Data Visualization Dashboard.`;
            response = await projectAgent.getResponse(prompt);
        }

        res.json({
            success: true,
            response,
            agent: projectAgent.name,
            projectId: projectId || null
        });
    } catch (error) {
        console.error('Error in project endpoint:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error',
            message: error.message
        });
    }
});

// GET /api/project/list
projectRoute.get('/list', async (req, res) => {
    try {
        const response = await projectAgent.getProjectList();
        res.json({
            success: true,
            response,
            agent: projectAgent.name
        });
    } catch (error) {
        console.error('Error in project list endpoint:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error',
            message: error.message
        });
    }
});

// GET /api/project/:projectId
projectRoute.get('/:projectId', async (req, res) => {
    try {
        const { projectId } = req.params;
        const response = await projectAgent.getProjectDetails(projectId);
        res.json({
            success: true,
            response,
            agent: projectAgent.name,
            projectId
        });
    } catch (error) {
        console.error('Error in project details endpoint:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error',
            message: error.message
        });
    }
});

export default projectRoute;