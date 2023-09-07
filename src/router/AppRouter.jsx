import { HashRouter as Router } from "react-router-dom";
import {Switch} from 'react-router-dom' 
import { HeroesRoutes } from '../heroes'
import { LoginPage } from '../auth'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
export const AppRouter = () => {
  return (
  
     <Router>
      <div>
        <Switch>

          <PublicRouter exact path="/login" component={ <LoginPage /> } >
            <LoginPage />
          </PublicRouter>
        
        {/* <Route path='login' element={<LoginPage />} /> */}
      
          <PrivateRouter path="/" component={ <HeroesRoutes /> }>
            <HeroesRoutes/> 
          </PrivateRouter>
        
        {/* <Route path='/*' element={<HeroesRoutes />} /> */}
        </Switch>
      
      </div>
     
     </Router>
      
  
    )
}

