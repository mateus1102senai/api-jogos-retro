import express from 'express';

// Importar todas as rotas
import authRouter from './auth.routes.js';
import gameRouter from "./game.routes.js"
import recordRouter from "./record.routes.js";

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// rotas publicas
router.use('/auth', authRouter);
router.use('/games', gameRouter)
router.use('/records', recordRouter);

// rotas privadas
router.use(authMiddleware); // Middleware de autenticação para todas as rotas abaixo

export default router;