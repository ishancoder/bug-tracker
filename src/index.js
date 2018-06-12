import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import Bugs from './components/Bugs/Bugs';

ReactDOM.render(<Provider store={store}>
                    <HashRouter>
                        <div>
                            <Route exact path="/" component={App}/>
                            <Route path="/repos/:repo_id/" component={Bugs} />
                        </div>
                    </HashRouter>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
