import { User } from "../models/user.js";
import { JWT_verify } from "../middlewares/jwtVerify.js";
const generateAccessAndRefreshToken = async (user) => {
  const accessToken = await user.generateAccessToken();
  const refreshToken = await user.generateRefreshToken();

  return { accessToken, refreshToken };
};
const registerUser = async (req, res) => {
  try {
    const { username, password, fullName } = req.body;

    if (!username || !password || !fullName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existedUser = await User.findOne({ username });

    if (existedUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      username,
      password,
      fullName,
    });

    return res
      .status(201)
      .json({ msg: "user Created Successfully!", data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ msg: "all fields are required!" });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "user credentials are invalid!" });
    }

    const passwordValidate = await user.comparePassword(password);
    if (!passwordValidate) {
      return res.status(400).json({ msg: "user credentials are invalid!" });
    }
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user
    );
    res
      .cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .cookie("accessToken", accessToken);

    console.log(req.cookies);
    return res.status(200).json({
      msg: "User logged in successfully!",
      data: { accessToken, refreshToken },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const logoutUser = async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1, // this removes the field from document
      },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({ msg: "user logged out successfully!" });
};
export { registerUser, loginUser, logoutUser };
