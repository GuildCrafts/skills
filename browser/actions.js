import state from './state'
import request from './request'

export function loadSession(){
  request('GET', '/session')
    .then(response => {
      state.set({session: response.json})
    })
    .catch(loadSessionError => {
      state.set({loadSessionError})
    })
}
