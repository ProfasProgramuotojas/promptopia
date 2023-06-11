import { Schema, model, models } from "mongoose";

let User;

try {
  // Try getting the existing model
  User = model("User");
} catch {
  // If the model doesn't exist, create a new one
  User = model(
    "User",
    new Schema({
      email: {
        type: String,
        unique: [true, "email already exists!"],
        required: [true, "email is required"],
      },
      username: {
        type: String,
        match: [
          /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
          "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
        ],
        required: [true, "username is required"],
      },
      image: {
        type: String,
      },
    })
  );
}

export default User;
