import { Router } from 'express';
import { addNewService, getAllServices, updateService, deleteService } from '../controllers/service.controller.js';
const serviceRouter = Router();


//getAllServices
serviceRouter.get('/', getAllServices)


//addNewService
serviceRouter.post('/', addNewService);


//updateService

serviceRouter.put('/:id', updateService);


//deleteService

serviceRouter.delete('/:id', deleteService);

export default serviceRouter;