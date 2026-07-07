export const createProgress = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Progress logged successfully" });
  } catch (error) {
    next(error);
  }
};

export const getAllProgress = async (req, res, next) => {
  try {
    res.status(200).json({ message: "All progress fetched successfully" });
  } catch (error) {
    next(error);
  }
};

export const getProgressById = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Progress fetched successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateProgress = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Progress updated successfully" });
  } catch (error) {
    next(error);
  }
};
