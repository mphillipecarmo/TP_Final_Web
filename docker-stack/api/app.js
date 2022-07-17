// módulos da plataforma
import path from 'path'

// módulos npm
import express from 'express';
import hbs from 'hbs';
import logger from 'morgan';
import session from 'express-session';
import methodOverride from 'method-override';
import flash from 'connect-flash';
import favicon from 'serve-favicon';
import passport from'passport';
import dotenv from 'dotenv';
import cors from 'cors';


// a definição das rotas de cada "entidade" está isolada em seu próprio arquivo
// de forma a tornar o código do projeto organizado
import register from './routes/authRoute.js';
import index from './routes/index.js';
import perfil from './routes/perfil.js';
import library from './routes/library.js';
import avaliacoes from './routes/avaliacoes.js'


const app = express();
const __dirname = new URL('.', import.meta.url).pathname
dotenv.config({ path: './config/config.env' })
dotenv.config({ path: './config/configAWS.env'})


// configura a pasta que contém as views e o handlebars como templating engine
app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')
hbs.registerPartials(`${__dirname}/views/partials`, console.error)
app.set('json spaces', 2);

app.use(cors());
app.use(express.json())

// possibilita enviar um DELETE via formulário,
// quando é um POST com ?_method=DELETE na querystring
//
// isto é necessário porque formulários aceitam apenas GET e POST
app.use(methodOverride('_method', { methods: ['GET', 'POST'] }))
app.use(logger('dev'))                                    // registra tudo no terminal
app.use(express.json())                                   // necessário pra POST, PUT, PATCH etc.
app.use(express.urlencoded({ extended: true }))
app.use(session({                                         // necessário para flash()
  secret: 'lalala',
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())


app.use(flash())                                          // necessário para msgs efêmeras
app.use(express.static(path.join(__dirname, 'public')))   // serve arquivos estáticos

app.use(favicon(path.join(__dirname, 'public','images', 'veglifeLogo.svg')))

// configura as rotas "de cada entidade" da aplicação (separadinho, organizado)
app.use('/', index)
app.use('/auth', register)
app.use('/library', library)
app.use('/perfil', perfil)
app.use('/references', avaliacoes)




export default app