import { registerUser, loginUser } from "../services/authService.js";
import prisma from "../config/prisma.js";

export async function register(req, res, next) {
  try {
    const { name, email, password } = req.body;
    if (!email || !password) {
      const error = new Error("Email and password are required");
      error.statusCode = 400;
      throw error;
    }

    const { user, token } = await registerUser({ name, email, password });
    res.status(201).json({ user, token });
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("Email and password are required");
      error.statusCode = 400;
      throw error;
    }

    const { user, token } = await loginUser({ email, password });
    res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
}

export async function getMe(req, res, next) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
}
