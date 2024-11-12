import NominasTicket from '../models/nominasTicket.js';

const nominasTicketControllers = {
    // Listar todos los tickets
    async getTickets(req, res) {
        try {
            const tickets = await NominasTicket.find();
            res.json(tickets);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Listar tickets por id
    async getTicket(req, res) {
        try {
            const ticket = await NominasTicket.findById(req.params.id);
            res.json(ticket);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Crear tickets
    async postTicket(req, res) {
        try {
            const ticket = NominasTicket.create(req.body);
            res.json(ticket);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    // Actualizar tickets
    async putTicket(req, res) {
        try {
            const ticket = await NominasTicket.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(ticket);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};

export default nominasTicketControllers;