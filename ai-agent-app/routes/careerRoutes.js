import express from 'express';
import CareerAgent from '../agents/careerAgent.js'

const careerRoute = express.Router();


const careerAgent = new CareerAgent();

// POST /api/career
careerRoute.post('/', async (req, res) => {
    try {
        const message = (req.body?.message || '').toLowerCase();
        let response;

        // Route to appropriate method based on message content
        if (message.toLowerCase().includes('skills')) {
            response = await careerAgent.getSkillsSummary();
        } else if (message.toLowerCase().includes('experience') || message.toLowerCase().includes('work history')) {
            response = await careerAgent.getExperienceSummary();
        } else if (message.toLowerCase().includes('job') || message.toLowerCase().includes('position') || message.toLowerCase().includes('role')) {
            response = await careerAgent.assessJobFit(message);
        } else {
            const prompt = `The user asked: '${message}'. Respond as if you are a career specialist for a portfolio website. Suggest they ask about skills, experience, or job fit assessment.`;
            response = await careerAgent.getResponse(prompt);
        }

        res.json({ 
            success: true,
            response,
            agent: careerAgent.name
        });
    } catch (error) {
        console.error('Error in career endpoint:', error);
        res.status(500).json({ 
            success: false,
            error: 'Internal server error',
            message: error.message 
        });
    }
});

// GET /api/career/skills
careerRoute.get('/skills', async (req, res) => {
    try {
        const response = await careerAgent.getSkillsSummary();
        res.json({ 
            success: true,
            response,
            agent: careerAgent.name
        });
    } catch (error) {
        console.error('Error in skills endpoint:', error);
        res.status(500).json({ 
            success: false,
            error: 'Internal server error',
            message: error.message 
        });
    }
});

// GET /api/career/experience
// careerRoute.get('/experience', async (req, res) => {
//     try {
//         const response = await careerAgent.getExperienceSummary();
//         res.json({ 
//             success: true,
//             response,
//             agent: careerAgent.name
//         });
//     } catch (error) {
//         console.error('Error in experience endpoint:', error);
//         res.status(500).json({ 
//             success: false,
//             error: 'Internal server error',
//             message: error.message 
//         });
//     }
// });

// POST /api/career/assess-job
careerRoute.post('/assess-job', async (req, res) => {
 
    try {
        const { jobDescription } = req.body;
        
        if (!jobDescription) {
            return res.status(400).json({ 
                success: false,
                error: 'Job description is required' 
            });
        }

        const response = await careerAgent.assessJobFit(jobDescription);
        res.json({ 
            success: true,
            response,
            agent: careerAgent.name
        });
    } catch (error) {
        console.error('Error in job assessment endpoint:', error);
        res.status(500).json({ 
            success: false,
            error: 'Internal server error',
            message: error.message 
        });
    }
});

export default careerRoute;
