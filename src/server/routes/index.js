import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

const router = Router()

router.get('/', (req, res)=>{
    
    return res.send('Home page')
})

router.post('/',(req, res)=>{
    return res.status(StatusCodes.CREATED).send('Carregado')
})
router.delete('/',(req, res)=>{
    return res.status(StatusCodes.OK).send('Deletado')
})


export { router }