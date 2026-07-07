export const getAllPlans = async (req, res, next) => {
  try {
    res.status(200).json({ message: "All plans fetched successfully" });
  } catch (error) {
    next(error);
  }
};

export const createPlan = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Plan created successfully" });
  } catch (error) {
    next(error);
  }
};

export const getPlanById = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Plan fetched successfully" });
  } catch (error) {
    next(error);
  }
};

export const updatePlan = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Plan updated successfully" });
  } catch (error) {
    next(error);
  }
};

export const deletePlan = async (req, res, next) => {
  try {
    res.json({ message: "Plan deleted successfully" });
  } catch (error) {
    next(error);
  }
};
