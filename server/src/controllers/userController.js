export const updateUser = async (req, res, next) => {
  try {
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    res.status(200).json({ message: "User fetched successfully" });
  } catch (error) {
    next(error);
  }
};
