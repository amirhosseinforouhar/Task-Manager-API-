const errorHandler = (error ,req , res , next) => {
    res.status(error.statusCode || 500).json({
        message : error.message
    })
}

module.exports = errorHandler ; 