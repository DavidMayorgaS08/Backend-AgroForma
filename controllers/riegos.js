import Riegos from '../models/riegos.js';

const riegosControllers = {
    async getRiegos(req, res) {
        try {
            const riegos = await Riegos.find();
            res.json(riegos);
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
    }, 

    async getRiego(req, res) {
        try {
            const riego = await Riegos.findById(req.params.id);
            res.json(riego);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }, 

    async postRiego(req, res) {
        try {
            const riego = await Riegos.create(req.body);
            res.json(riego);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }, 

    async putRiego(req, res) {
        try {
            const riego = await Riegos.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(riego);
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
    }
};

export default riegosControllers;