import { Response } from "express";
// Success and Error para respuestas del servidor

export const success = (
  res: Response,
  message = "",
  status = 200,
  result: any = "",
  ok = true
): Response => {
  return res.status(status).json({
    ok,
    error: false,
    status,
    message,
    result,
  });
};
export const error = (
  res: Response,
  message = "Internal server error",
  status = 500,
  result: any = "",
  ok = false
): Response => {
  return res.status(status).json({
    ok,
    error: true,
    status,
    message,
    result,
  });
};
