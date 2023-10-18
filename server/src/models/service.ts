import { InferSchemaType, Schema, model } from "mongoose";

// Define the schema for the service
const serviceSchema = new Schema({
  name: { type: String, required: true },
  currency: { type: String, required: true },
  amount: { type: Number, required: true },
  duration: { type: Number, required: true },
  workers: [{ type: String }], // Assuming workers are represented as an array of strings
});

// Define the TypeScript type for the service document
type Service = InferSchemaType<typeof serviceSchema>;

// Create the Mongoose model for the service
const ServiceModel = model<Service>("Service", serviceSchema);

// Export the ServiceModel
export default ServiceModel;
