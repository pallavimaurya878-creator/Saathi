import { z } from 'zod';

// ===== Form Validation Schemas =====

/** Login form schema */
export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

/** Registration form schema */
export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Please confirm your password'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit phone number').optional().or(z.literal('')),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

/** Profile update schema */
export const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Invalid phone number').optional().or(z.literal('')),
  age: z.number().min(1, 'Age must be positive').max(150, 'Please enter valid age').optional(),
  height: z.number().min(50, 'Height must be at least 50 cm').max(300).optional(),
  weight: z.number().min(10, 'Weight must be at least 10 kg').max(500).optional(),
  bloodGroup: z.string().optional(),
});

/** Dietician form schema */
export const dieticianSchema = z.object({
  disease: z.string().min(1, 'Please select a condition'),
  age: z.number().min(1, 'Please enter your age').max(150),
  weight: z.number().min(10, 'Please enter your weight').max(500),
  height: z.number().min(50, 'Please enter your height').max(300),
  allergies: z.array(z.string()).optional(),
  preference: z.string().min(1, 'Please select a dietary preference'),
});

/** Emergency contact schema */
export const emergencyContactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Valid 10-digit phone number required'),
  relation: z.string().min(1, 'Relation is required'),
});
