class AppError extends Error {
  constructor(message, statudCode = 400) {
    super();
    this.message = { message };
    this.statudCode = statudCode;
  }
}

const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statudCode).json(err.message);
  }

  console.log(err);

  return res.status(500).json({ message: "Internal server error" });
};

export { AppError, errorHandler };
