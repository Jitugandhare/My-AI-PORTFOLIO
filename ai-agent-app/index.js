import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import welcomeRoutes from './routes/welcomeRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import careerRoutes from './routes/careerRoutes.js';
import clientRoutes from './routes/clientRoutes.js';
import researchRoutes from './routes/researchRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Request logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// API Info endpoint
app.get('/api', (req, res) => {
  res.json({
    name: 'Portfolio AI Agents API',
    version: '1.0.0',
    description: 'AI-powered portfolio website API with specialized agents',
    endpoints: {
      welcome: {
        path: '/api/welcome',
        methods: ['POST'],
        description: 'Welcome agent for visitor greetings and navigation'
      },
      projects: {
        path: '/api/project',
        methods: ['GET', 'POST'],
        description: 'Project information and technical Q&A',
        subpaths: ['/list', '/:projectId']
      },
      career: {
        path: '/api/career',
        methods: ['GET', 'POST'],
        description: 'Skills, experience, and job fit assessments',
        subpaths: ['/skills', '/experience', '/assess-job']
      },
      client: {
        path: '/api/client',
        methods: ['GET', 'POST'],
        description: 'Service information and proposal generation',
        subpaths: ['/services', '/services/:serviceId', '/process', '/proposal']
      },
      research: {
        path: '/api/research',
        methods: ['GET', 'POST'],
        description: 'Web research and technology comparisons',
        subpaths: ['/trends', '/technology', '/compare', '/search']
      }
    },
    agents: [
      {
        name: 'WelcomeAgent',
        role: 'Greeter',
        description: 'Greets visitors and provides navigation guidance',
        capabilities: ['visitor_greeting', 'section_suggestions', 'visitor_type_detection']
      },
      {
        name: 'ProjectAgent',
        role: 'TechExpert',
        description: 'Provides detailed project information and technical answers',
        capabilities: ['project_details', 'technical_qa', 'code_explanations']
      },
      {
        name: 'CareerAgent',
        role: 'CareerGuide',
        description: 'Shares skills, experience, and job fit assessments',
        capabilities: ['skills_summary', 'experience_overview', 'job_fit_analysis']
      },
      {
        name: 'ClientAgent',
        role: 'BusinessAdvisor',
        description: 'Handles service inquiries and generates proposals',
        capabilities: ['service_details', 'pricing_info', 'proposal_generation', 'process_explanation']
      },
      {
        name: 'ResearchAgent',
        role: 'ResearchAssistant',
        description: 'Conducts web searches and technology research',
        capabilities: ['web_search', 'technology_research', 'trend_analysis', 'tech_comparison']
      }
    ]
  });
});

// Static placeholder images route
app.get([
  '/static/images/default_avatar.png',
  '/static/images/default_project.jpg',
  '/static/images/career_avatar.png',
  '/static/images/client_avatar.png',
  '/static/images/project_avatar.png',
  '/static/images/research_avatar.png',
  '/static/images/welcome_avatar.png'
], (req, res) => {
  // 1x1 transparent GIF placeholder
  const gif = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');
  res.set({
    'Content-Type': 'image/gif',
    'Cache-Control': 'public, max-age=31536000',
    'Expires': 'Thu, 31 Dec 2037 23:59:59 GMT'
  });
  res.send(gif);
});

// Mount API routes
app.use('/api/welcome', welcomeRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/career', careerRoutes);
app.use('/api/client', clientRoutes);
app.use('/api/research', researchRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Portfolio AI Agents API',
    version: '1.0.0',
    documentation: '/api',
    agents: 5,
    status: 'running'
  });
});

// Rate limiting middleware (basic)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 100;

app.use('/api', (req, res, next) => {
  const clientIp = req.ip || req.connection.remoteAddress;
  const now = Date.now();

  if (!rateLimitMap.has(clientIp)) {
    rateLimitMap.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return next();
  }

  const clientData = rateLimitMap.get(clientIp);

  if (now > clientData.resetTime) {
    clientData.count = 1;
    clientData.resetTime = now + RATE_LIMIT_WINDOW;
    return next();
  }

  if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests',
      message: 'Rate limit exceeded. Please try again later.',
      resetTime: new Date(clientData.resetTime).toISOString()
    });
  }

  clientData.count++;
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', {
    message: err.message,
    stack: err.stack,
    url: req.url,
    method: req.method,
    timestamp: new Date().toISOString()
  });

  res.status(err.status || 500).json({
    success: false,
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use('/*splat', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    path: req.originalUrl,
    method: req.method,
    availableEndpoints: [
      'GET /',
      'GET /api',
      'POST /api/welcome',
      'GET /api/project/list',
      'GET /api/project/:projectId',
      'POST /api/project',
      'GET /api/career/skills',
      'GET /api/career/experience',
      'POST /api/career/assess-job',
      'GET /api/client/services',
      'GET /api/client/process',
      'POST /api/client/proposal',
      'GET /api/research/trends',
      'POST /api/research/search',
      'POST /api/research/compare'
    ],
    timestamp: new Date().toISOString()
  });
});

// Disable caching in development
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    res.set({
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0'
    });
    next();
  });
}

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log('🤖 AI Agents: Welcome, Project, Career, Client, Research');
});
