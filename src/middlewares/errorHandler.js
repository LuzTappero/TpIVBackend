const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    if (err.message === 'Product not found') {
        return res.status(404).json({ message: err.message })
    }else if (err.message === 'ID is required'){
        return res.status(400).json({ message: err.message })
    }else if(err.message === 'Product Name is required'){
        return res.status(400).json({ message: err.message })
    }else if (err.message === 'That product name already exists'){
        return res.status(409).json({ message: err.message })
    }
    res.status(500).json({ message: 'Internal Server Error', error: err.message })
}


export default errorHandler
