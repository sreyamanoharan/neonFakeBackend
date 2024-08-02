import { Router  } from "express";
import { getTumbnail, getVideo, insertingDatas} from '../controller/projectController.js'

const projectRoter = Router()

projectRoter.post('/inserting',insertingDatas)
projectRoter.get('/gettingTumbnail',getTumbnail)
projectRoter.get('/getVideo/:id',getVideo)


export default projectRoter