// @desc get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({message: "Get Goals"})
}

// @desc set goals
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
    res.status(200).json({message: "Set Goals"})
}

// @desc update goal
// @route PUT /api/goals
// @access Private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Update Goal ${req.params.id}`})
}

// @desc delete goal
// @route DELETE /api/goals
// @access Private
const deleteGoal = (req, res) => {
    res.status(200).json({message: `Delete Goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}