export const getAllTopics = async (req, res, next) => {
  try {
    res.status(200).json({ message: "All topics fetched successfully" });
  } catch (error) {
    next(error);
  }
};

export const getTopicById = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Topic fetched successfully" });
  } catch (error) {
    next(error);
  }
};

export const createTopic = async (req, res, next) => {
  try {
    res.status(201).json({ message: "Topic created successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateTopic = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Topic updated successfully" });
  } catch (error) {
    next(error);
  }
};

export const deleteTopic = async (req, res, next) => {
  try {
    res.json({ message: "Topic deleted successfully" });
  } catch (error) {
    next(error);
  }
};
