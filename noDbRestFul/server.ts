import { Application, Router} from 'https://deno.land/x/oak/mod.ts'
import router from './router.ts'

const port = 5000

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

router.get('/api/v1/products', ({ response} : { response : any}) => {

    response.body = 'Hellow world'

})


console.log(`Server running on port ${port}`)

await app.listen({ port})
