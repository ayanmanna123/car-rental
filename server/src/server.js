import express from "express";
import Env from "./env/env.js";
import mongoose from "mongoose";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dynamically set CORS origin for development and production
app.use((req, res, next) => {
  let allowedOrigin;
  if (Env.NODE_ENV === "production") {
    allowedOrigin = Env.CORS_ORIGIN_PROD;
  } else {
    allowedOrigin = Env.CORS_ORIGIN_DEV;
  }
  res.header("Access-Control-Allow-Origin", allowedOrigin);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});



// Database connection
if (Env.MONGO_URI) {
  mongoose
    .connect(Env.MONGO_URI)
    .then(() => {
      console.log("✅ Connected to MongoDB");
    })
    .catch((error) => {
      console.error("❌ MongoDB connection error:", error);
    });
} else {
  console.warn("⚠️  MONGO_URI not provided, database connection skipped");
}

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Car Rental API Server",
    status: "running",
    version: "1.0.0",
  });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

// API routes placeholder - can be extended later
// Example: app.use("/api/auth", authRoutes);
// Example: app.use("/api/cars", carRoutes);
// Example: app.use("/api/bookings", bookingRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.originalUrl,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    ...(Env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

export default app;