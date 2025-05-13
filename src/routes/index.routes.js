import express from 'express';

// Importar todas as rotas

import authRouter from './auth.routes.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// rotas publicas
router.use('/auth', authRouter);

// rotas privadas
router.use(authMiddleware); // Middleware de autenticação para todas as rotas abaixo

export default router;