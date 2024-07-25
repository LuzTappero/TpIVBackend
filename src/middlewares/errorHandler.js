const errorHandler = (err, req, res, next) =>{
    console.error(err.stack);
    const errorMessages={
        'Product not found': { status: 404, message: 'Product not found' },
        'ID is required': {status:400, message: 'ID is required'},
        'That product name already exists': {status: 409, message: 'That product name already exists'}
    }
    const errorResponse = errorMessages[err.message] || { status: 500, message: 'Internal Server Error' };
    res.status(errorResponse.status).json({ message: errorResponse.message });
}
export default errorHandler
